import React from 'react'


import Games from '../../public/svg/Games'
import IRL from '../../public/svg/IRL'
import Music from '../../public/svg/Music'
import Esports from '../../public/svg/Esports'
import Creative from '../../public/svg/Creative'

import style from '../../styles/MainPage/TopCategories.module.scss'
import classNames from 'classnames'

const CategorySpan = ({ collapse }) => {
  return (
    <div className={ classNames( style.TopCategoriesContainer, { [style.expand]: collapse } )}>
        <div className={style.CategorySpan}>
          <h1>Games</h1>
          <Games className={style.Icon} />
        </div>
        <div className={style.CategorySpan}>
          <h1>IRL</h1>
          <IRL className={style.Icon} />
        </div>
        <div className={style.CategorySpan}>
          <h1>Music</h1>
          <Music className={style.Icon} />
        </div>
        <div className={style.CategorySpan}>
          <h1>Esports</h1>
          <Esports className={style.Icon} />
        </div>
        <div className={style.CategorySpan}>
          <h1>Creative</h1>
          <Creative className={style.Icon} />
        </div>
    </div>
  )
}

export default CategorySpan