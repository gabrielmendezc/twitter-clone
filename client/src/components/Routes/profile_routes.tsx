import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

export const ProfileRoutes = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}`} exact render={() => <h1>Posts</h1>} />
      <Route
        path={`${path}/followers`}
        exact
        render={() => <h1>Followers</h1>}
      />
      <Route
        path={`${path}/following`}
        exact
        render={() => <h1>Following</h1>}
      />
    </Switch>
  )
}
