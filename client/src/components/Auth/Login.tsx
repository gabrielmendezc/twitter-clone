import React, { FC, useState, FormEvent } from 'react'
import * as SC from '../Home/styles'
import { Link, useHistory } from 'react-router-dom'
import Input from '../Input'
import { useMutation } from 'react-apollo'
import { LOGIN } from '../../graphql/mutations'
import { setAccessToken } from '../../accessToken'
import { ME } from '../../graphql/queries'

const Login: FC = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [login] = useMutation(LOGIN)
  const history = useHistory()

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const { username, password } = loginData

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await login({
      variables: {
        username,
        password
      },
      update: (store, { data }) => {
        if (!data) {
          return null
        }

        store.writeQuery({
          query: ME,
          data: {
            me: data.login.user
          }
        })
      }
    })
    if (response && response.data) {
      setAccessToken(response.data.login.accessToken)
    }

    history.push('/')
  }

  return (
    <SC.Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={username}
        name="username"
        isOnWhiteBackground
        type="text"
        placeholder="Username"
        required
      />
      <Input
        onChange={handleChange}
        value={password}
        name="password"
        isOnWhiteBackground
        type="password"
        placeholder="Password"
        required
      />
      <Link to="/auth/forgot-password">Forgot your password?</Link>
      <div className="or">
        <div></div>
        <small>OR</small>
        <div></div>
      </div>
      <button type="submit">Login</button>
    </SC.Form>
  )
}

export default Login
