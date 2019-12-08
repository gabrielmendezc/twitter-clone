import React, { FC, Fragment } from 'react'
import { useQuery } from 'react-apollo'
import { IS_USER_LOGGED_IN } from '../../store/queries'
import useError from '../../hooks/useError'
import Loader from '../Loader'
import HomeAuth from './Auth'
import HomeUnauth from './Unauth'

const Home: FC = () => {
  const { data, error, loading } = useQuery(IS_USER_LOGGED_IN)
  const { Component: ErrorComponent } = useError(error)

  if (loading) return <Loader />
  if (error) return ErrorComponent

  const { isLoggedIn } = data

  return <Fragment>{isLoggedIn ? <HomeAuth /> : <HomeUnauth />}</Fragment>
}

export default Home
