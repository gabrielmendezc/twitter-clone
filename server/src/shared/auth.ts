import { sign } from 'jsonwebtoken'
import { User } from '../entity/User'
import { Response } from 'express'
import { getConnection } from 'typeorm'

export const createAccessToken = (user: User) => {
  return sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '15m'
  })
}

export const createRefreshToken = (user: User) => {
  return sign(
    { username: user.username, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: '7d' }
  )
}

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('jid', token, {
    httpOnly: true
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
