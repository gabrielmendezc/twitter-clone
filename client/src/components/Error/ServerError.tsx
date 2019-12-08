import React, { FC } from 'react'

const ServerError: FC = () => (
  <strong style={{ color: 'red', fontSize: '1.5rem' }}>
    Something went wrong, sorry for the inconvenience{' '}
    <span aria-label="sad emoji" role="img">
      😢
    </span>
  </strong>
)

export default ServerError
