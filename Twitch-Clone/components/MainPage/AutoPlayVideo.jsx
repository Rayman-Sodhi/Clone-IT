import React, { useState, useRef } from 'react'


import Fullscreen from '../../public/svg/Fullscreen'
import Play from '../../public/svg/Play'
import Settings from '../../public/svg/Settings'
import Volume from '../../public/svg/Volume'

import style from '../../styles/MainPage/AutoPlayVideo.module.scss'
import classNames from 'classnames'

const AutoPlayVideo = ({ position, text }) => {
    const [showAudio, setShowAudio] = useState(false)
    const [volume, setVolume] = useState(50)

    let realInputWidth = volume / 100 * 13


    let positionClass;
    switch (position) {
        case 2: case -3: case 7: positionClass = "farRight"
            break;
        case 1: case -4: case 6: positionClass = "right"
            break;
        case 0: case -5: case 5: positionClass = "center"
            break;
        case -1: case 4: case -6: positionClass = "left"
            break;
        case -2: case 3: case -7: positionClass = "farLeft"
            break;
        default:
            break;
    }


  return (
    <div className={ classNames( style.VideoContainer, style[positionClass] )}>
        <div className={style.Video}>
            <header>
                <div className={style.InLive}>LIVE</div>
            </header>
            {text} <br/><br/>
            Ei recrutador, Nota meu trabalho! :( 
            <footer>
                <div className={style.LeftControl}  onMouseEnter={() => setShowAudio(true)} onMouseLeave={() => setShowAudio(false)}>
                    <div className={style.IconContainer} name="Play (space/k)">
                        <Play className={style.Icon}/>
                    </div>
                    <div className={style.IconContainer} name="Mute (m)">
                        <Volume className={style.Icon}/>
                    </div>
                    <input type="range" onChange={(e) => setVolume(e.target.value)} className={classNames({ [style.active]: showAudio} )} />
                    <div className={classNames(  style.volumeFill, { [style.active]: showAudio} ) } style={{ width: realInputWidth + "rem" }}></div>
                </div>
                <div className={style.RightControl}>
                    <div className={style.IconContainer} name="Settings">
                        <Settings className={style.Icon}/>
                    </div>
                    <div className={style.IconContainer} name="Fullscreen (f)">
                        <Fullscreen className={style.Icon} />
                    </div>
                </div>
            </footer>
        </div>
        <div className={style.VideoInfo}>
            <header>
                <img src="images/DefaultAvatar.png" alt="Default Avatar" className={style.Avatar}/>
                <div className={style.ChannelInfo}>
                    <h1>Cool Channel</h1>
                    <h3>Cool Game</h3>
                    <p>35.9K viewers</p>
                </div>
            </header>
            <div className={style.Tags}>
                <span className={style.tag}>Me Contrata</span>
                <span className={style.tag}>Quero trabalhar</span>
                <span className={style.tag}>Minha ansiedade me mata</span>
            </div>
            <div className={style.text}>
                Obrigado por tirar uma parte do seu tempo para olhar meu projeto! Tenha um ótimo dia!
            </div>
        </div>
    </div>
  )
}

export default AutoPlayVideo