import { createContext } from 'react'

export interface INavbarContext {
  title: string
  setTitle: (title: string) => void
  canGoBack: boolean
  setCanGoBack: (can: boolean) => void
}

export const NavbarContext = createContext<INavbarContext | null>(null)
