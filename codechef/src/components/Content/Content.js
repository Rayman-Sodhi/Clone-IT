import React from 'react';
import classes from './Content.module.css';
import LeftBar from './LeftBar/LeftBar';
import MidBar from './MidBar/MidBar';
import RightBar from './RightBar/RightBar';

const Content = () => {
    return (
        <div className = {classes.Content}>
            <LeftBar />

            <MidBar />

            <RightBar />
        </div>
    )
};

export default Content;