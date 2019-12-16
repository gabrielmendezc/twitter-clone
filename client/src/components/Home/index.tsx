import React, { FC, useEffect } from 'react'
import * as SC from './styles'
import { PostList } from '../PostList'
import { WhoToFollow } from '../WhoToFollow'
import { NewPostButton } from './NewPostButton'
import { useNavbar } from '../../hooks/useNavbar'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

const Home: FC = () => {
  useDocumentTitle('Inicio / Tweetair')
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
