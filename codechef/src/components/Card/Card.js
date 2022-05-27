import React from 'react';
import classes from './Card.module.css';

const Card = (props) =>{

    let attachedClasses = [classes.Card];
    if(props.className) {
        attachedClasses.push(props.className);
    }

    return (
        <div className={attachedClasses.join(' ')}> 
            
            { props.title ? <h5 className={classes.TitleText}>{props.title}</h5> : null }
            { props.title ? <div className={classes.Divider}></div> : null }
            {props.children}
        </div>
    )
}

export default Card;
