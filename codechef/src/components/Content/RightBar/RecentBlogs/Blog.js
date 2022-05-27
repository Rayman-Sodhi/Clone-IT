import React from 'react';
import classes from './RecentBlogs.module.css';
import Link from '../../../Link/Link';

const Blog = (props) => {

    return (
        <div className={classes.Blog}>
            <div className= {classes.Date}>
                <p>
                    {props.day}
                </p>
                <p>
                    {props.month}
                </p>
            </div>
            <div className={classes.BlogTitle}>
                <Link link={props.link} fontSize="12px" fontStyle="italic" margin="0">
                    <p style={{fontSize: "12px"}}>
                            {props.title}
                    </p>
                </Link>
            </div>
        </div>
    )
    
}

export default Blog;