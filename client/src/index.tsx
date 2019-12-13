import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import { GlobalStyles } from './globalStyles'
import client from './store'
import { BrowserRouter } from 'react-router-dom'
import { AccessTokenProvider } from './context/access_token/Provider'

ReactDOM.render(
  <ApolloProvider client={client}>
    <AccessTokenProvider>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AccessTokenProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
