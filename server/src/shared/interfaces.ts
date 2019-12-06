import { User } from '../entity/User'

export interface ICreateUserArgs {
  data: {
    username: string
    email: string
    password: string
  }
}

export interface IApolloContext {
  user: {
    id: number
    username: string
    email: string
    role: string
  }
}

export interface IGetOneQuery {
  username: string
}

export interface ILoginArgs {
  data: {
    username: string
    password: string
  }
}

export interface IUpdateMe {
  data: {
    newUsername?: string
    newEmail?: string
  }
}

export interface IAuthResponse {
  token: string
  user: User
}
