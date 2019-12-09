import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import { GET_ME } from '../../queries'
import Loader from '../Loader'
import useError from '../../hooks/useError'

const Profile: FC = () => {
  const { data, loading, error } = useQuery(GET_ME)
  const { Component: ErrorComponent } = useError(error)

  if (loading) return <Loader />
  if (error) return ErrorComponent

  console.log(data)

  return (
    <h1>
      I'm the profile!{' '}
      <span aria-label="smiley emojis" role="img">
        😀😀
      </span>
    </h1>
  )
}

export default Profile
