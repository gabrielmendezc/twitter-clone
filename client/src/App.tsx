import React, { FC, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'

const App: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Redirect to="/" /> {/* Might change this to a custom 404 component */}
      </Switch>
    </Fragment>
  )
}

export default App
