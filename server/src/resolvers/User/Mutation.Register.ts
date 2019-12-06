import { ICreateUserArgs, IAuthResponse } from '../../shared/interfaces'
import { User } from '../../entity/User'
import { validate } from 'class-validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const register = async (
  _,
  { data: { username, email, password } }: ICreateUserArgs
): Promise<IAuthResponse> => {
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
    { username: user.username },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1h'
    }
  )

  return {
    user,
    token
  }
}
