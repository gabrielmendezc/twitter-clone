import styled from 'styled-components'

export const AuthWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  padding: 4.5em;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h1 {
    font-size: 2rem;
    color: var(--complementary-1);
    font-weight: bold;
  }
`

export const LoginForm = styled.form`
  margin-top: 3em;
  width: 100%;

  & > a:first-of-type {
    display: block;
    color: var(--complementary-4);
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
    background-color: var(--complementary-1);
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
        font-size: 1.5rem;
        color: black;
      }

      a {
        color: var(--complementary-4);
        font-size: 1.5rem;
      }
    }
  }
`
