import React, { FC } from 'react'
import { useQuery, useApolloClient } from 'react-apollo'
import { GET_ME } from './queries'
import useError from './hooks/useError'
import Loader from './components/Loader'
import Navbar from './components/Navbar'

const App: FC = () => {
  const { loading, error, data } = useQuery(GET_ME, {
    notifyOnNetworkStatusChange: true
  })

  const { errorInfo: _, Component: ErrorComponent } = useError(error)

  if (loading) return <Loader />
  if (error) return ErrorComponent

  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App
