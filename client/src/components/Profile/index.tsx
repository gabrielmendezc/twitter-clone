import React, { FC, ChangeEvent, useState, Fragment } from 'react'
import { useQuery, useApolloClient, useMutation } from 'react-apollo'
import { GET_ME, CHANGE_PROFILE_PICTURE } from '../../queries'
import Loader from '../Loader'
import useError from '../../hooks/useError'
import * as SC from './styles'
import { useHistory } from 'react-router'
import GraphQLError from '../Error/GraphQLError'
import ProtectedRoute from '../ProtectedRoute'

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
    client.writeData({ data: { isLoggedIn: false, me: null } })
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
            <label htmlFor="file">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  d="M6.523,7.683c0.96,0,1.738-0.778,1.738-1.738c0-0.96-0.778-1.738-1.738-1.738c-0.96,0-1.738,0.778-1.738,1.738
								C4.785,6.904,5.563,7.683,6.523,7.683z M5.944,5.365h1.159v1.159H5.944V5.365z M18.113,0.729H1.888
								c-0.64,0-1.159,0.519-1.159,1.159v16.224c0,0.64,0.519,1.159,1.159,1.159h16.225c0.639,0,1.158-0.52,1.158-1.159V1.889
								C19.271,1.249,18.752,0.729,18.113,0.729z M18.113,17.532c0,0.321-0.262,0.58-0.58,0.58H2.467c-0.32,0-0.579-0.259-0.579-0.58
								V2.468c0-0.32,0.259-0.579,0.579-0.579h15.066c0.318,0,0.58,0.259,0.58,0.579V17.532z M15.91,7.85l-4.842,5.385l-3.502-2.488
								c-0.127-0.127-0.296-0.18-0.463-0.17c-0.167-0.009-0.336,0.043-0.463,0.17l-3.425,4.584c-0.237,0.236-0.237,0.619,0,0.856
								c0.236,0.236,0.62,0.236,0.856,0l3.152-4.22l3.491,2.481c0.123,0.123,0.284,0.179,0.446,0.174c0.16,0.005,0.32-0.051,0.443-0.174
								l5.162-5.743c0.238-0.236,0.238-0.619,0-0.856C16.529,7.614,16.146,7.614,15.91,7.85z"
                ></path>
              </svg>
            </label>
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
