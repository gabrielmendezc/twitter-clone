import React, { FC } from 'react'
import * as SC from './styles'

export interface ILoaderProps {
  width?: string
}

const Loader: FC<ILoaderProps> = ({ width }) => (
  <SC.SpinnerWrapper>Loading...</SC.SpinnerWrapper>
)

export default Loader
