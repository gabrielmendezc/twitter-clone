import React, { FC, ChangeEvent, useState, Fragment } from 'react'
import { useQuery, useApolloClient, useMutation } from 'react-apollo'
import { GET_ME, CHANGE_PROFILE_PICTURE } from '../../queries'
import Loader from '../Loader'
import useError from '../../hooks/useError'
import * as SC from './styles'
import { useHistory } from 'react-router'
import GraphQLError from '../Error/GraphQLError'

const Profile: FC = () => {
  const [downloadingNewImage, setDownloadingNewImage] = useState(false)
  const [
    changeProfilePicture,
    { loading: loadingNewProfilePicture, error: profilePictureError }
  ] = useMutation(CHANGE_PROFILE_PICTURE)

  const {
    data,
    loading,
    error,
    refetch: refetchUser,
    networkStatus
  } = useQuery(GET_ME, {
    notifyOnNetworkStatusChange: true
  })
  const { Component: ErrorComponent } = useError(error)
  const client = useApolloClient()
  const history = useHistory()

  if (loading && networkStatus !== 4)
    return (
      <SC.JustifyCenter>
        <Loader />
      </SC.JustifyCenter>
    )
  if (error) return ErrorComponent

  const {
    me: { profilePicture, username }
  } = data

  const logoutHandler = () => {
    localStorage.getItem('token') && localStorage.removeItem('token')
    client.writeData({ data: { isLoggedIn: false } })
    history.push('/')
  }

  const uploadHandler = async ({
    target: { files }
  }: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = files && files[0]
      if (file) {
        await changeProfilePicture({ variables: { file } })
        await refetchUser()
        setDownloadingNewImage(true)
      }
    } catch {}
  }

  return (
    <SC.ProfileWrapper>
      {loadingNewProfilePicture || loading || downloadingNewImage ? (
        <SC.JustifyCenter>
          <Loader width="128px" />
          <SC.Image
            onLoad={() => setDownloadingNewImage(false)}
            style={{ display: 'none' }}
            src={profilePicture}
            alt={`${username}'s profile picture`}
          />
        </SC.JustifyCenter>
      ) : (
        <SC.ProfilePictureWrapper>
          <form encType="multipart/form-data">
            <input
              accept="image/jpeg, image/png"
              type="file"
              id="file"
              onChange={uploadHandler}
            />
            <label htmlFor="file">Choose a new profile picture</label>
          </form>
          <SC.Image
            src={profilePicture}
            alt={`${username}'s profile picture`}
          />
        </SC.ProfilePictureWrapper>
      )}
      {profilePictureError && (
        <Fragment>
          <GraphQLError errorMessage="We could not update your profile picture, sorry for the inconvenience" />
          <br />
        </Fragment>
      )}
      <SC.Profile>
        <h1>@{username}</h1>

        <button onClick={logoutHandler} className="btn btn-danger">
          Logout
        </button>
      </SC.Profile>
    </SC.ProfileWrapper>
  )
}

export default Profile
