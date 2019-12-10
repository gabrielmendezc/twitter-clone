import { FileUpload } from 'graphql-upload'
import cloudinary from 'cloudinary'
import { createWriteStream, readdir, unlink } from 'fs'
import shortid from 'shortid'
import { IApolloContext } from '../../shared/interfaces'
import { AuthenticationError } from 'apollo-server-errors'
import { User } from '../../entity/User'
import { join } from 'path'

const uploadDir = './uploads'

const storeUpload = async ({ stream, filename }): Promise<any> => {
  const id = shortid.generate()
  const path = `${uploadDir}/${id}-${filename}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path }))
      .on('error', reject)
  )
}

const processUpload = async upload => {
  const { createReadStream, filename, mimetype, encoding } = await upload
  const stream = createReadStream()
  const { id, path } = await storeUpload({ stream, filename })
  return { id, filename, mimetype, encoding, path }
}

export const changeProfilePicture = async (
  _,
  args,
  { user: currentUser }: IApolloContext
): Promise<any> => {
  if (!currentUser) {
    throw new AuthenticationError(
      'You are not logged in, please log in to proceed.'
    )
  }
  const file: FileUpload = await args.file
  try {
    const pictureUrl = await processUpload(file)
    const result = await cloudinary.v2.uploader.upload(pictureUrl.path, {
      folder: 'profilePictures'
    })

    readdir(uploadDir, (err, files) => {
      if (err) throw err

      for (const file of files) {
        unlink(join(uploadDir, file), err => {
          if (err) throw err
        })
      }
    })

    await User.update(
      { username: currentUser.username },
      { profilePicture: result.url }
    )
    return result.url
  } catch (err) {
    throw new Error('Your profile picture could not be updated, we are sorry.')
  }
}
