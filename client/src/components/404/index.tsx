import React, { FC, useEffect } from 'react'
import * as SC from './styles'
import { useNavbar } from '../../hooks/useNavbar'
import { Link } from 'react-router-dom'

export const NotFound: FC = () => {
  const { setTitle, setCanGoBack } = useNavbar()
  useEffect(() => {
    setCanGoBack(true)
    setTitle('Not found')
  }, [setCanGoBack, setTitle])

  return (
    <SC.NotFound>
      <h1>We're sorry, that page doesn't exist.</h1>
      <p>
        Why don't you try making a <Link to="/browse">search</Link> to find
        something more?
      </p>
    </SC.NotFound>
  )
}
