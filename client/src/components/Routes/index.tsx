import React, { FC, Fragment } from 'react'
import Navbar from '../Navbar'
import { Main } from '../Main/styles'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { ProtectedRoute } from '../ProtectedRoute'
import { AdminRoute } from '../ProtectedRoute/Admin'
import { PublicRoute } from '../PublicRoute'
import { AdminDashboard } from '../AdminDashboard'
import { NotFound } from '../404'
import Profile from '../Profile'
import AccountSettings from '../Account/Settings'

const Routes: FC = () => (
  <Fragment>
    <Navbar />
    <Main>
      <Switch>
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/settings" exact component={AccountSettings} />
        <AdminRoute path="/admin_dashboard" exact component={AdminDashboard} />
        <Route component={NotFound} />
      </Switch>
    </Main>
  </Fragment>
)

export default Routes
