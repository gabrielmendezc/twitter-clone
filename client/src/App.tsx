import React, { FC, useState, useEffect, Fragment } from 'react'
import Routes from './components/Routes'
import { useHistory } from 'react-router-dom'
import { setAccessToken } from './utils/accessToken'
import { Logo } from './components/Logo'
import { getRandomLoadingStatement } from './utils/randomLoadingStatement'
interface Props {}

const App: FC<Props> = () => {
  const loadingStatement = getRandomLoadingStatement()
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    ;(async () => {
      try {
        const data = await fetch('http://localhost:4000/refresh_token', {
          method: 'POST',
          credentials: 'include'
        })
        const { accessToken } = await data.json()
        setAccessToken(accessToken)
        if (!accessToken) {
          setLoading(false)
          history.push('/login')
        }
        setLoading(false)
      } catch {
        setLoading(false)
        history.push('/login')
      }
    })()
  }, [history])

  if (loading) {
    return (
      <Fragment>
        <div id="initial-loader">
          <Logo titleVisible={false} width="350" />
          <h1>{loadingStatement}</h1>
        </div>
      </Fragment>
    )
  }

  return <Routes />
}

export default App
