import React from 'react';
import classes from './Question.module.css';
import UserRating from '../../../UserRating/UserRating';
import Link from '../../../Link/Link';

const numFormatter = (num) => {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; 
    }else {
        return num; 
    }
}

const formatTitle = (title) => {
    if(title.length >= 38) {
        return title.substring(0, 27) + "...";
    } else {
        return title;
    }
}

const Question = (props) => {
    return (
        <>
        <div className={classes.ViewContainer}>
            { numFormatter(props.views) }
            <span>views</span>
        </div>
        <h5><a href={props.link}>{ formatTitle(props.title) }</a></h5>
        <p className={classes.SubBar}>
            <span className={classes.Date}>
                {props.date}
            </span>
            <span className={classes.Time}>
                {props.time}
            </span>
            <UserRating rating={props.userrating.toFixed(0)}/>
            <Link href={"https://www.codechef.com/users/" + props.username} fontSize="12px" fontStyle="italic">
                {props.username}
            </Link>
            <a rel="noreferrer" href={props.link} className={classes.Button} target="_blank">View</a>
        </p>
        </>
    );
}

export default Question;