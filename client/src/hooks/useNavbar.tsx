import { useContext } from 'react'
import { INavbarContext, NavbarContext } from '../context/Navbar'

export const useNavbar = (): INavbarContext => {
  const navbarContext = useContext(NavbarContext)

  if (!navbarContext) {
    throw new Error(
      'Navbar context is needed, make sure you implemented a provider'
    )
  }

  return navbarContext
}
