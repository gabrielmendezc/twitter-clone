import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SideEffectWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AuthWrapper = styled.section`
  & > h1 {
    font-size: 2rem;
  }
`

export const UnauthWrapper = styled.section`
  margin-top: 90px;
  a:last-of-type {
    color: var(--dominant-clr);
    text-decoration: none;
    font-size: 1.45rem;
    margin-top: 2rem;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CustomLink = styled(Link)`
  background-color: var(--complementary-3);
  display: block;
  text-decoration: none;
  padding: 0.8em 0;
  font-size: 1.6rem;
  width: 55%;
  margin: 0 auto;
  border-radius: 3px;
  color: black;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  border-radius: 3px;

  div.or {
    display: flex;
    align-items: center;
    margin: 2em 0;

    small {
      margin: 0 1em;
      font-size: 1.5rem;
    }

    div {
      background-color: rgba(0, 0, 0, 0.2);
      height: 1px;
      flex-grow: 1;
    }
  }

  input {
    border-radius: 3px;
    font-size: 1.6rem;
    padding: 1em;
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;

    &:first-of-type {
      z-index: 2;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }

    &:last-of-type {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      border-top-right-radius: 0px;
      box-shadow: #000 0px 4px 5px -6px;
      border-top-left-radius: 0px;
      margin-bottom: 1em;

      &:focus {
        border-top: 1px solid var(--complementary-1);
      }
    }
  }

  button[type='submit'] {
    margin-top: 1em;
    padding: 0.8em 0;
    font-size: 1.6rem;
    background-color: var(--dominant-clr);
    color: white;
    border-radius: 3px;
    cursor: pointer;
    border: none;
  }
`
