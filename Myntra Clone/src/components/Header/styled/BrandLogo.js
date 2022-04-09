import React, { Component } from 'react';
import styled from 'styled-components';
import myntralogo from '../../../myntraSprite.png';

const BrandLogoComponent = ({ className, children }) => (
    <header className={className}>
      {children}
    </header>
  );
const BrandLogo = styled(BrandLogoComponent)`
background: url('${myntralogo}') -290px -61px;
width: 51px;
height: 36px;
`

export default BrandLogo