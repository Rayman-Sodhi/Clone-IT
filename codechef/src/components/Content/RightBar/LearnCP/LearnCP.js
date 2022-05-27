import React from 'react';
import classes from './LearnCP.module.css';
import Card from '../../../Card/Card';
import YoutubePlayer from '../../../YoutubePlayer/YoutubePlayer';

const LearnCP = () => {
    return (
        <Card>
            <YoutubePlayer videoId="p29xWjHKZhE" height="78%" width="90%" />
            <h5 className={classes.Heading}>
                Learn Competitive Programming<span className={classes.Sup}>New!</span>
            </h5>
            
        </Card>
    )
}

export default LearnCP;

