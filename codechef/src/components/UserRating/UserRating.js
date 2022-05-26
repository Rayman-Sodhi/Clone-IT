import React from 'react';
import classes from './UserRating.module.css';

const UserRating = props => {

    let userRating = <span></span>;
    switch(props.rating) {
        case ('1'): 
            userRating = (<span className={classes.Rating} style={{backgroundColor: '#666666'}}>1★</span>); 
            break;
        case ('2'): 
            userRating = (<span className={classes.Rating} style={{backgroundColor: '#1e7d22'}}>2★</span>); 
            break;
        case ('3'): 
            userRating = (<span className={classes.Rating} style={{backgroundColor: '#3366cc'}}>3★</span>); 
            break;
        case ('4'): 
            userRating = (<span className={classes.Rating} style={{backgroundColor: '#684273'}}>4★</span>); 
            break;
        case ('5'): 
            userRating = (<span className={classes.Rating} style={{backgroundColor: '#ffbf00'}}>5★</span>); 
            break;
        case ('6'): 
            userRating = (<span className={classes.Rating} style={{backgroundColor: '#ff7f00'}}>6★</span>); 
            break;
        case ('7'): 
            userRating = (<span className={classes.Rating} style={{backgroundColor: '#d0011b'}}>7★</span>); 
            break;
        default: userRating = (<span></span>); break;
    }

    return userRating;
    
};

export default UserRating;