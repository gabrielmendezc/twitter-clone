import React from 'react'
import { ApolloError } from 'apollo-boost'
import GraphQLError from '../components/Error/GraphQLError'
import ServerError from '../components/Error/ServerError'

// Return information related to the error and the appropiate error component to display where used.

interface IHookValues {
  errorInfo: ApolloError | undefined
  Component: JSX.Element
}

const useError = (error: ApolloError | undefined): IHookValues => {
  const hookValues: IHookValues = {
    errorInfo: error,
    Component: <small>Loading...</small>
  }
  if (error && error.graphQLErrors.length > 0) {
    hookValues.Component = <GraphQLError errorMessage={error.message} />
  }

  if (error && error.graphQLErrors.length === 0) {
    hookValues.Component = <ServerError />
  }

  return hookValues
}

export default useError
