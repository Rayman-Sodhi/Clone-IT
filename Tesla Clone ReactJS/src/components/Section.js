import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { ExpandMore } from "@mui/icons-material";

function Section({ title, backgroundImg, des, leftButton, rightButton, isFirst}) {
  return (
  <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <HeaderText>
          <h1>{title}</h1>
          <p>{des}</p>
      </HeaderText>
      </Fade>
      <Button>
        <ButtonGroup>
            <Fade left>
            <LeftButton>
                {leftButton}
            </LeftButton>
            </Fade>


            { rightButton && <Fade right><RightButton>
                {rightButton}
            </RightButton>
            </Fade>}
            
        </ButtonGroup>
        <Fade bottom>
        {isFirst && <DownArrow src="/tesla-clone/images/down-arrow.png"/>}
        </Fade>
      </Button>
  </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url("/tesla-clone/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
    text-align: center;
    padding-top: 13vh;
`
const Button = styled.div``

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 10vh;
    @media (max-width:768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 300px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 20px;
`

const RightButton = styled(LeftButton)` 
    background: white;
    opacity: 0.7;
    color: black;
`

const DownArrow = styled.img`
    height: 30px; 
    margin-bottom: 70px; 
    overflow-x: hidden;
    animation: animationDown infinite 1.5s;
`