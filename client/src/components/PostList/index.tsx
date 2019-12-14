import React, { FC, Fragment } from 'react'
import { Post } from '../Post'

export const PostList: FC = () => {
  // Fetch interesting posts
  const placeholderAuthor = {
    username: 'chollometro',
    profilePicture:
      'https://pbs.twimg.com/profile_images/953999008447557632/vkdhMjOq_x96.jpg'
  }

  return (
    <Fragment>
      <Post
        postedAt={new Date()}
        author={placeholderAuthor}
        body="Lorem Ipsum Sit amet"
      />
      <Post
        postedAt={new Date()}
        author={placeholderAuthor}
        body="Lorem Ipsum Sit amet"
      />
      <Post
        postedAt={new Date()}
        author={placeholderAuthor}
        body="Lorem Ipsum Sit amet"
      />
    </Fragment>
  )
}
