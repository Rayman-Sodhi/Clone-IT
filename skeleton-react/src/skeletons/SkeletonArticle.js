import React from 'react';
import Shimmer from './Shimmer';
import "./Skeleton.css"
import SkeletonElement from './SkeletonElement';

const SkeletonArticle = ({theme}) => {

    const themeClass = theme || `light`;

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-article">
         <SkeletonElement type="title"/>
         <SkeletonElement type="text"/>
         <SkeletonElement type="text"/>
         <SkeletonElement type="text"/>
        </div>
        <Shimmer />
    </div>
  )
}

export default SkeletonArticle