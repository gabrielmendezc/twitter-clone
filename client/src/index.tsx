import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import { GlobalStyles } from './globalStyles'
import client from './store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
