import React from 'react'
import { ApolloError } from 'apollo-boost'
import GraphQLError from '../components/Error/GraphQLError'
import ServerError from '../components/Error/ServerError'

interface IHookValues {
  errorInfo: ApolloError | undefined
  Component: JSX.Element
}

const useError = (error: ApolloError | undefined): IHookValues => {
  const hookValues: IHookValues = {
    errorInfo: error,
    Component: <ServerError />
  }
  if (error && error.graphQLErrors.length > 0) {
    hookValues.Component = <GraphQLError errorMessage={error.message} />
  }

  return hookValues
}

export default useError
