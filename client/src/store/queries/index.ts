import gql from 'graphql-tag'

export const IS_USER_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`
