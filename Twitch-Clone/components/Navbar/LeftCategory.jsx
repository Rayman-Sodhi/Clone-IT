import React, { useState } from 'react'

import ViewMore from '../../public/data/ViewMore.json'

import TwitchLogo from "../../public/svg/TwitchLogo.js"
import MoreOptions from "../../public/svg/MoreOptions.js"

import styles from '../../styles/Navbar/LeftCategory.module.scss'
import classNames from 'classnames'

const LeftCategory = () => {
    const [moreOptions, setMoreOptions] = useState()

  return (
    <div className={styles.LeftCategory}>
        <TwitchLogo className={styles.Icon} />
        <p>Following</p>
        <p>Browse</p>
        <div className={styles.IconContainer} name="More" >
            <MoreOptions className={styles.IconMoreOptions}  onClick={() => setMoreOptions(!moreOptions)}  />
        </div>
        <div className={classNames( styles.moreOptions, { [styles.active]: moreOptions })}>
            <h3>GENERAL</h3>

            { ViewMore.map((item, index) => <ul key={index}>{item}</ul>) }
            
        </div>
    </div>
  )
}

export default LeftCategory