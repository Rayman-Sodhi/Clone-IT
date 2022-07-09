import React from 'react'

import style from '../../styles/MainPage/CategoryCard.module.scss'
import Options from '../SmallComponents/Options'

const CategoryCard = () => {

  

  return (
    <div className={style.CategoryContainer}>
        <div className={style.Game}>

        </div>
        <div className={style.GameInfo}>
            <div className={style.TextContent}>
                <h1>Cool Game</h1>
                <h3>40k viewers</h3>
                <span className={style.tag}>Preciso de Emprego</span>
            </div>
            <div className={style.optionsContainer}>
              <Options channel={false}/>
            </div>
        </div>

    </div> 
  )
}

export default CategoryCard