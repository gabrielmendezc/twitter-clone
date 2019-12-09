import React, { FC } from 'react'
import * as SC from './styles'
import Login from '../Auth/Login'
import Register from '../Auth/Register'

const HomeUnauth: FC = () => (
  <SC.UnauthWrapper>
    <Login />
    <Register />
  </SC.UnauthWrapper>
)

export default HomeUnauth
