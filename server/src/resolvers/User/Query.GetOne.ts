import { User } from '../../entity/User'
import { IGetOneQuery } from '../../shared/interfaces'

export const user = async (
  _,
  { username }: IGetOneQuery
): Promise<User | null> => {
  const user = await User.findOne({ where: { username } })

  if (!user) {
    return null
  }

  user.password = ''

  return user
}
