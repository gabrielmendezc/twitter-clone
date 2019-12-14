import styled from 'styled-components'
import { ILoaderProps } from '.'

export const SpinnerWrapper = styled.div<ILoaderProps>`
  border-radius: 50%;
  width: ${props => (props.width ? props.width : '26px')};
  height: ${props => (props.width ? props.width : '26px')};

  position: relative;
  text-indent: -9999em;
  border-top: 3.25px solid var(--complementary-4);
  border-right: 3.25px solid var(--complementary-4);
  border-bottom: 3.25px solid var(--complementary-4);
  border-left: 3.25px solid var(--complementary-3);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 0.7s infinite linear;
  animation: load8 0.7s infinite linear;
  &::after {
    border-radius: 50%;
    width: ${props => (props.width ? props.width : '26px')};
    height: ${props => (props.width ? props.width : '26px')};
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
