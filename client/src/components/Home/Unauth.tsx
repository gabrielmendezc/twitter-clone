import React, { FC, useState, FormEvent } from 'react'
import Input from '../Input'
import * as SC from './styles'
import { Link } from 'react-router-dom'
import { useMutation, useApolloClient } from 'react-apollo'
import { LOGIN, REGISTER } from '../../queries'
import useError from '../../hooks/useError'
import Loader from '../Loader'

const HomeUnauth: FC = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN)
  const [
    register,
    { data: dataRegister, loading: loadingRegister, error: errorRegister }
  ] = useMutation(REGISTER)

  const { Component: ErrorRegisterComponent } = useError(errorRegister)
  const { Component: ErrorComponent } = useError(error)
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const client = useApolloClient()

  const { username, password } = loginData
  const {
    username: usernameRegister,
    email,
    password: passwordRegister,
    passwordConfirm
  } = registerData

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleRegisterChange = (e: any) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login({ variables: { data: loginData } })
    } catch {}
  }

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()
    if (passwordConfirm !== passwordRegister) {
      console.log('Passwords arent the same')
      return
    }
    const data = {
      username: usernameRegister,
      email,
      password: passwordRegister
    }
    try {
      await register({ variables: { data } })
    } catch {}
  }

  if (loading || loadingRegister) {
    return (
      <SC.SideEffectWrapper>
        <Loader width="60px" />
      </SC.SideEffectWrapper>
    )
  }

  if (data) {
    const {
      login: { token }
    } = data
    localStorage.setItem('token', token)
    client.writeData({ data: { isLoggedIn: true } })
  }

  if (dataRegister) {
    const {
      register: { token }
    } = dataRegister
    localStorage.setItem('token', token)
    client.writeData({ data: { isLoggedIn: true } })
  }

  return (
    <SC.UnauthWrapper>
      <SC.Form onSubmit={handleLogin}>
        <Input
          onChange={handleChange}
          value={username}
          name="username"
          isOnWhiteBackground
          type="text"
          placeholder="Username"
        />
        <Input
          onChange={handleChange}
          value={password}
          name="password"
          isOnWhiteBackground
          type="password"
          placeholder="Password"
        />
        <p style={{ textAlign: 'left' }}>{error && ErrorComponent}</p>
        <button type="submit">Log in</button>
        <Link to="/auth/forgot-password">Forgot your password?</Link>
        <div className="or">
          <div></div>
          <small>OR</small>
          <div></div>
        </div>
      </SC.Form>
      <h2>Create an account</h2>
      <SC.Form onSubmit={handleRegister}>
        <Input
          name="username"
          value={usernameRegister}
          onChange={handleRegisterChange}
          isOnWhiteBackground
          type="text"
          placeholder="Username"
        />
        <Input
          name="email"
          onChange={handleRegisterChange}
          value={email}
          isOnWhiteBackground
          type="email"
          placeholder="Email"
        />
        <Input
          name="password"
          onChange={handleRegisterChange}
          value={passwordRegister}
          isOnWhiteBackground
          type="password"
          placeholder="Password"
        />
        <Input
          name="passwordConfirm"
          onChange={handleRegisterChange}
          value={passwordConfirm}
          isOnWhiteBackground
          type="password"
          placeholder="Confirm password"
        />
        <p style={{ textAlign: 'left' }}>
          {errorRegister && ErrorRegisterComponent}
        </p>
        <button
          style={{ backgroundColor: 'var(--complementary-3)', color: 'black' }}
          type="submit"
        >
          Sign up
        </button>
      </SC.Form>
    </SC.UnauthWrapper>
  )
}

export default HomeUnauth
