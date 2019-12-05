import { User } from '../../entity/User'

export const users = async (): Promise<Array<User>> => {
  return User.find({ take: 10 })
}
