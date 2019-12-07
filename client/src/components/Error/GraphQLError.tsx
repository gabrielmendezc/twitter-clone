import React, { FC } from 'react'

interface IGraphQLErrorProps {
  errorMessage: string
}

const GraphQLError: FC<IGraphQLErrorProps> = ({ errorMessage }) => (
  <strong>{errorMessage}</strong>
)

export default GraphQLError
