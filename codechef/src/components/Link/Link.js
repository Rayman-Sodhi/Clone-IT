import React from 'react';
import classes from './Link.module.css';

const Link = (props) => {

    const styles = {
        fontSize: props.fontSize,
        margin: props.margin,
        fontStyle: props.fontStyle,
    }

    return (
        <a className = {classes.Link} href={props.link} style={styles}>

            {props.children}
        </a>
    )
}

export default Link;

