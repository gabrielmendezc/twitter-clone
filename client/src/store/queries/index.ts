import gql from 'graphql-tag'

export const UPDATE_AUTH_STATUS = gql`
  mutation updateAuthStatus {
    updateAuthStatus @client
  }
`
