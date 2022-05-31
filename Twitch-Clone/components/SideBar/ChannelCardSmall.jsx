import React from 'react'

import styles from '../../styles/SideBar/ChannelCardSmall.module.scss'
import classNames from 'classnames'

const ChannelCardSmall = ( { Name, Playing, ViewCount } ) => {
    const isOnline = typeof ViewCount === "number"
  return (
    <div className={ classNames( styles.ChannelCardSmall, { [styles.offline]: !isOnline } ) }>
        <img src="images/DefaultAvatar.png" alt="Default Avatar" className={styles.Avatar}/>
        <div className={styles.ChanneInfo}>
            <h3>{Name}</h3>
            {
                isOnline ? <p>{Playing}</p> : <p>5 new videos</p>
            }
        </div>
        <div className={styles.ViewCount}>
            {
                isOnline ? (
                    <>
                        <span className={styles.LiveStats}></span>
                        <p>{ViewCount}</p>
                    </>
                ) : (
                <p>Offline</p>
                )
            }
        </div>
    </div>
  )
}

export default ChannelCardSmall