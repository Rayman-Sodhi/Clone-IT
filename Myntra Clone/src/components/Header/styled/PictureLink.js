import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const pictureLinkComp = function (props) {
    return (
    
    
    <div>
       { console.log(arguments)}
    <div className={props.className}>
    <FontAwesomeIcon  icon={props.icon}/>
    </div>
  
    <a  href={props.link} className={props.className}>
    {props.link}
    </a>
  
    </div>
  );
} 
const PictureLink = styled(pictureLinkComp)`
text-decoration:none;
display:block;
color:#000;
text-align:center;
padding: 0 10px;

`

export default PictureLink