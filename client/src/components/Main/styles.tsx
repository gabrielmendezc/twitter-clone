import styled from 'styled-components'

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 55px 0;

  & > section {
    & > h1#interesting_things {
      padding: 0.75em 2em 0.75em 0.75em;
      font-size: 1.65rem;
      background-color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 900;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(230, 236, 240);
      justify-content: space-between;

      span {
        svg {
          fill: black;
          display: block;
          stroke: black;
          stroke-width: 2px;
          margin-top: 0.3rem;
          width: 15px;
          transition: transform 150ms ease-in-out 0s;
          transform: rotate(90deg);

          &.closed {
            transform: rotate(0deg);
          }
        }
      }
    }
  }
`
