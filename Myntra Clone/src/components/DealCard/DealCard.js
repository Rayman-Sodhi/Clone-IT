import React from 'react'
import styled from 'styled-components'


function DealCard(props) {
  return (
    <div className={props.className}>
    <img width="100%" src={props.image}></img>
    <div className="card_text">

    <h6>HOT DEALS</h6>
    <h4>{props.message}  </h4>
    <p>+ Shop Now</p>
    
    
     </div>
    

      
    </div>
  )
}




const DealCardStyled = styled(DealCard)`
position:relative;
max-width:290px;
min-width:290px;
max-height:220px;
margin-top:50px;


.card_text {
    position:absolute;
    top:0;
    bottom:0;
    color:white;
    padding:20px 20px;

    
    
}
.card_text h6{
    text-decoration:underline;
    margin-bottom:20px;
 
}

.card_text h4{
    margin-bottom:20px;

}

::before{
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
}
`

export default DealCardStyled
