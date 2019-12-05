import resolvers from './resolvers'
import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
import { isUserLoggedIn } from './utils/isUserLoggedIn'
dotenv.config()
;(async () => {
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

  server.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
  )
})()
