import styled from 'styled-components'

export const JustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  background-color: rgb(204, 214, 221);
`

export const ProfileWrapper = styled.section`
  & > .profile-edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 2rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 900;
    }

    button {
      padding: 0.8em 1.5em;
      font-weight: bold;
      border-radius: 30px;
      border: 1px solid var(--complementary-4);
      background-color: transparent;
      color: var(--complementary-4);
    }
    margin-bottom: 3em;
  }
  flex-direction: column;
  padding: 2rem;
`

export const Profile = styled.article`
  display: flex;

  .profile-details {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 1.8rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 900;
      margin-bottom: 12px;
    }

    time {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      color: rgb(101, 119, 134);
      svg {
        margin-right: 6px;
        width: 20px;
        fill: currentColor;
      }
    }
  }

  & > h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
    font-size: 1.9rem;
  }
`

export const ProfileTabsWrapper = styled.article`
  margin-top: 40px;
`
