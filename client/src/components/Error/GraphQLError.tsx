import React, { FC } from 'react'

interface IGraphQLErrorProps {
  errorMessage: string
}

const GraphQLError: FC<IGraphQLErrorProps> = ({ errorMessage }) => (
  <strong style={{ color: 'red', fontSize: '1.5rem' }}>{errorMessage}</strong>
)

export default GraphQLError
