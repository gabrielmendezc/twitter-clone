import React, { FC, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import AccountSettings from './components/Account/Settings'
import Main from './components/Main'

const App: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/account/settings" exact component={AccountSettings} />
          <Redirect to="/" />
          {/* Might change this to a custom 404 component */}
        </Switch>
      </Main>
    </Fragment>
  )
}

export default App
