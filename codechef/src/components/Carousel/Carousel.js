import React, { Component } from 'react';
import classes from './Carousel.module.css';
import img1 from '../../assets/carouselImages/marchLunchtime.png'
import img2 from '../../assets/carouselImages/starters.png'
import img3 from '../../assets/carouselImages/WWC.png'
import img4 from '../../assets/carouselImages/topPerformers.PNG'
import SlideLeftIcon from '../../assets/carouselImages/icon-arrow-left.png';
import SlideRightIcon from '../../assets/carouselImages/icon-arrow-right.png';
import { VscCircleFilled } from 'react-icons/vsc';

// const images = [img1, img2, img3, img4];

// const slideImages = images.map(img => {
//     return <img key={img} src={img} className={classes.Img}/>
// });

// const slideImages = [
//     <img src={img1} className={classes.Img}/>,
//     <img src={img2} className={classes.Img}/>,
//     <img src={img3} className={classes.Img}/>,
//     <img src={img4} className={classes.Img}/>
// ];

class Carousel extends Component {
    state = {
        selectedSlide: 0,
    }

    componentDidUpdate() {
        this.curTimeout = setTimeout(() => this.setState(prevState => { return {selectedSlide: (prevState.selectedSlide + 1) % 4}}), 3000);
    }

    componentDidMount() {
        
        this.curTimeout = setTimeout(() => this.setState(prevState => { return {selectedSlide: (prevState.selectedSlide + 1) % 4}}), 3000);
    }

    nextSlide = () => {
        let nextSlide = (this.state.selectedSlide + 1) % 4;
        clearTimeout(this.curTimeout);
        this.setState({selectedSlide: nextSlide});
    }

    prevSlide = () => {
        let prevSlide = (this.state.selectedSlide - 1) % 4;
        if(prevSlide === -1) prevSlide += 4;
        clearTimeout(this.curTimeout);
        this.setState({selectedSlide: prevSlide});
    }

    render() {
        let curIndex = this.state.selectedSlide;
        // let nextImgIndex = (this.state.selectedSlide + 1) % 4;
        // let prevImgIndex = this.state.selectedSlide ? (this.state.selectedSlide - 1) : 3;
        // slideImages[nextImgIndex] = <img style={{transform: 'translateX(100%)', display:'none'}} src={images[nextImgIndex]} className={classes.Img}/>
        // slideImages[prevImgIndex] = <img style={{transform: 'translateX(-100%)', display:'none'}} src={images[prevImgIndex]} className={classes.Img}/>
        // slideImages[this.state.selectedSlide] = <img style={{transform: 'translateX(0)'}} src={images[this.state.selectedSlide]} className={classes.Img}/>
        return (
            <>
                {/* <div className={classes.Wrap}></div> */}
                <div className={classes.ImgSliderContainer}>
                    <img src={img1} alt="img1" className={classes.Img + " " + (curIndex === 0 ? classes.CurSlide : (curIndex === 1 ? classes.PrevSlide : classes.NextSlide))}/>
                    <img src={img2} alt="img2" className={classes.Img + " " + (curIndex === 1 ? classes.CurSlide : (curIndex === 2 ? classes.PrevSlide : classes.NextSlide))}/>
                    <img src={img3} alt="img3" className={classes.Img + " " + (curIndex === 2 ? classes.CurSlide : (curIndex === 3 ? classes.PrevSlide : classes.NextSlide))}/>
                    <img src={img4} alt="img4" className={classes.Img + " " + (curIndex === 3 ? classes.CurSlide : (curIndex === 0 ? classes.PrevSlide : classes.NextSlide))}/>
                    
                </div>

                <div className={classes.SliderControls}>
                    <img onClick={this.prevSlide}  alt="Prev" src={SlideLeftIcon} /> 
                    <span className={this.state.selectedSlide === 0 ? classes.Active : null}>March Lunchtime</span>
                    <VscCircleFilled className={classes.Disc}/>
                    <span className={this.state.selectedSlide === 1 ? classes.Active : null}>March Starters</span>
                    <VscCircleFilled className={classes.Disc}/>
                    <span className={this.state.selectedSlide === 2 ? classes.Active : null}>Weekend With Champions</span>
                    <VscCircleFilled className={classes.Disc}/>
                    <span className={this.state.selectedSlide === 3 ? classes.Active : null}>Top Performers</span>
                    <img onClick={this.nextSlide} alt="Next" src={SlideRightIcon} />
                </div>
                
            </>
        )
    }

}

export default Carousel;