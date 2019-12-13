import gql from 'graphql-tag'

export const ME = gql`
  query getMe {
    me {
      username
      email
      profilePicture
      joinedAt
      role
      confirmed
    }
  }
`
