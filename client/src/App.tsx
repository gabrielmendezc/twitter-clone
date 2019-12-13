import React, { FC, useState, useEffect, Fragment } from 'react'
import Routes from './components/Routes'
import { setAccessToken } from './accessToken'
import Loader from './components/Loader'
import { useHistory } from 'react-router-dom'
import NavbarUnauth from './components/Navbar/Unauth'
import { JustifyCenter } from './components/Profile/styles'
interface Props {}

const App: FC<Props> = () => {
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
        <NavbarUnauth />
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <JustifyCenter>
            <Loader />
          </JustifyCenter>
        </div>
      </Fragment>
    )
  }

  return <Routes />
}

export default App
