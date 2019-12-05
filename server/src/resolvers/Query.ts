import { User } from '../entity/User'

export const Query = {
  hello: (): string => 'Hello Apollo! 🚀',
  users: async (): Promise<Array<User>> => {
    return User.find({ take: 10 })
  }
}
