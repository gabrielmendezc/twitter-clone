import { User } from '../../entity/User'
import { IApolloContext } from '../../shared/interfaces'
import { AuthenticationError } from 'apollo-server-errors'

export const me = async (
  _,
  __,
  { user: currentUser }: IApolloContext
): Promise<User> => {
  if (!currentUser) {
    throw new AuthenticationError(
      'You are not logged in, please log in to proceed.'
    )
  }

  const user = await User.findOne({ where: { username: currentUser.username } })

  if (!user) {
    throw new Error('Something went wrong, sorry for the inconvenience.')
  }

  user.password = ''

  return user
}
