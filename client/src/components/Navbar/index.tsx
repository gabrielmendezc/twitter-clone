import React, { FC } from 'react'
import NavbarUnauth from './Unauth'
import NavbarAuth from './Auth'
import { getAccessToken } from '../../utils/accessToken'

const Navbar: FC = () => {
  return getAccessToken() ? <NavbarAuth /> : <NavbarUnauth />
}

export default Navbar
