import React, { Component } from 'react';
import Card from '../../../Card/Card';
import classes from './UpcomingContest.module.css';
import Link from '../../../Link/Link';


class UpcomingContest extends Component {

    state = {
        days: 1,
        hrs: 13,
        min: 4,
        sec: 24
    }

    changeTime = () => {
        let newSec = this.state.sec - 1;
        if (newSec === -1) {
            newSec = 59;
            let newMin = this.state.min - 1;
            if (newMin === -1) {
                newMin = 59;
                let newHr = this.state.hrs - 1;
                if (newHr === -1) {
                    newHr = 23;
                    let newDay = this.state.days - 1;
                    this.setState({days: newDay, hrs: newHr, min: newMin, sec: newSec});
                } else {
                    this.setState({hrs: newHr, min: newMin, sec: newSec});
                }
            } else {
                this.setState({min: newMin, sec: newSec});
            }
        } else {
            this.setState({sec: newSec});
        }
    }

    componentDidUpdate = () => {
        setTimeout(() => this.changeTime(), 1000);
    }

    componentDidMount = () => {
        this.changeTime();
    }

    render() {
        
        return (
            <Card title="Upcoming Coding Competition" className={classes.UpcomingContest}>
    
                <div className={classes.Divider}></div>

                <Link href="https://www.codechef.com/LTIME94">
                    March Lunchtime 2021
                </Link>
    
                <div className={classes.Timer}>
    
                    <div className={classes.Val}>
                        <div className={classes.NumBox}>{this.state.days}</div>
                        <span className={classes.TextContainer}>Days</span>
                    </div>
    
                    <div className={classes.Val}>
                        <div className={classes.NumBox}>{this.state.hrs}</div>
                        <span className={classes.TextContainer}>Hrs</span>
                    </div>
    
                    <div className={classes.Val}>
                        <div className={classes.NumBox}>{this.state.min}</div>
                        <span className={classes.TextContainer}>Min</span>
                    </div>
    
                    <div className={classes.Val}>
                        <div className={classes.NumBox}>{this.state.sec}</div>
                        <span className={classes.TextContainer}>Sec</span>
                    </div>
                    
                </div>
            </Card>
        );
    }
}

export default UpcomingContest;