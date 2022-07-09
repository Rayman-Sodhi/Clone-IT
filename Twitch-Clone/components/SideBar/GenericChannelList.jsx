import React, { useState } from 'react'

import FollowedChannels from '../../public/data/FollowedChannels.json'
import ChannelCardSmall from './ChannelCardSmall'

import styles from '../../styles/SideBar/SideBar.module.scss'


const GenericChannelList = () => {
    const [showMoreFollowed, setShowMoreFollowed] = useState(false)

    let compactFollowedChannels = [...FollowedChannels]
    compactFollowedChannels = compactFollowedChannels.splice(0, 5)

    let followedArray = showMoreFollowed ? FollowedChannels : compactFollowedChannels

  return (
      <>
        { followedArray.map((channel, index) => (
            <ChannelCardSmall key={index} Name={channel.name} Playing={channel.playing} ViewCount={channel.viewCount} />
        )) }

        { showMoreFollowed ? 
        <p className={styles.showMore} onClick={() => setShowMoreFollowed(false)}>
            Show Less
        </p> 
        :
        <p className={styles.showMore} onClick={() => setShowMoreFollowed(true)}>
            Show More
        </p> 
        }
      </>
  )
}

export default GenericChannelList