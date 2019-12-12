import { Resolver, Mutation, Arg, Query, UseMiddleware } from 'type-graphql'
import { AuthResponse } from '../Me'
import bcrypt, { compare } from 'bcryptjs'
import { User } from '../../entity/User'
import { validate } from 'class-validator'
import { sign } from 'jsonwebtoken'
import { isAuth } from '../../middlewares/isAuth'

@Resolver()
export class UserResolver {
  @Mutation(() => AuthResponse)
  async register(
    @Arg('username') username: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<AuthResponse | void> {
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = User.create({
      username,
      email,
      password: hashedPassword
    })

    const validationErrors = await validate(user)

    if (validationErrors.length > 0) throw new Error('Validation failed')

    try {
      await user.save()

      const token = sign(
        { username: user.username },
        process.env.JWT_SECRET as string,
        {
          expiresIn: '2h'
        }
      )

      return {
        user,
        token
      }
    } catch (err) {
      if (err.code == 23505) {
        throw new Error('That username is taken')
      }
    }
  }

  @Mutation(() => AuthResponse)
  async login(
    @Arg('username') username: string,
    @Arg('password') password: string
  ): Promise<AuthResponse> {
    const user = await User.findOne({ where: { username } })

    if (!user) {
      throw new Error('Invalid credentials.')
    }

    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      throw new Error('Invalid credentials.')
    }

    // TODO: Add refresh token
    const token = sign(
      { username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: '15m' }
    )

    return {
      token,
      user
    }
  }

  @Query(() => [User])
  @UseMiddleware(isAuth)
  async getAll(): Promise<User[]> {
    const users = await User.find()
    return users
  }

  @Query(() => User)
  @UseMiddleware(isAuth)
  async getOne(@Arg('username') username: string): Promise<User> {
    const user = await User.findOne({ where: { username } })

    if (!user) {
      throw new Error('No user could be found.')
    }

    return user
  }
}
