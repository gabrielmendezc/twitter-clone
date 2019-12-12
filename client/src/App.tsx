import React, { FC, Fragment } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Main>
        <h1>Social Media</h1>
      </Main>
    </Fragment>
  )
}

export default App
