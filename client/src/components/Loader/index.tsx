import React, { FC } from 'react'
import * as SC from './styles'

export interface ILoaderProps {
  width?: string
}

const Loader: FC<ILoaderProps> = ({ width }) => (
  <SC.SpinnerWrapper width={width}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </SC.SpinnerWrapper>
)

export default Loader
