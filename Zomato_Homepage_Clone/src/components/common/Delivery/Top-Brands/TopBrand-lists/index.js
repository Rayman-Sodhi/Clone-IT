import React from 'react'
import "./topBrands-list.css"

const TopBrandss = ({item}) => {
  return (
    <div>
    <div className="delivery-item-covers">
    <img src={item.cover}
    className="delivery-item-images"
    alt={item.title}>
    </img>
    </div>
    <div className='delivery-item-titles'>{item.title}</div>
    </div>
  )
}

export default TopBrandss;