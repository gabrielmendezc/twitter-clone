import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react'
import { useQuery, useApolloClient, useMutation } from 'react-apollo'
import { GET_ME, CHANGE_PROFILE_PICTURE } from '../../queries'
import Loader from '../Loader'
import useError from '../../hooks/useError'
import * as SC from './styles'
import { useHistory } from 'react-router'
import gql from 'graphql-tag'

const Profile: FC = () => {
  const [
    changeProfilePicture,
    { data: dataUpload, loading: loadingUpload, error: errorUploading }
  ] = useMutation(CHANGE_PROFILE_PICTURE)

  const { data, loading, error } = useQuery(GET_ME)
  const { Component: ErrorComponent } = useError(error)
  const client = useApolloClient()
  const history = useHistory()

  if (loading) return <Loader />
  if (error) return ErrorComponent

  const {
    me: { profilePicture, joinedAt, username, email }
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
        changeProfilePicture({ variables: { file: file } })
      }
    } catch {}
  }

  if (dataUpload) {
    const { changeProfilePicture: newProfilePicture } = dataUpload
    client.writeData({ data: { me: { profilePicture: newProfilePicture } } })
  }

  const idk = client.readQuery({
    query: gql`
      query getLog {
        me {
          email
          profilePicture
        }
      }
    `
  })

  console.log(idk)

  return (
    <SC.ProfileWrapper>
      <SC.Image src={profilePicture} alt={`${username}'s profile picture`} />
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
