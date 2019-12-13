import React from 'react'
import { getAccessToken } from '../../utils/accessToken'
import { Redirect, Route } from 'react-router-dom'
import { useApolloClient } from 'react-apollo'
import { ME } from '../../graphql/queries'

export const ProtectedRoute = ({
  component: Component,
  restrictedToAdmin,
  ...rest
}: any) => {
  const { readQuery } = useApolloClient()
  let isAuthorized = restrictedToAdmin ? false : true
  let whatToRender = (
    <Route render={props => <Component {...props} />} {...rest} />
  )

  if (!isAuthorized) {
    try {
      const data = readQuery({
        query: ME
      })
      const {
        me: { role }
      } = data
      if (role === 'admin') isAuthorized = true
    } catch {}
  }

  if (restrictedToAdmin && (!isAuthorized || getAccessToken())) {
    whatToRender = (
      <Route
        render={() => <h1>This page couldn't be found, the sadness...</h1>}
        {...rest}
      />
    )
  } else if (!restrictedToAdmin && !getAccessToken()) {
    whatToRender = <Route render={() => <Redirect to="/login" />} {...rest} />
  }

  return whatToRender
}
