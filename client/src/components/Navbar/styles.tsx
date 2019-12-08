import styled from 'styled-components'

export const NavbarAuth = styled.nav`
  min-height: 70px;
  margin-bottom: 2.5em;

  svg {
    fill: var(--complementary-1);
    width: 40px;
  }

  ul.upper-nav {
    display: flex;
    align-items: center;
    padding: 1.5em 0;
    justify-content: space-evenly;
    background-color: var(--complementary-1);

    svg {
      fill: white;
    }

    li {
      display: inline;

      &:last-of-type {
        margin-top: 6px;
      }
    }

    .searchbar {
      border-bottom: 1px solid rgba(255, 255, 255, 0.35);
      display: flex;

      input {
        padding: 0 0.4em 0.3em 0.4em;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1.5rem;
        color: white;
        margin-left: 5px;

        &::placeholder {
          color: rgba(255, 255, 255, 0.75);
        }
      }

      svg {
        width: 20px;
        margin-bottom: 8px;
      }

      @media screen and (max-width: 350px) {
        input {
          width: 100px;
        }
      }
    }
  }

  ul.lower-nav {
    padding: 1em 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    li {
      display: inline;

      a {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          right: 0;
          background-color: var(--complementary-1);
          height: 3px;
          width: 0%;
          transition: all 250ms ease-in-out;
        }

        &.active::after {
          left: 0;
          width: 100%;
        }
      }
    }
  }
`

export const NavbarUnauth = styled.header`
  background-color: var(--complementary-1);
  min-height: 60px;
  margin-bottom: 2.5em;
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
