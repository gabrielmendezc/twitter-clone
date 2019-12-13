import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import { Link } from 'react-router-dom'
import { ME } from '../../graphql/queries'

const Home: FC = () => {
  const { data, loading, error } = useQuery(ME)

  if (loading) return <div>loading...</div>
  if (error) return <div>error</div>

  console.log(data)
  return (
    <>
      <Link to="/login">login</Link>
      <h1>{data.me.username}</h1>
    </>
  )
}

export default Home
