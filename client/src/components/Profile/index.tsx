import React, { FC, useEffect } from 'react'
import * as SC from './styles'
import { useNavbar } from '../../hooks/useNavbar'

const Profile: FC = () => {
  const { setCanGoBack, setTitle } = useNavbar()
  useEffect(() => {
    setTitle('Profile')
    setCanGoBack(false)
  }, [setTitle, setCanGoBack])
  return (
    <SC.ProfileWrapper>
      <h1>Profile</h1>
    </SC.ProfileWrapper>
  )
}

export default Profile
