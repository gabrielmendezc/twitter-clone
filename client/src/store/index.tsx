import ApolloClient, { InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: '/graphql',
  cache,
  resolvers: {}
})

// Setting initial *state*
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  }
})

export default client
