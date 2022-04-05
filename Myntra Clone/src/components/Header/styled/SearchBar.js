import React, { Component } from 'react';
import styled from 'styled-components'

const searchBarComp = ({ className, children }) => (
 

    
    <input type="text"  className={className} placeholder="Search for products, brands and more" />
 
   
    
  );
const SearchBar = styled(searchBarComp)`
margin-right: 50px;
padding:10px 10px;
max-width:100%;

line-height:24px;
outline:0;
border: 1px solid #F5F5F6;

background-color:#F5F5F6

:focus{
    border:none;
}
`

export default SearchBar