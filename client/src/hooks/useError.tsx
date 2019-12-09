import React from 'react'
import GraphQLError from '../components/Error/GraphQLError'
import ServerError from '../components/Error/ServerError'
import { Redirect } from 'react-router'
import { useApolloClient } from 'react-apollo'
import { ApolloError } from 'apollo-client'

interface IHookValues {
  errorInfo: ApolloError | undefined
  Component: JSX.Element
}

const useError = (error: ApolloError | undefined): IHookValues => {
  const client = useApolloClient()
  const hookValues: IHookValues = {
    errorInfo: error,
    Component: <ServerError />
  }

  if (error && error.graphQLErrors.length > 0) {
    const notAuthenticated = error.graphQLErrors.find(
      error => error.extensions && error.extensions.code === 'UNAUTHENTICATED'
    )

    if (notAuthenticated) {
      localStorage.getItem('token') && localStorage.removeItem('token')
      client.writeData({ data: { isLoggedIn: false } })
      hookValues.Component = <Redirect to="/" />
    } else {
      hookValues.Component = <GraphQLError errorMessage={error.message} />
    }
  }

  return hookValues
}

export default useError
