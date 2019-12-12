import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useApolloClient, useQuery } from 'react-apollo'
import { GET_ME } from '../../queries'
import Loader from '../Loader'
import { JustifyCenter } from '../Profile/styles'

const PrivateRoute = ({ ...rest }: any) => {
  const { data, loading, error } = useQuery(GET_ME, {
    fetchPolicy: 'no-cache'
  })
  const client = useApolloClient()
  useEffect(() => {
    console.log('mounted')
    return () => {
      console.log('unmounted')
    }
  }, [])
  if (loading)
    return (
      <JustifyCenter>
        <Loader />
      </JustifyCenter>
    )
  if (error) {
    client.writeData({ data: { isLoggedIn: false, me: null } })
    return <Redirect to={{ pathname: '/' }} />
  }

  return <Route {...rest} />
}

export default PrivateRoute
