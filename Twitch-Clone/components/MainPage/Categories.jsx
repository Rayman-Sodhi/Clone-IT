import classNames from 'classnames'
import React from 'react'

import style from '../../styles/MainPage/Categories.module.scss'
import CategoryCard from './CategoryCard'

const Categories = ({ collapse }) => {
  const display = (  collapse ? 11 : 10 ) 

  return (
    <>
        <h1 className={ classNames( style.title, { [style.expand]: collapse })}><span>Categories</span> we think you will like</h1>
        <div className={ classNames( style.categoriesContainer, { [style.expand]: collapse })}>
            {Array(display).fill(<CategoryCard />)}
        </div>
        <div className={ classNames( style.hr, { [style.expand]: collapse })}></div>
    </>
  )
}

export default Categories