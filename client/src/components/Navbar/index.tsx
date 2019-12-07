import React, { FC } from 'react'
import NavbarUnauth from './Unauth'
import NavbarAuth from './Auth'

const Navbar: FC = () => {
  // Check if the user is logged in or not to display appropiate navbar
  return <NavbarUnauth />
}

export default Navbar
