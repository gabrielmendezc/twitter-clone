import React, { FC } from 'react'
import * as SC from './styles'

const Loader: FC = () => (
  <SC.SpinnerWrapper>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </SC.SpinnerWrapper>
)

export default Loader
