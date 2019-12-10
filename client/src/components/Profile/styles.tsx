import styled from 'styled-components'

export const JustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`

export const ProfilePictureWrapper = styled.div`
  input {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`

export const ProfileWrapper = styled.section`
  & > h1:first-of-type {
    font-size: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
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
