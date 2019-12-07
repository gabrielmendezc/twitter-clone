import React, { FC, Fragment } from 'react'
import { useQuery } from 'react-apollo'
import { GET_ME } from './queries'
import useError from './hooks/useError'
import Loader from './components/Loader'
import { GlobalStyles } from './globalStyles'

const App: FC = () => {
  const { loading, error, data } = useQuery(GET_ME, {
    notifyOnNetworkStatusChange: true
  })

  const { errorInfo: _, Component: ErrorComponent } = useError(error)

  if (loading) return <Loader />
  if (error) return ErrorComponent

  return (
    <Fragment>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Fragment>
  )
}

export default App
