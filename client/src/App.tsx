import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
