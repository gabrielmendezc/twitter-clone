import React, { FC, useState, FormEvent } from 'react'
import Input from '../Input'
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
