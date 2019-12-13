import React, { FC, useMemo, useState } from 'react'
import { AccessTokenContext } from '.'

export const AccessTokenProvider: FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState('')

  const memoizedContextValue = useMemo(
    () => ({ accessToken, setAccessToken }),
    [accessToken, setAccessToken]
  )

  return (
    <AccessTokenContext.Provider value={memoizedContextValue}>
      {children}
    </AccessTokenContext.Provider>
  )
}
