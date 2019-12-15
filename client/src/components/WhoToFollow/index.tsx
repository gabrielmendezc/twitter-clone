import React, { FC, Fragment, useState } from 'react'
import { HomeSectionTitle } from '../HomeSectionTitle'

export const WhoToFollow: FC = () => {
  const [isShowing, setIsShowing] = useState(true)

  return (
    <Fragment>
      <HomeSectionTitle
        clickHandler={() => setIsShowing(!isShowing)}
        isShowing={isShowing}
        title="Who to follow"
      />
    </Fragment>
  )
}
