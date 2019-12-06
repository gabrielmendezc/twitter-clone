import { User } from '../../entity/User'
import { IApolloContext } from '../../shared/interfaces'

export const deleteMe = async (
  _,
  __,
  { user }: IApolloContext
): Promise<User | void> => {
  if (!user) {
    throw new Error('You are not logged in, please log in to proceeed.')
  }

  // return the deleted user ??

  await User.delete({ username: user.username })
}
