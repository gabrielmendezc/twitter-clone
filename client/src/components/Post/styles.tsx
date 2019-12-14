import styled from 'styled-components'

export const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  & > p {
    margin-left: calc(40px + 1rem);
    font-size: 1.4rem;
  }

  & > div {
    display: flex;
    align-items: center;
    font-size: 1.35rem;

    h1 {
      margin-right: 0.5em;
    }

    span {
      margin-right: 0.5em;
    }

    & > div {
      margin-right: 1rem;
    }
  }
`
