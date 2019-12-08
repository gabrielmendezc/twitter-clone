import React, { FC, Fragment } from 'react'
import NavbarUnauth from './Unauth'
import NavbarAuth from './Auth'
import { useQuery } from 'react-apollo'
import { IS_USER_LOGGED_IN } from '../../store/queries'
import useError from '../../hooks/useError'
import Loader from '../Loader'

const Navbar: FC = () => {
  const { data, error, loading } = useQuery(IS_USER_LOGGED_IN)
  const { Component: ErrorComponent } = useError(error)

  if (loading) return <Loader />
  if (error) return ErrorComponent

  const { isLoggedIn } = data

  return <Fragment>{isLoggedIn ? <NavbarAuth /> : <NavbarUnauth />}</Fragment>
}

export default Navbar
