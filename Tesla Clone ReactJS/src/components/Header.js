import React, { useState } from "react";
import styled from "styled-components";
import { Close } from "@mui/icons-material";
import { selectCars } from '../features/car/carSlice';
import { useSelector} from 'react-redux';


function Header() {

  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
        <span>
      <a href="">
        <img src="/tesla-clone/images/logo.svg" alt="" />
      </a>
      </span>
      <Menu>
        {cars && cars.map((car, index)=>(
          <Hover>
          <a key = {index} href="#">{car}</a>
        </Hover>
        ))}
        
        <Hover>
          <a href="#">Solar Roofs</a>
        </Hover>
        <Hover>
          <a href="#">Solar Panels</a>
        </Hover>
      </Menu>

      <RightMenu>
        <RightHover>
          <a href="#">Shop</a>
        </RightHover>
        <RightHover>
          <a href="#">Account</a>
        </RightHover>
        <Button onClick = {()=> setOpen(true)}>
          <a href="#">Menu</a>
        </Button>
      </RightMenu>

      <BurgerNav show = { open }>
        
        <CloseWrap>
        <CustomClose onClick = {()=> setOpen(false)}/>
        </CloseWrap>
        <BurgerMenu>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        </BurgerMenu>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>

        <BurgerMenu>
        <li>
          <a href="#">Shop</a>
        </li>

        <li>
          <a href="#">Account</a>
        </li>
        </BurgerMenu>
        

      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 54px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  span{
      margin-right:50px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  

  a {
    text-decoration: none;
    font-weight: 600;
    flex-wrap: nowrap;
    cursor: pointer;
    font-size: 15px;
  }

@media (max-width: 1200px){
  display: none;
}
`;

const Hover = styled.div`
  padding: 5px 12px;
  transition: background-color 0.33s ease-in;
  border-radius: 10px;
  :hover {
    background-color: hsla(0, 0%, 0%, 0.1);
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: 600;
    flex-wrap: nowrap;
    cursor: pointer;
    font-size: 15px;
  }

`;

const RightHover = styled.div`
padding: 5px 12px;
transition: background-color 0.33s ease-in;
border-radius: 10px;

:hover {
  background-color: hsla(0, 0%, 0%, 0.1);
}

@media (max-width: 1200px){
  display: none;
}
`;

const Button = styled.div`
padding: 5px 12px;
transition: background-color 0.33s ease-in;
border-radius: 10px;
backdrop-filter: blur(16px);

:hover {
  background-color: hsla(0, 0%, 0%, 0.1);
}

@media (max-width: 1200px){
  background-color: hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
}

`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;

  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;

  li{
    padding: 8px 0;
  }

  a{
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
  }
`;

const BurgerMenu = styled.div`
@media (min-width:1200px){
  display:none;
}
`;

const CustomClose = styled(Close)`
  cursor: pointer;
`;

const CloseWrap = styled.div`
  display:flex;
  justify-content: flex-end;
`;

