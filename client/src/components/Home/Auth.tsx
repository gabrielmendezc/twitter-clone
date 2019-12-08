import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import { GET_ME } from '../../queries'
import Loader from '../Loader'
import useError from '../../hooks/useError'

const HomeAuth: FC = () => {
  const { data, loading, error } = useQuery(GET_ME)
  const { Component: ErrorComponent } = useError(error)

  if (loading) return <Loader />
  if (error) return ErrorComponent

  console.log(data)

  const {
    me: { username }
  } = data

  return (
    <h1>
      Welcome, {username}!{' '}
      <span aria-label="smiley emojis" role="img">
        😀😀
      </span>
    </h1>
  )
}

export default HomeAuth
