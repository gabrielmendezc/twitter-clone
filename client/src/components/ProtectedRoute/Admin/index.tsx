import React from 'react'
import { MiddleScreen } from '../../Loader/styles'
import Loader from '../../Loader'
import { Route } from 'react-router-dom'
import { useQuery } from 'react-apollo'
import { ME } from '../../../graphql/queries'
import { useNavbar } from '../../../hooks/useNavbar'
import { NotFound } from '../../404'

export const AdminRoute = ({
  component: Component,
  restrictedToAdmin,
  ...rest
}: any) => {
  const { data, loading, error } = useQuery(ME)
  const { setTitle } = useNavbar()
  let isAuthorized = false
  let whatToRender = (
    <Route render={props => <Component {...props} />} {...rest} />
  )

  setTitle('')

  if (loading) {
    return (
      <MiddleScreen>
        <Loader />
      </MiddleScreen>
    )
  }

  if (error) {
    whatToRender = (
      <Route
        render={() => <h1>This page couldn't be found, the sadness...</h1>}
        {...rest}
      />
    )
  }

  const {
    me: { role }
  } = data

  if (role === 'admin') isAuthorized = true

  if (!isAuthorized) {
    setTitle('Not found')
    whatToRender = <Route component={NotFound} />
  }

  return whatToRender
}
