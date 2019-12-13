import React, { FC, Fragment } from 'react'
import Navbar from '../Navbar'
import { Main } from '../Main/styles'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { ProtectedRoute } from '../ProtectedRoute'
import { PublicRoute } from '../PublicRoute'

const Routes: FC = () => (
  <Fragment>
    <Navbar />
    <Main>
      <Switch>
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
        <ProtectedRoute
          restrictedToAdmin={false}
          path="/"
          exact
          component={Home}
        />
        <ProtectedRoute
          restrictedToAdmin
          path="/admin_dashboard"
          exact
          component={<h1>Admin Dashboard</h1>}
        />
        <Route render={() => <h1>404...</h1>} />
        {/* Create 404 component here and in ProtectedRoute */}
      </Switch>
    </Main>
  </Fragment>
)

export default Routes
