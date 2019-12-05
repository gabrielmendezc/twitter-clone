import resolvers from './resolvers'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
import { isUserLoggedIn } from './utils/isUserLoggedIn'
import express from 'express'
dotenv.config()
;(async () => {
  const app = express()

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const user = await isUserLoggedIn(req)

      return { user }
    }
  })
  const PORT = process.env.PORT || 4000

  await createConnection()

  server.applyMiddleware({ app })

  app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
  )
})()
