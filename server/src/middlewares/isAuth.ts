import { MiddlewareFn } from 'type-graphql'
import { MyContext } from '../shared/interfaces'
import { AuthenticationError } from 'apollo-server-express'
import { verify } from 'jsonwebtoken'

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers['authorization']

  if (!authorization) {
    throw new AuthenticationError(
      'You are not logged in, please log in to proceed.'
    )
  }

  try {
    const token = authorization.split(' ')[1]
    const payload = verify(token, process.env.JWT_SECRET!)
    context.payload = payload as any
  } catch (err) {
    console.log(err)
    throw new AuthenticationError(
      'You are not logged in, please log in to proceed.'
    )
  }

  return next()
}
