import { sign } from 'jsonwebtoken'
import { User } from '../entity/User'
import { Response } from 'express'
import { getConnection } from 'typeorm'

export const createAccessToken = (user: User) => {
  return sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  })
}

export const createRefreshToken = (user: User) => {
  return sign(
    { username: user.username, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  )
}

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('jid', token, {
    httpOnly: true,
    path: '/refresh_token',
    secure: process.env.NODE_ENV === 'production' ? true : false,
    maxAge: +process.env.JID_COOKIE_EXPIRY!
  })
}

export const revokeRefreshToken = async (
  username: string
): Promise<Boolean> => {
  const user = await User.findOne({ where: { username } })

  if (!user) {
    return false
  }

  await getConnection()
    .getRepository(User)
    .increment({ username }, 'tokenVersion', 1)

  return true
}
