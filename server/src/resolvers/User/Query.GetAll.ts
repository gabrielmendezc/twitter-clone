import { User } from '../../entity/User'

export const users = async (): Promise<Array<User>> => {
  const users = await User.find({ take: 10 })

  for (let i = 0; i < users.length; i++) {
    users[i].password = ''
  }

  return users
}
