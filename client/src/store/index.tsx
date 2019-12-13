import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { requestLink } from './links/request'
import { uploadLink } from './links/upload'
import { tokenRefreshLink } from './links/tokenRefresh'
import { onError } from 'apollo-link-error'

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: ApolloLink.from([
    tokenRefreshLink,
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors)
      console.log(networkError)
    }),
    requestLink,
    uploadLink
  ]),
  cache
})

export default client
