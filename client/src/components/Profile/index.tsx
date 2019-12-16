import React, { FC, useEffect, Fragment, useState } from 'react'
import * as SC from './styles'
import { useNavbar } from '../../hooks/useNavbar'
import { useQuery } from 'react-apollo'
import { ME } from '../../graphql/queries'
import { useRouteMatch } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import Loader from '../Loader'
import { JustifyCenter } from './styles'
import * as dateFns from 'date-fns'
import { ProfileNavigation } from './Navigation'
import { ProfileRoutes } from '../Routes/profile_routes'
import { CalendarSVG } from '../CalendarSVG'
import { ConfirmAccountModal } from './ConfirmAccountModal'

const Profile: FC = () => {
  const { setCanGoBack, setTitle } = useNavbar()
  const { data, loading } = useQuery(ME)
  const [closedMailAlert, setClosedMailAlert] = useState(false)
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
    <Fragment>
      {!confirmed && (
        <ConfirmAccountModal
          closeHandler={() => setClosedMailAlert(true)}
          closed={closedMailAlert}
        />
      )}
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
              <CalendarSVG />
              Joined {dateFns.format(new Date(joinedAt), 'MMMM yyyy')}
            </time>
          </div>
        </SC.Profile>
        <SC.ProfileTabsWrapper>
          <ProfileNavigation />
          <ProfileRoutes />
        </SC.ProfileTabsWrapper>
      </SC.ProfileWrapper>
    </Fragment>
  )
}

export default Profile
