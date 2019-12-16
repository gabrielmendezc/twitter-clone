import React, { FC, useEffect } from 'react'
import * as SC from './styles'
import { useNavbar } from '../../hooks/useNavbar'
import { useQuery } from 'react-apollo'
import { ME } from '../../graphql/queries'
import { useRouteMatch, NavLink } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import Loader from '../Loader'
import { JustifyCenter } from './styles'
import * as dateFns from 'date-fns'
import { Switch, Route } from 'react-router-dom'
import { ProfileNavigation } from './Navigation'
import { ProfileRoutes } from '../Routes/profile_routes'

const Profile: FC = () => {
  const { setCanGoBack, setTitle } = useNavbar()
  const { data, loading } = useQuery(ME)
  const { path } = useRouteMatch()
  useDocumentTitle(data ? `@${data.me.username} / Tweetair` : 'Tweetair', data)
  useEffect(() => {
    setTitle(data ? data.me.username : '')
    setCanGoBack(true)
  }, [setTitle, setCanGoBack, data])

  if (loading) {
    return (
      <SC.ProfileWrapper>
        <JustifyCenter>
          <Loader />
        </JustifyCenter>
      </SC.ProfileWrapper>
    )
  }

  const {
    me: { profilePicture, joinedAt, username, confirmed }
  } = data

  return (
    <SC.ProfileWrapper>
      <div className="profile-edit">
        <h1>Your Profile</h1>
        <button onClick={() => console.log('Wants to edit profile')}>
          Edit Profile
        </button>
      </div>
      <SC.Profile>
        <SC.Image src={profilePicture} alt={`${username} profile`} />
        <div className="profile-details">
          <h1>@{username}</h1>
          <time dateTime={joinedAt}>
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                <circle cx="7.032" cy="8.75" r="1.285"></circle>
                <circle cx="7.032" cy="13.156" r="1.285"></circle>
                <circle cx="16.968" cy="8.75" r="1.285"></circle>
                <circle cx="16.968" cy="13.156" r="1.285"></circle>
                <circle cx="12" cy="8.75" r="1.285"></circle>
                <circle cx="12" cy="13.156" r="1.285"></circle>
                <circle cx="7.032" cy="17.486" r="1.285"></circle>
                <circle cx="12" cy="17.486" r="1.285"></circle>
              </g>
            </svg>
            Joined {dateFns.format(new Date(joinedAt), 'MMMM yyyy')}
          </time>
        </div>
      </SC.Profile>
      <SC.ProfileTabsWrapper>
        <ProfileNavigation />
        <ProfileRoutes />
      </SC.ProfileTabsWrapper>
    </SC.ProfileWrapper>
  )
}

export default Profile
