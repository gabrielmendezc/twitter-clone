import styled from 'styled-components'

export const NotFound = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5em 2em;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.75em;
  }

  p {
    font-size: 1.45rem;
    line-height: 1.4;
    color: rgb(20, 23, 26);

    a {
      font-size: 1.45rem;
      color: var(--complementary-4);
    }
  }
`
