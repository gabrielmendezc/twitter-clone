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
    color: rgb(230, 230, 230);
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

  strong {
    display: block;
    margin-bottom: 0.1em;
  }

  button[type='submit'] {
    width: 100%;
    cursor: pointer;
    border-radius: 3px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: 1.5em;
    background-image: linear-gradient(
      -50deg,
      var(--complementary-4) 25%,
      var(--complementary-3)
    );
    position: relative;
    font-size: 1.7rem;
    color: white;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: translateY(-4px);
    }

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
