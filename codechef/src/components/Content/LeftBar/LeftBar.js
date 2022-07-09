import React from 'react';
import classes from './LeftBar.module.css';
import UpcomingContest from './UpcomingContent/UpcomingContest';
import SearchProblems from './SearchProblems/SeachProblems';
import GoForGold from './GoForGold/GoForGold';

const LeftBar = () => {
    return (
        <div className={classes.LeftBar}>
            <UpcomingContest />
            <SearchProblems />
            <GoForGold />
        </div>
    )
}

export default LeftBar;