import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { useAccessToken } from '../../hooks/useAccessToken'

const Home: FC = () => {
  const { accessToken } = useAccessToken()
  console.log(accessToken)
  const { data, loading, error } = useQuery(
    gql`
      {
        me {
          id
          username
        }
      }
    `
  )

  if (loading) return <div>loading...</div>
  if (error) return <div>error</div>

  return (
    <>
      <Link to="/login">login</Link>
      <h1>
        {data.me.id} {data.me.username}
      </h1>
    </>
  )
}

export default Home
