import styled from 'styled-components'

export const SpinnerWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  .dot {
    width: 11px;
    height: 11px;
    background: #fff;
    border-radius: 50%;
    animation: dot 2.8s infinite;
  }

  .dots {
    transform: translateX(0);
    animation: dots 2.8s infinite;

    span {
      display: block;
      float: left;
      width: 11px;
      height: 11px;
      margin-left: 5px;
      background: #fff;
      border-radius: 50%;
    }
  }

  @-moz-keyframes dot {
    50% {
      transform: translateX(48px);
    }
  }
  @-webkit-keyframes dot {
    50% {
      transform: translateX(48px);
    }
  }
  @-o-keyframes dot {
    50% {
      transform: translateX(48px);
    }
  }
  @keyframes dot {
    50% {
      transform: translateX(48px);
    }
  }
  @-moz-keyframes dots {
    50% {
      transform: translateX(-21px);
    }
  }
  @-webkit-keyframes dots {
    50% {
      transform: translateX(-21px);
    }
  }
  @-o-keyframes dots {
    50% {
      transform: translateX(-21px);
    }
  }
  @keyframes dots {
    50% {
      transform: translateX(-21px);
    }
  }
`
