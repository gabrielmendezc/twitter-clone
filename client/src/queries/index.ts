import gql from 'graphql-tag'

export const GET_ME = gql`
  query getCurrentUser {
    me {
      id
      email
      username
      role
      joinedAt
      profilePicture
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
        profilePicture
        role
        joinedAt
      }
    }
  }
`

export const REGISTER = gql`
  mutation register($data: RegisterInput) {
    register(data: $data) {
      token
      user {
        id
        username
        email
        profilePicture
        role
        joinedAt
      }
    }
  }
`

export const CHANGE_PROFILE_PICTURE = gql`
  mutation changeProfilePicture($file: Upload!) {
    changeProfilePicture(file: $file)
  }
`
