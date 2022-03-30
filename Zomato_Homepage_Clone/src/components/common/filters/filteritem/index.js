import React from 'react';
import "../filteritem/filteritem.css";

const Filteritem = ({filter}) => {
  return (
    <div className='filter-item'>
        {filter.icon && filter.icon}
        <div className='filter-name'>{filter.title}
        </div>
        </div>
  )
};

export default Filteritem;