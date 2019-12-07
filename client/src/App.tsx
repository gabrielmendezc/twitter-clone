import React from 'react'
import { useQuery } from 'react-apollo'
import { GET_ME } from './queries'
import GraphQLError from './components/Error/GraphQLError'
import ServerError from './components/Error/ServerError'
import useError from './hooks/useError'

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ME)

  const { errorInfo, Component } = useError(error)

  if (loading) return <h1>Loading...</h1>
  if (error) return Component

  return (
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
  )
}

export default App
