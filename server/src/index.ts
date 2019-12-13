import { ApolloServer } from 'apollo-server-express'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
import 'reflect-metadata'
import cloudinary from 'cloudinary'
import express from 'express'
import { MeResolver } from './resolvers/Me'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/User'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { verify } from 'jsonwebtoken'
import { User } from './entity/User'
import {
  sendRefreshToken,
  createRefreshToken,
  createAccessToken
} from './shared/auth'
dotenv.config()
;(async () => {
  const app = express()
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  )
  app.use(cookieParser())

  app.post('/refresh_token', async (req, res) => {
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
  })

  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

  const PORT = process.env.PORT || 4000

  await createConnection()

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [MeResolver, UserResolver]
    }),
    context: ({ req, res }) => ({ req, res })
  })

  server.applyMiddleware({ app })

  app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
  )
})()
