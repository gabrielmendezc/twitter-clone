import React, { FC, useState, FormEvent } from 'react'
import Input from '../Input'
import * as SC from './styles'
import { Link } from 'react-router-dom'
import { useMutation, useApolloClient } from 'react-apollo'
import { LOGIN } from '../../queries'
import useError from '../../hooks/useError'
import Loader from '../Loader'

const HomeUnauth: FC = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN)

  const { Component: ErrorComponent } = useError(error)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const client = useApolloClient()

  const { username, password } = formData

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login({ variables: { data: formData } })
    } catch {}
  }

  if (loading) {
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

  return (
    <SC.UnauthWrapper>
      <SC.Form onSubmit={handleSubmit}>
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
        <div className="or">
          <div></div>
          <small>OR</small>
          <div></div>
        </div>
      </SC.Form>
      <SC.CustomLink to="/auth/signup">Sign up</SC.CustomLink>
      <Link to="/auth/forgot-password">Forgot your password?</Link>
    </SC.UnauthWrapper>
  )
}

export default HomeUnauth
