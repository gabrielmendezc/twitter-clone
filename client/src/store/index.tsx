import ApolloClient, { InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: '/graphql',
  cache,
  resolvers: {
    Mutation: {
      updateAuthStatus: (root, { user }, ctx, info) => {
        // What you return here is whats updated in the store
        return user
      }
    }
  }
})

// Setting initial *state*
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    user: null
  }
})

export default client
