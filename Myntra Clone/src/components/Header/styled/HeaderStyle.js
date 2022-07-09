import React, { Component } from 'react';
import styled from 'styled-components'

const Headercomp = ({ className, children }) => (
    <header className={className}>
      {children}
    </header>
  );
const HeaderStyled = styled(Headercomp)`
background: transparent;
display:flex;
justify-content:space-between;
align-items:center;
padding: 1.5em 
box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
max-width:100%;


`

export default HeaderStyled