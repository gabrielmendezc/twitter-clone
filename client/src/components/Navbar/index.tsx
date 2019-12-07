import React, { FC } from 'react'
import NavbarUnauth from './Unauth'
import NavbarAuth from './Auth'

const Navbar: FC = () => {
  const appropiateNavbar = localStorage.getItem('token') ? (
    <NavbarAuth />
  ) : (
    <NavbarUnauth />
  )

  return appropiateNavbar
}

export default Navbar
