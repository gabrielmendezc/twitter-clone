import React, { FC } from 'react'
import * as SC from './styles'

export interface ILoaderProps {
  width?: string
}

const Loader: FC<ILoaderProps> = ({ width }) => (
  <SC.SpinnerWrapper>
    <span className="dot"></span>
    <div className="dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </SC.SpinnerWrapper>
)

export default Loader
