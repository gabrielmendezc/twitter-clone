import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

export const ProfileNavigation = () => {
  const { path } = useRouteMatch()

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`${path}/posts`}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/followers`}>Followers</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/following`}>Following</NavLink>
        </li>
      </ul>
    </nav>
  )
}
