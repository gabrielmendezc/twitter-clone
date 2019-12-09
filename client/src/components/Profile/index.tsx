import React, { FC, ChangeEvent } from 'react'
import { useQuery, useApolloClient, useMutation } from 'react-apollo'
import { GET_ME, CHANGE_PROFILE_PICTURE } from '../../queries'
import Loader from '../Loader'
import useError from '../../hooks/useError'
import * as SC from './styles'
import { useHistory } from 'react-router'
import GraphQLError from '../Error/GraphQLError'

const Profile: FC = () => {
  const [
    changeProfilePicture,
    { data: dataUpload, error: ProfilePictureError }
  ] = useMutation(CHANGE_PROFILE_PICTURE)

  const { data, loading, error, refetch: refetchUpdatedUser } = useQuery(GET_ME)
  const { Component: ErrorComponent } = useError(error)
  const client = useApolloClient()
  const history = useHistory()

  if (loading) return <Loader />
  if (error) return ErrorComponent

  const {
    me: { profilePicture, username }
  } = data

  const logoutHandler = () => {
    localStorage.getItem('token') && localStorage.removeItem('token')
    client.writeData({ data: { isLoggedIn: false } })
    history.push('/')
  }

  const uploadHandler = ({
    target: { files }
  }: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = files && files[0]
      if (file) {
        changeProfilePicture({ variables: { file } })
      }
    } catch {}
  }

  if (dataUpload) {
    refetchUpdatedUser()
  }

  return (
    <SC.ProfileWrapper>
      <SC.Image src={profilePicture} alt={`${username}'s profile picture`} />
      {ProfilePictureError && (
        <GraphQLError errorMessage="We could not update your profile picture, sorry for the inconvenience" />
      )}
      <SC.Profile>
        <h1>@{username}</h1>
        <form encType="multipart/form-data">
          <input
            accept="image/jpeg, image/png"
            type="file"
            name="document"
            onChange={uploadHandler}
          />
        </form>
        <button onClick={logoutHandler} className="btn btn-danger">
          Logout
        </button>
      </SC.Profile>
    </SC.ProfileWrapper>
  )
}

export default Profile
