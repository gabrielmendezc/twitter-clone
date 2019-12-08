import gql from 'graphql-tag'

export const GET_ME = gql`
  query getCurrentUser {
    me {
      id
      email
      username
      role
      joinedAt
    }
  }
`

export const LOGIN = gql`
  mutation login($data: LoginInput) {
    login(data: $data) {
      token
      user {
        id
        username
        email
      }
    }
  }
`
