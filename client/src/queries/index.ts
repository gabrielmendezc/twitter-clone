import gql from 'graphql-tag'

export const GET_ME = gql`
  query {
    me {
      id
      email
      username
    }
  }
`

export const LOGIN = gql`
  mutation login($data: LoginInput) {
    login(data: $data) {
      token
    }
  }
`
