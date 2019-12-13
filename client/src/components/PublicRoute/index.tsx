import React from 'react'
import { getAccessToken } from '../../utils/accessToken'
import { Route, useHistory } from 'react-router-dom'

export const PublicRoute = ({ component: Component, ...rest }: any) => {
  const { goBack } = useHistory()
  if (getAccessToken()) {
    goBack()
    return null
  }
  return <Route render={props => <Component {...props} />} {...rest} />
}
