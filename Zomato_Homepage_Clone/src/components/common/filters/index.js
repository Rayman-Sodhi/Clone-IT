import React from 'react';
import "../filters/filters.css";
import Filteritem from './filteritem';

const Filter = ({filterList}) => {
  return (
 <div className='filters'>
     {
         filterList && filterList.map((filter)=>{
             return <Filteritem filter={filter} key={filter.id}></Filteritem>;
         })
     }
 </div>
  );
    };

export default Filter;