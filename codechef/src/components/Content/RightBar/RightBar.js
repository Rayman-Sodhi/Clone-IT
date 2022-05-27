import React from 'react';
import classes from './RightBar.module.css';
import LearnCP from './LearnCP/LearnCP';
import RecentBlogs from './RecentBlogs/RecentBlogs';

const RightBar = () => {
    return (
        <div className={classes.RightBar}>
            <LearnCP />
            <RecentBlogs />
        </div>
    )
}

export default RightBar;