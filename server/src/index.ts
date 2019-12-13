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
import { refreshToken } from './utils/refreshToken'

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

  app.post('/refresh_token', refreshToken)

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

  server.applyMiddleware({ app, cors: false })

  app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
  )
})()
