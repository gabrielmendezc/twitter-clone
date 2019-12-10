import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, Observable } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'

const cache = new InMemoryCache()

const request = (operation: any) => {
  const token = localStorage.getItem('token')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  })
}

const uploadLink = createUploadLink({
  uri: '/graphql',
  credentials:
    process.env.NODE_ENV === 'development' ? 'include' : 'same-origin'
})

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([requestLink, uploadLink]),
  resolvers: {}
})

// Setting initial *state*
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  }
})

export default client
