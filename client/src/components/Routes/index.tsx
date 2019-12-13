import React, { FC, Fragment } from 'react'
import Navbar from '../Navbar'
import { Main } from '../Main/styles'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Auth/Login'
import Register from '../Auth/Register'

const Routes: FC = () => (
  <Fragment>
    <Navbar />
    <Main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Main>
  </Fragment>
)

export default Routes
