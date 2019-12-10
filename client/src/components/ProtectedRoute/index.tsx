import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useApolloClient } from 'react-apollo'

const PrivateRoute = ({ component, ...rest }: any) => {
  const client = useApolloClient()
  if (!localStorage.token) {
    client.writeData({ data: { isLoggedIn: false, me: null } })
  }

  const routeComponent = (props: any) =>
    localStorage.token ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/' }} />
    )
  return <Route {...rest} render={routeComponent} />
}

export default PrivateRoute
