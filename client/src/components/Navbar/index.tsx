import React, { FC } from 'react'
import NavbarUnauth from './Unauth'
import NavbarAuth from './Auth'

const Navbar: FC = () => {
  let isAuthed = false

  return isAuthed ? <NavbarAuth /> : <NavbarUnauth />
}

export default Navbar
