import { createContext } from 'react'

export interface INavbarContext {
  title: string
  canGoBack: boolean
}

export const NavbarContext = createContext<INavbarContext | null>(null)
