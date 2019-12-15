import React, { FC } from 'react'
import * as SC from './styles'
import { PostList } from '../PostList'
import { WhoToFollow } from '../WhoToFollow'
import { NewPostButton } from './NewPostButton'

const Home: FC = () => {
  return (
    <SC.HomeWrapper>
      <PostList />
      <WhoToFollow />
      <NewPostButton />
    </SC.HomeWrapper>
  )
}

export default Home
