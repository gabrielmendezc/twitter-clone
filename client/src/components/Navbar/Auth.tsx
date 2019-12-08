import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import * as SC from './styles'

const NavbarAuth: FC = () => {
  return (
    <SC.NavbarAuth>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </SC.NavbarAuth>
  )
}

export default NavbarAuth
