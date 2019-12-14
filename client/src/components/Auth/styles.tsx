import styled from 'styled-components'

export const AuthWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  padding: 4.5em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    50deg,
    var(--complementary-1) 25%,
    var(--complementary-2)
  );

  & > h1 {
    margin-bottom: 0.75em;
    font-size: 2.5rem;
    color: white;
    font-weight: 100;
  }

  & > h1 + p {
    font-size: 2rem;
    color: var(--complementary-3);
    background: linear-gradient(
      -50deg,
      var(--complementary-4) 25%,
      var(--complementary-3)
    );
    font-weight: bold;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const LoginForm = styled.form`
  margin-top: 3em;
  width: 100%;

  & > a:first-of-type {
    display: block;
    color: var(--complementary-3);
    font-size: 1.5rem;
  }

  button[type='submit'] {
    width: 100%;
    padding: 1em;
    border-radius: 3px;
    border: none;
    margin-top: 1.5em;
    background-image: linear-gradient(
      -50deg,
      var(--complementary-4) 25%,
      var(--complementary-3)
    );
    font-size: 1.7rem;
    color: white;

    & + div {
      margin-top: 1.25em;
      span {
        font-size: 1.4rem;
        color: white;
      }

      a {
        color: var(--complementary-3);
        font-size: 1.5rem;
      }
    }
  }
`
