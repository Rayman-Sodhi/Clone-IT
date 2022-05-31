import React from 'react'

import style from '../../styles/MainPage/RecommendedChannels.module.scss'
import Options from '../SmallComponents/Options'

const ChannelDisplayer = () => {
  return (
    <div className={style.ChannelDisplayer}>
        <div className={style.Video}>

        </div>
        <div className={style.ChannelInfo}>
            <img src="images/DefaultAvatar.png" alt="Default Avatar" className={style.Avatar}/>
            <div className={style.TextContent}>
                <h1>Cool Livestream Name</h1>
                <h3>Cool Channel Name</h3>
                <h5>Cool Game</h5>
                <span className={style.tag}>Portuguese</span>
            </div>
            <div className={style.optionsContainer}>
              <Options channel={true}/>
            </div>
        </div>

    </div>
  )
}

export default ChannelDisplayer