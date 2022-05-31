import React, { useState } from 'react'

import Channel from '../../public/svg/Channel.js'
import ChannelProcessor from '../../public/svg/ChannelProcessor.js'
import CreatorDashboard from '../../public/svg/CreatorDashboard.js'
import Safety from '../../public/svg/Safety.js'
import Friends from '../../public/svg/Friends.js'
import Subscription from '../../public/svg/Subscription.js'
import Drops from '../../public/svg/Drops.js'
import Wallet from '../../public/svg/Wallet.js'
import Settings from '../../public/svg/Settings.js'
import Language from '../../public/svg/Language.js'
import DarkMode from '../../public/svg/DarkMode.js'
import Logout from '../../public/svg/Logout.js'

import styles from "../../styles/Navbar/UserSettings.module.scss"
import classNames from 'classnames'
import Arrow from '../../public/svg/Arrow.js'

const UserSettings = () => {
    const [online, setOnline] = useState()
    const [activity, setActivity] = useState()
    const [darkTheme, setDarkTheme] = useState()

  return (
    <div className={styles.UserSettings}>
        <div className={styles.Profile}>
            <img src="images/DefaultAvatar.png" alt="Default Avatar" className={styles.Avatar} />
            <div className={styles.userStatus}>
                <h3>Username</h3>
                <p> <span className={classNames( [styles.littleBubble], { [styles.online]: online } )} /> Online</p>
            </div>
        </div>
        <div className={classNames( [styles.setStatus], { [styles.online]: online } )} >
            <div className={styles.status} onClick={() => setOnline(!online)}>
                <p>Online</p>
                <div className={styles.toggleButton}>
                    <span className={styles.bubble}/>
                </div>
            </div>
            { online ?
                <div className={ classNames( [styles.activity], { [styles.activated]: activity } ) } onClick={() => setActivity(!activity)}>
                    <p>Share My Activity</p>
                    <div className={styles.toggleButtonActivity}>
                        <span className={styles.bubbleActivity}/>
                    </div>
                </div> 
                : null
            }
        </div>
            <div className={styles.subCategory}>
                <Channel className={styles.Icon} />
                <p>Channel</p>
            </div>
            <div className={styles.subCategory}>
                <ChannelProcessor className={styles.Icon} />
                <p>Video Producer</p>
            </div>
            <div className={styles.subCategory}>
                <CreatorDashboard className={styles.Icon} />
                <p>Creator Dashboard</p>
            </div>
            <div className={styles.subCategory}>
                <Safety className={styles.Icon} />
                <p>Safety</p>
            </div>
        <div className={styles.hr}/>
            <div className={styles.subCategory}>
                <Friends className={styles.Icon} />
                <p>Friends</p>
            </div>
            <div className={styles.subCategory}>
                <Subscription className={styles.Icon} />
                <p>Subscriptions</p>
            </div>
            <div className={styles.subCategory}>
                <Drops className={styles.Icon} />
                <p>Drops</p>
            </div>
            <div className={styles.subCategory}>
                <Wallet className={styles.Icon} />
                <p>Wallet</p>
            </div>
        <div className={styles.hr}/>
            <div className={styles.subCategory}>
                <Settings className={styles.Icon} />
                <p>Settings</p>
            </div>
            <div className={styles.subCategory}>
                <Language className={styles.Icon} />
                <p>Language</p>
                <Arrow className={styles.ArrowIcon}/>
            </div>
            <div className={styles.subCategory} onClick={() => setDarkTheme(!darkTheme)}>
                <DarkMode className={styles.Icon} />
                <p>Dark Theme</p>
                <div className={classNames( [styles.toggleButton], { [styles.Theme]: darkTheme }) }>
                    <span className={classNames( [styles.bubble], { [styles.Theme]: darkTheme }) }/>
                </div>
            </div>
        <div className={styles.hr}/>
            <div className={styles.subCategory}>
                <Logout className={styles.Icon} />
                <p>Log Out</p>
            </div>
    </div>
  )
}

export default UserSettings