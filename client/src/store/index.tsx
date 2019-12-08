import ApolloClient, { InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: '/graphql',
  cache,
  credentials:
    process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  resolvers: {}
})

// Setting initial *state*
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  }
})

export default client
