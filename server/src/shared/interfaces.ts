import { User } from '../entity/User'

export interface ICreateUserArgs {
  data: {
    username: string
    email: string
    password: string
  }
}

export interface IApolloContext {
  user: User
}

export interface IGetOneQuery {
  username: string
}
