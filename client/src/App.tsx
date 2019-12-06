import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'

const GET_ME = gql`
  {
    me {
      id
      email
      username
    }
  }
`

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
