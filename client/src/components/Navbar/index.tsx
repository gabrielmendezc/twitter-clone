import React, { FC } from 'react'
import NavbarUnauth from './Unauth'
import NavbarAuth from './Auth'

const Navbar: FC = () => {
  let isAuthed = true

  return isAuthed ? <NavbarAuth /> : <NavbarUnauth />
}

export default Navbar
