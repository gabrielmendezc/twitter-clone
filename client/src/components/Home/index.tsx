import React, { FC } from 'react'
import * as SC from './styles'
import { PostList } from '../PostList'
import { WhoToFollow } from '../WhoToFollow'

const Home: FC = () => {
  return (
    <SC.HomeWrapper>
      <PostList />
      <WhoToFollow />
    </SC.HomeWrapper>
  )
}

export default Home
