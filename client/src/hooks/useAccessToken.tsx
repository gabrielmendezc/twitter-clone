import { useContext } from 'react'
import {
  IAccessTokenContext,
  AccessTokenContext
} from '../context/access_token'

export const useAccessToken = (): IAccessTokenContext => {
  const accessTokenContext = useContext(AccessTokenContext)

  if (!accessTokenContext) {
    throw new Error('Context for access token is needed.')
  }

  return accessTokenContext
}
