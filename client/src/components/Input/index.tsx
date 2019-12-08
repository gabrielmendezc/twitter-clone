import React, { FC } from 'react'
import * as SC from './styles'

interface IInputProps {
  type?: string
  placeholder?: string
  id?: string
  name?: string
  required?: boolean
}

const Input: FC<IInputProps> = ({ ...props }) => <SC.Input {...props} />

export default Input
