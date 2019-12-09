import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react'
import { useQuery, useApolloClient, useMutation } from 'react-apollo'
import { GET_ME, UPLOAD_FILE } from '../../queries'
import Loader from '../Loader'
import useError from '../../hooks/useError'
import * as SC from './styles'
import { useHistory } from 'react-router'

const Profile: FC = () => {
  const [
    uploadFile,
    { data: dataUpload, loading: loadingUpload, error: errorUploading }
  ] = useMutation(UPLOAD_FILE)

  const { data, loading, error } = useQuery(GET_ME)
  const { Component: ErrorComponent } = useError(error)
  const client = useApolloClient()
  const history = useHistory()

  if (loading) return <Loader />
  if (error) return ErrorComponent

  const {
    me: { profilePicture, joinedAt, username, email }
  } = data

  const day = new Date(joinedAt).getDate()
  const month = new Date(joinedAt).getMonth()
  const year = new Date(joinedAt).getFullYear()

  const formattedJoinDate = `${day}/${month}/${year}`

  const logoutHandler = () => {
    localStorage.getItem('token') && localStorage.removeItem('token')
    client.writeData({ data: { isLoggedIn: false } })
    history.push('/')
  }

  if (dataUpload) {
    console.log(dataUpload)
  }

  const uploadHandler = ({
    target: { files }
  }: ChangeEvent<HTMLInputElement>) => {
    const file = files && files[0]
    if (file) {
      console.log(file)
      uploadFile({ variables: { file: file } })
    }
  }

  return (
    <SC.ProfileWrapper>
      <SC.Image src={profilePicture} alt={`${username}'s profile picture`} />
      <SC.Profile>
        <h1>@{username}</h1>
        <form
          encType="multipart/form-data"
          onSubmit={() => console.log('Submitted')}
        >
          <input type="file" name="document" onChange={uploadHandler} />
        </form>
        <button onClick={logoutHandler} className="btn btn-danger">
          Logout
        </button>
      </SC.Profile>
    </SC.ProfileWrapper>
  )
}

export default Profile
