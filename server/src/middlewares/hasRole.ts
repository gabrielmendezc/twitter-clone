import { MiddlewareFn } from 'type-graphql'
import { MyContext } from '../shared/interfaces'
import { User } from '../entity/User'
import { AuthenticationError, ApolloError } from 'apollo-server-express'

export const hasRole: (...roles: string[]) => MiddlewareFn<MyContext> = (
  ...roles: string[]
) => async ({ context }, next) => {
  const { username } = context.payload!
  const currentUser = await User.findOne({ where: { username } })

  if (!currentUser) {
    throw new AuthenticationError(
      'You are not logged in, please log in to proceed.'
    )
  }

  if (!roles.includes(currentUser.role)) {
    throw new ApolloError(
      'You are not authorized to access this resource.',
      'UNAUTHORIZED'
    )
  }

  return next()
}
