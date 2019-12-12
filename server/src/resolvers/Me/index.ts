import {
  Resolver,
  ObjectType,
  Field,
  Query,
  UseMiddleware,
  Ctx,
  Arg
} from 'type-graphql'
import { User } from '../../entity/User'
import { MyContext } from '../../shared/interfaces'
import { compare } from 'bcryptjs'
import { isAuth } from '../../middlewares/isAuth'

@ObjectType()
export class AuthResponse {
  @Field(() => String)
  token: string

  @Field(() => User)
  user: User
}

@Resolver()
export class MeResolver {
  @Query(() => User)
  @UseMiddleware(isAuth)
  async me(@Ctx() { payload }: MyContext): Promise<User | null> {
    const me = await User.findOne({ where: { username: payload!.username } })

    if (!me)
      throw new Error('Something went wrong, sorry for the inconvenience.')

    return me
  }

  @Query(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteMe(
    @Arg('password') password: string,
    @Ctx() { payload }: MyContext
  ) {
    const me = await User.findOne({ where: { username: payload!.username } })

    if (!me)
      throw new Error('Something went wrong, sorry for the inconvenience.')

    const isPasswordValid = await compare(password, me.password)

    if (!isPasswordValid) {
      throw new Error('Invalid password.')
    }

    await User.delete({ username: payload!.username })
    return true
  }
}
