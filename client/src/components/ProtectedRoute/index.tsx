import React from 'react'
import { getAccessToken } from '../../utils/accessToken'
import { Redirect, Route } from 'react-router-dom'

export const ProtectedRoute = ({
  component: Component,
  restrictedToAdmin,
  ...rest
}: any) => {
  let whatToRender = (
    <Route render={props => <Component {...props} />} {...rest} />
  )

  if (!getAccessToken()) {
    whatToRender = <Route render={() => <Redirect to="/login" />} {...rest} />
  }

  return whatToRender
}
