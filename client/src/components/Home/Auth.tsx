import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import { GET_ME } from '../../queries'
import Loader from '../Loader'
import * as SC from './styles'
import useError from '../../hooks/useError'

const HomeAuth: FC = () => {
  const { data, loading, error } = useQuery(GET_ME)
  const { Component: ErrorComponent } = useError(error)

  if (loading) return <Loader />
  if (error) return ErrorComponent

  const {
    me,
    me: { joinedAt }
  } = data

  const joinedAtDay = new Date(joinedAt).getDate()
  const today = new Date().getDate()

  return (
    <SC.AuthWrapper>
      {joinedAtDay === today && (
        <h1>
          Welcome, {me.username}!
          <span aria-label="smiley emojis" role="img">
            😀😀
          </span>
        </h1>
      )}
    </SC.AuthWrapper>
  )
}

export default HomeAuth
