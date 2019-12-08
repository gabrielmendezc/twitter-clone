import React, { FC } from 'react'
import * as SC from './styles'

export interface IInputProps {
  type?: string
  placeholder?: string
  id?: string
  name?: string
  required?: boolean
  value?: string
  onChange?: (e: any) => void
  isOnWhiteBackground?: boolean
}

const Input: FC<IInputProps> = ({ onChange, ...props }) => (
  <SC.Input {...props} onChange={onChange} />
)

export default Input
