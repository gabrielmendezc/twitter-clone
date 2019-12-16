import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import * as SC from './styles'

export const ProfileNavigation = () => {
  const { path } = useRouteMatch()

  return (
    <SC.ProfileNavigation>
      <ul>
        <li>
          <NavLink exact to={`${path}`}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink exact to={`${path}/followers`}>
            Followers
          </NavLink>
        </li>
        <li>
          <NavLink exact to={`${path}/following`}>
            Following
          </NavLink>
        </li>
      </ul>
    </SC.ProfileNavigation>
  )
}
