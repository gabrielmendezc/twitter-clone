import React, { FC, useState, FormEvent, Fragment } from 'react'
import * as SC from '../Home/styles'
import Input from '../Input'
import { useMutation, useApolloClient } from 'react-apollo'
import { REGISTER } from '../../queries'
import useError from '../../hooks/useError'
import Loader from '../Loader'

const Register: FC = () => {
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const [register, { data, loading, error }] = useMutation(REGISTER)
  let { Component: ErrorComponent } = useError(error)
  const client = useApolloClient()

  const handleChange = (e: any) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      setPasswordsMatch(false)
      return
    }
    setPasswordsMatch(true)

    const data = {
      username,
      email,
      password
    }

    try {
      await register({ variables: { data } })
    } catch {}
  }

  const { username, email, password, passwordConfirm } = registerData

  if (data) {
    const {
      register: {
        token,
        user: { username, email, profilePicture, id, role, joinedAt }
      }
    } = data
    localStorage.setItem('token', token)
    client.writeData({
      data: {
        isLoggedIn: true,
        me: {
          username,
          email,
          profilePicture,
          id,
          role,
          joinedAt,
          __typename: 'User'
        }
      }
    })
  }

  return (
    <Fragment>
      <h2>Create an account</h2>
      <SC.Form onSubmit={handleRegister}>
        <Input
          name="username"
          value={username}
          onChange={handleChange}
          isOnWhiteBackground
          type="text"
          placeholder="Username"
        />
        <Input
          name="email"
          onChange={handleChange}
          value={email}
          isOnWhiteBackground
          type="email"
          placeholder="Email"
        />
        <Input
          name="password"
          onChange={handleChange}
          value={password}
          isOnWhiteBackground
          type="password"
          placeholder="Password"
        />
        <Input
          name="passwordConfirm"
          onChange={handleChange}
          value={passwordConfirm}
          isOnWhiteBackground
          type="password"
          placeholder="Confirm password"
        />
        {!passwordsMatch && (
          <p style={{ textAlign: 'left', color: 'red', fontSize: '1.5rem' }}>
            <strong>Passwords don't match.</strong>
          </p>
        )}
        <p style={{ textAlign: 'left' }}>{error && ErrorComponent}</p>
        {loading ? (
          <Loader />
        ) : (
          <button
            style={{
              backgroundColor: 'var(--complementary-3)',
              color: 'black'
            }}
            type="submit"
          >
            Sign up
          </button>
        )}
      </SC.Form>
    </Fragment>
  )
}

export default Register
