import React from 'react';
import classes from './MidBar.module.css';
import Announcements from './Announcements/Announcements';
import RecentQuestions from './RecentQuestions/RecentQuestions';

const MidBar = () => {
    return (
        <div className={classes.MidBar}>
            <Announcements />
            <RecentQuestions />
        </div>
    )
}

export default MidBar;
