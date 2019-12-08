import { User } from '../../entity/User'
import { IUpdateMe, IApolloContext } from '../../shared/interfaces'
import { AuthenticationError } from 'apollo-server-errors'

export const updateMe = async (
  _,
  args: IUpdateMe,
  { user: currentUser }: IApolloContext
): Promise<User> => {
  if (!currentUser) {
    throw new AuthenticationError(
      'You are not logged in, please log in to proceed.'
    )
  }

  await User.update(
    { username: currentUser.username },
    {
      email: args.data.newEmail || currentUser.email,
      username: args.data.newUsername || currentUser.username
    }
  )

  const updatedUser = await User.findOne(currentUser.id)

  if (!updatedUser) {
    throw new Error('Something went wrong, sorry for the inconvenience.')
  }

  return updatedUser
}
