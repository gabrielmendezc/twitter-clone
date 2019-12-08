import { User } from '../../entity/User'
import { IGetOneQuery, IApolloContext } from '../../shared/interfaces'
import { AuthenticationError } from 'apollo-server-errors'

export const user = async (
  _,
  { username }: IGetOneQuery,
  { user: currentUser }: IApolloContext
): Promise<User | null> => {
  if (!currentUser) {
    throw new AuthenticationError(
      'You are not logged in, please log in to proceed.'
    )
  }

  const user = await User.findOne({ where: { username } })

  if (!user) {
    return null
  }

  user.password = ''

  return user
}
