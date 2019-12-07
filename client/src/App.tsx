import React from 'react'
import { useQuery } from 'react-apollo'
import { GET_ME } from './queries'

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ME)

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  console.log(data)

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
