import styled from 'styled-components'

export const NavbarAuth = styled.nav``

export const NavbarUnauth = styled.header`
  background-color: var(--complementary-1);
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: none;
  }

  h1 {
    color: white;
    font-size: 2.4rem;
  }

  @media screen and (min-width: 768px) {
    min-height: 100px;
    justify-content: space-evenly;

    h1 {
      font-size: 3rem;
    }

    form {
      display: flex;
      align-items: center;

      button[type='submit'] {
        padding: 0.85em;
        border-radius: 3px;
        font-size: 1.5rem;
        border: none;
        color: white;
        background: transparent;
        cursor: pointer;
        box-shadow: white 0px 0px 3px 1px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        margin-right: 4em;

        input {
          padding: 0.85em;
          border-radius: 3px;
          background-color: white;
          border: none;
          outline-color: #e3a02f;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 830px) {
    form {
      .form-group {
        margin-right: 1em;
      }
    }
  }
`
