import React, { Component } from 'react'
import data from "../../data";
import "./DealCardViewPort.css";
import DealCardStyled from '../DealCard/DealCard';

class DealCardViewPort extends Component {
  render() {
    return (
      <div className="deal_card_viewport">
              {
        data["deals-card-images"].map(element=>{
        return <DealCardStyled image={element.image} message={element.message}/>
        })
      }
        
      </div>
    )
  }
}

export default DealCardViewPort;
