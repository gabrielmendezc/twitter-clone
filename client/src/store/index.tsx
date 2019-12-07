import ApolloClient, { InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: '/graphql',
  cache,
  resolvers: {
    Mutation: {
      updateAuthStatus: (root, args, ctx, info) => {
        console.log(
          `Root: ${root}
           Args: ${args}
           Context: ${ctx}
           Info: ${info}
          `
        )
        return null
      }
    }
  }
})

// Setting initial *state*
cache.writeData({
  data: {
    user: null
  }
})

export default client
