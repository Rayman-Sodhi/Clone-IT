import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Homepage.module.css';
import Carousel from '../Carousel/Carousel';
import StartSection from '../StartSection/StartSection';
import Content from '../Content/Content';

function Homepage() {
    return (
        <Container className={classes.Homepage}>
            <Carousel />
            <StartSection />
            <Content />
        </Container>
    )
}

export default Homepage
