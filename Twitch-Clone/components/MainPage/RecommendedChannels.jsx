import React, { useState } from 'react'

import ChannelDisplayer from './ChannelDisplayer'
import Arrow from '../../public/svg/Arrow'

import style from '../../styles/MainPage/RecommendedChannels.module.scss'
import classNames from 'classnames'

const RecommendedChannels = ({ collapse, title }) => {
  const [showMore, setShowMore] = useState(false)

  // set the display amount accoarding to show more and collapse of side bar!
  const display = showMore ?
  (  collapse ? 12 : 10 ) 
  : 
  (  collapse ? 6 : 5 )
   
  return (
    <div className={ classNames( style.Container, { [style.expand]: collapse } ) }>
      <h1>{title}</h1>
        <div className={style.ChannelList}>
          {Array(display).fill(<ChannelDisplayer />)}
        </div>
      <div className={style.hr}>
          <div className={style.ShowMoreContainer}>
            <h3 className={ classNames( { [style.showMore]: showMore } ) } onClick={() => setShowMore(!showMore)}>
              { showMore ? "Hide" : "Show more" }
              <Arrow className={style.Arrow} />
            </h3>
          </div>
      </div>
    </div>
  )
}

export default RecommendedChannels