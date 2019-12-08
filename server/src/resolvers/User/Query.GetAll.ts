import { User } from '../../entity/User'
import { IApolloContext } from '../../shared/interfaces'
import { AuthenticationError } from 'apollo-server-errors'

export const users = async (
  _,
  __,
  { user: currentUser }: IApolloContext
): Promise<Array<User>> => {
  if (!currentUser) {
    throw new AuthenticationError(
      'You are not logged in, please log in to proceed.'
    )
  }

  const users = await User.find({ take: 10 })

  for (let i = 0; i < users.length; i++) {
    users[i].password = ''
  }

  return users
}
