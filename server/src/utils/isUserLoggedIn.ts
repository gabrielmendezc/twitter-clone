import { Request } from 'express'
import { promisify } from 'util'
import jwt from 'jsonwebtoken'
import { User } from '../entity/User'

export const isUserLoggedIn = async (req: Request) => {
  let token: string | undefined
  let user: User | undefined
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (token) {
    const decoded: any = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET as string
    )

    user = await User.findOne(decoded.id)

    const userData = {
      id: user!.id,
      username: user!.username,
      email: user!.email,
      role: user!.role
    }

    return userData
  }

  // Change this return to null once front end login is available
  return null
}
