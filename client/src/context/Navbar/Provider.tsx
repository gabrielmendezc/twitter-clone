import React, { FC, useState, useMemo } from 'react'
import { NavbarContext } from '.'

export const NavbarProvider: FC = ({ children }) => {
  const [title, setTitle] = useState('')
  const [canGoBack, setCanGoBack] = useState(false)

  const memoizedContextValue = useMemo(
    () => ({
      title,
      setTitle,
      canGoBack,
      setCanGoBack
    }),
    [title, setTitle, canGoBack, setCanGoBack]
  )

  return (
    <NavbarContext.Provider value={memoizedContextValue}>
      {children}
    </NavbarContext.Provider>
  )
}
