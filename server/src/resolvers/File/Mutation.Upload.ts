import { FileUpload } from 'graphql-upload'
import cloudinary from 'cloudinary'

export const uploadFile = async (_, args): Promise<any> => {
  const file: FileUpload = await args.file
  const { filename } = file

  try {
    const result = await cloudinary.v2.uploader.upload(filename)
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
  }

  return null
}
