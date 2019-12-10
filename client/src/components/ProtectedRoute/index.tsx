import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useApolloClient } from 'react-apollo'

const ProtectedRoute = ({ component, ...rest }: any) => {
  const client = useApolloClient()
  const isLoggedIn = localStorage.getItem('token')
  if (!isLoggedIn) {
    client.writeData({ data: { isLoggedIn: false } })
  }
  const routeComponent = (props: any) =>
    isLoggedIn ? React.createElement(component, props) : <Redirect to="/" />
  return <Route {...rest} render={routeComponent} />
}

export default ProtectedRoute
