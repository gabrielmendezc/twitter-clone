import React, { FC, useEffect } from 'react'
import * as SC from './styles'
import { PostList } from '../PostList'
import { WhoToFollow } from '../WhoToFollow'
import { NewPostButton } from './NewPostButton'
import { useNavbar } from '../../hooks/useNavbar'

const Home: FC = () => {
  const { setTitle, setCanGoBack } = useNavbar()
  useEffect(() => {
    setTitle('Home')
    setCanGoBack(false)
  }, [setTitle, setCanGoBack])
  return (
    <SC.HomeWrapper>
      <PostList />
      <WhoToFollow />
      <NewPostButton />
    </SC.HomeWrapper>
  )
}

export default Home
