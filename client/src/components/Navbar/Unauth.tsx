import React, { FC } from 'react'
import * as SC from './styles'
import Input from '../Input'
import { Logo } from '../Logo'

const NavbarUnauth: FC = () => {
  return (
    <SC.NavbarUnauth>
      <Logo />
      <form id="login">
        <div className="form-group">
          <Input
            placeholder="Username"
            type="text"
            id="usernameHeader"
            required
          />
        </div>
        <div className="form-group">
          <Input
            placeholder="Password"
            type="password"
            id="passwordHeader"
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </SC.NavbarUnauth>
  )
}

export default NavbarUnauth
