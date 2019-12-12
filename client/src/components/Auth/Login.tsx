import React, { FC, useState, FormEvent } from 'react'
import * as SC from '../Home/styles'
import { Link } from 'react-router-dom'
import Input from '../Input'

const Login: FC = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const { username, password } = loginData

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log(username, password)
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
    </SC.Form>
  )
}

export default Login
