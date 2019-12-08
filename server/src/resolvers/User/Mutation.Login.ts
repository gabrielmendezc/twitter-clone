import {
  ILoginArgs,
  IApolloContext,
  IAuthResponse
} from '../../shared/interfaces'
import { User } from '../../entity/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login = async (
  _,
  { data: { username, password } }: ILoginArgs,
  { user: currentUsername }: IApolloContext
): Promise<IAuthResponse> => {
  if (currentUsername) {
    throw new Error('You are already logged in.')
  }

  const user = await User.findOne({ where: { username } })

  if (!user) {
    throw new Error('Invalid credentials.')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    throw new Error('Invalid credentials.')
  }

  const token = jwt.sign(
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
}
