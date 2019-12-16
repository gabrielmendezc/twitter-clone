import styled from 'styled-components'

export const AuthWrapper = styled.section`
  flex-grow: 1;
  padding: 0 3em;
  margin-top: 90px;

  & > h1 {
    font-size: 2.25rem;
    text-align: center;
  }
`

interface ILoginFormProps {
  buttonActive: boolean
}

export const LoginForm = styled.form<ILoginFormProps>`
  margin-top: 32px;

  button[type='submit'] {
    width: 100%;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    padding: 1em;
    font-size: 1.5rem;
    border: none;
    border-radius: 30px;
    margin-bottom: 16px;
    background-color: var(--complementary-4);
    opacity: ${props => (props.buttonActive ? 1 : 0.5)};
    pointer-events: ${props => (props.buttonActive ? 'all' : 'none')};
  }

  .errors-wrapper {
    margin-bottom: 2em;
  }

  .sub-links {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 2.35rem;
      margin-right: 10px;
    }

    a {
      margin-right: 10px;
      color: var(--complementary-4);
    }
  }
`
