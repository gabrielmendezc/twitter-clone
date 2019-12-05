import { User } from '../../entity/User'
import { IApolloContext } from '../../shared/interfaces'

export const me = async (
  _,
  __,
  { user: currentUsername }: IApolloContext
): Promise<User> => {
  if (!currentUsername) {
    throw new Error('You are not logged in, please log in to proceed.')
  }

  const user = await User.findOne({ where: { username: currentUsername } })

  if (!user) {
    throw new Error('Something went wrong, sorry for the inconvenience.')
  }

  // Make password unaccesible through query ;)
  user.password = ''

  return user
}
