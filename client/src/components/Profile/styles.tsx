import styled from 'styled-components'

export const Image = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  margin: 2rem 0;
`

export const ProfileWrapper = styled.section`
  & > h1:first-of-type {
    font-size: 2rem;
  }
  padding: 0 2em 2em 2em;
`

export const Profile = styled.article`
  .btn {
    padding: 0.7em;
    font-size: 1.55rem;
    background-color: transparent;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    transition: all 150ms ease-in-out;
    &.btn-danger {
      color: red;
      border: 1px solid #ff3434;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    &.btn-action {
      border: 1px solid rgba(0, 0, 0, 0.3);

      &:hover {
        background-color: rgba(0, 0, 0, 0.15);
      }
    }
  }

  display: flex;
  flex-direction: column;

  & > h1 {
    margin-bottom: 2rem;
    font-size: 2.35rem;
  }
`
