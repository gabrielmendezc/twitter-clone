import styled from 'styled-components'

export const ProfileNavigation = styled.nav`
  margin: 0 -2rem 16px;
  border-bottom: 1px solid rgb(230, 236, 240);
  min-height: 45px;
  display: flex;

  ul {
    display: flex;
    flex-grow: 1;
    list-style-type: none;

    li {
      flex-grow: 1;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      height: 100%;
      font-weight: bold;
      color: rgb(101, 119, 134);
      position: relative;
      transition: background-color 200ms ease-in-out;

      &::after {
        content: '';
        width: 0%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: width 200ms ease-in-out 0s;
        height: 3px;
        background-color: var(--complementary-4);
      }

      &.active {
        color: var(--complementary-4);

        &::after {
          content: '';
          width: 100%;
          position: absolute;
          bottom: 0;
          height: 3px;
          background-color: var(--complementary-4);
        }
      }
    }
  }
`
