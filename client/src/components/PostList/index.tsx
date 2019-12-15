import React, { FC, Fragment, useState } from 'react'
import { Post } from '../Post'
import { HomeSectionTitle } from '../HomeSectionTitle'

export const PostList: FC = () => {
  const [isShowing, setIsShowing] = useState(true)
  // Fetch interesting posts when clicked arrow right
  const placeholderAuthor = {
    username: 'chollometro',
    profilePicture:
      'https://pbs.twimg.com/profile_images/953999008447557632/vkdhMjOq_x96.jpg'
  }

  const body =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <Fragment>
      <HomeSectionTitle
        clickHandler={() => setIsShowing(!isShowing)}
        isShowing={isShowing}
        title="Things you might be interested in"
      />
      {isShowing && (
        <Fragment>
          <Post postedAt={new Date()} author={placeholderAuthor} body={body} />
          <Post postedAt={new Date()} author={placeholderAuthor} body={body} />
          <Post postedAt={new Date()} author={placeholderAuthor} body={body} />
          <Post postedAt={new Date()} author={placeholderAuthor} body={body} />
        </Fragment>
      )}
    </Fragment>
  )
}
