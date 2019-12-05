import { User } from './entity/User'
import bcrypt from 'bcryptjs'
import { ICreateUserArgs } from './shared/interfaces'
import jwt from 'jsonwebtoken'
import { validate } from 'class-validator'

const resolvers = {
  Query: {
    hello: (): string => 'Hello Apollo! 🚀',
    users: async (): Promise<Array<User>> => {
      return User.find({ take: 10 })
    }
  },
  Mutation: {
    register: async (
      _: any,
      { data: { username, email, password } }: ICreateUserArgs
    ): Promise<string> => {
      const hashedPassword = await bcrypt.hash(password, 12)

      const user = User.create({
        username,
        email,
        password: hashedPassword
      })

      const validationErrors = await validate(user)

      if (validationErrors.length > 0) throw new Error('Validation failed')

      await user.save()

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
      )

      return token
    }
  }
}

export default resolvers
