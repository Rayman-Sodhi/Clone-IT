import classNames from 'classnames'
import React, { useState } from 'react'

import MoreOptions from '../../public/svg/MoreOptions'
import NotInterested from '../../public/svg/NotInterested'
import Report from '../../public/svg/Report'

import style from '../../styles/SmallComponents.module.scss'

const Options = ({ channel }) => {
    const [open, setOpen] = useState(false)
    // console.log(open);
  return (
      <>
        <div className={style.Options} onClick={() => setOpen(!open)}>
            <MoreOptions className={style.Icon} />
        </div>
        <div className={ classNames( style.MenuExpanded, { [style.active]: open }) }>
            { channel ? (
                <>
                <div className={style.option}>
                    <NotInterested className={style.Icon}/> Not Interested
                </div>
                <div className={style.hr}></div>
                <div className={style.option}>
                    <Report className={style.Icon}/> Report Cool Name
                </div>
                </>
                ) : (
                <div className={style.option}>
                    <NotInterested className={style.Icon}/> Not Interested
                </div>
                )   
            }
        </div>
      </>
  )
}

export default Options