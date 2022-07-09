import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './StartSection.module.css';
import Button from '../Button/Button';

const StartSection = props => {
    return (
        <Row className = {classes.StartSection}>
            <Col xs={7} className={classes.StartHereSection}>
                <span><strong>New to Programming</strong> and don't know where to start? </span>
                <a href='https://www.codechef.com/getting-started'>
                    <Button style={{backgroundColor: '#4A90E2', color: 'white'}}> 
                    Start Here </Button>
                </a>
            </Col>
            <Col className={classes.StartHereSection}>
                <span>Follow Us</span>
                <div className={classes.SocialIcons}>
                    <a className={classes.Youtube} href='https://www.youtube.com/channel/UCmk2YHXZQk_3GsLKBqsZoBQ' >{''}</a>
                    <a className={classes.Telegram} href='https://t.me/learncpwithcodechef' >{''}</a>
                    <a className={classes.Facebook} href='https://www.facebook.com/CodeChef' >{''}</a>
                    <a className={classes.Instagram} href='https://instagram.com/codechef' >{''}</a>
                    <a className={classes.Twitter} href='https://twitter.com/codechef' >{''}</a>
                    <a className={classes.Medium} href='https://medium.com/codechef-official' >{''}</a>
                    <a className={classes.Quora} href='https://quora.com/topic/CodeChef' >{''}</a>
                    <a className={classes.LinkedIn} href='https://www.linkedin.com/company/codechef/' >{''}</a>
                </div>
            </Col>
        </Row>
    )
}

export default StartSection;