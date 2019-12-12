import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import { GlobalStyles } from './globalStyles'
import client from './store'

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
)
