import styled from 'styled-components'

export const PostProfilePictureBlock = styled.div`
  margin-right: 1.5rem;
`

export const PostInformation = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;

  span {
    font-size: 3rem;
  }

  span,
  time {
    margin-left: 0.55rem;
    color: #6a6c6e;
  }
`

export const PostWrapper = styled.article`
  display: flex;
  padding: 1em 2em 2em 1.25em;
  border-bottom: 1px solid rgb(230, 236, 240);

  p {
    font-size: 1.4rem;
  }
`
