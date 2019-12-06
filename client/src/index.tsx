import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: '/graphql',
  cache
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
