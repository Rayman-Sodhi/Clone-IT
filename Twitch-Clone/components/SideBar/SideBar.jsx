import React, { useState } from 'react'

import GenericChannelList from './GenericChannelList'

import Collapse from '../../public/svg/Collapse'
import Search from '../../public/svg/Search'
import FollowedChannels from '../../public/svg/FollowedChannels'
import RecommendedChannels from '../../public/svg/RecommendedChannels'

import styles from '../../styles/SideBar/SideBar.module.scss'
import classNames from 'classnames'

const SideBar = ({ collapse, setCollapse }) => {

  return (
    <>
      <div className={ classNames( styles.SideBar, { [styles.collapsed]: collapse })}>
          <div className={styles.topHead}>
              <p>FOLLOWED CHANNELS</p>
              <div className={styles.IconContainer}  onClick={() => setCollapse(!collapse) } name="Collapse">
                  <Collapse className={styles.Icon}/>
              </div>
          </div>
              { collapse ? <FollowedChannels className={styles.IconCollapse} name="Followed Channels" /> : null }
              <GenericChannelList />
              <p className={styles.RecommendedChannels}>RECOMMENDED CHANNELS</p>
              { collapse ? <RecommendedChannels className={styles.IconCollapse} name="Recommended Channels" /> : null }
              <GenericChannelList />
      </div>
      <div className={ classNames( styles.SearchFriends, { [styles.collapsed]: collapse })}>
          <Search className={styles.SearchIcon} />
          <input type="search" placeholder='Search to Add Friends' />
      </div>
    </>
  )
}

export default SideBar