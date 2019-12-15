import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import { GlobalStyles } from './globalStyles'
import client from './store'
import { BrowserRouter } from 'react-router-dom'
import { NavbarProvider } from './context/Navbar/Provider'

ReactDOM.render(
  <ApolloProvider client={client}>
    <NavbarProvider>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavbarProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
