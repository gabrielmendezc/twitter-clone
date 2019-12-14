import React, { FC } from 'react'
import * as SC from './styles'
import { PostList } from '../PostList'

const Home: FC = () => {
  return (
    <SC.HomeWrapper>
      <PostList />
    </SC.HomeWrapper>
  )
}

export default Home
