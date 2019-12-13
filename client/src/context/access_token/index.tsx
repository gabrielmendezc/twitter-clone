import { createContext } from 'react'

export interface IAccessTokenContext {
  accessToken: string
  setAccessToken: (token: string) => void
}

export const AccessTokenContext = createContext<IAccessTokenContext | null>(
  null
)
