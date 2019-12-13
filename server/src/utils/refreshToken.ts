import { Request, Response } from 'express'
import {
  sendRefreshToken,
  createRefreshToken,
  createAccessToken
} from '../shared/auth'
import { User } from '../entity/User'
import { verify } from 'jsonwebtoken'

export const refreshToken = async (req: Request, res: Response) => {
  const token = req.cookies.jid
  if (!token) {
    return res.send({
      ok: false,
      accessToken: ''
    })
  }

  let payload: any = null

  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET!)
  } catch (err) {
    console.log(err)
    return res.send({ ok: false, accessToken: '' })
  }

  const user = await User.findOne({ where: { username: payload.username } })

  if (!user) {
    return res.send({ ok: false, accessToken: '' })
  }

  if (user.tokenVersion !== payload.tokenVersion) {
    return res.send({ ok: false, accessToken: '' })
  }

  sendRefreshToken(res, createRefreshToken(user))
  return res.send({ ok: true, accessToken: createAccessToken(user) })
}
