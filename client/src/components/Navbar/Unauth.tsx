import React, { FC } from 'react'
import * as SC from './styles'

const NavbarUnauth: FC = () => {
  return (
    <SC.NavbarUnauth>
      <h1>Website Logo</h1>
      <form id="login">
        <div className="form-group">
          <input placeholder="Username" type="text" id="username" required />
        </div>
        <div className="form-group">
          <input
            placeholder="Password"
            type="password"
            id="password"
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </SC.NavbarUnauth>
  )
}

export default NavbarUnauth
