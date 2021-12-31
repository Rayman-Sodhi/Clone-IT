import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchShots } from '../../store/actions/shots';
import Subfilter from './Subfilter';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { Transition, animated } from 'react-spring/renderprops'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


class Filter extends Component {

    state={
        id:'all',
        link:"/following/",
        showFilter:false
    }

    componentDidMount(){

        if(this.props.location.pathname.includes('following')){
            this.setState({link:"/following/"})
        }

        if(this.props.location.pathname.includes('search')){
            this.setState({link:"/search/"})
        }
    }

    componentDidUpdate(prevProps,prevState){

        if(prevProps.location.pathname == this.props.location.pathname){
            return;
        } else {
            this.props.onChangeFilter(this.props.location.pathname.split('/')[2],this.props.match.path);
        }

    }

    showFilter= ()=>{
        this.setState({showFilter:!this.state.showFilter})
    }

    

    render() {

        let filterContent= <Transition
            native
            items={this.state.showFilter}
            from={{ overflow: 'hidden', height: 0 }}
            enter={[{ height: 'auto' }]}
            leave={{ height: 0 }}>
            {show =>
            show && (props => <animated.div style={props}><Subfilter in={this.state.showFilter}></Subfilter></animated.div>)
            }
        </Transition>
        
        
        
        

        return (
            <div className="container">
                <section className="filter__subnav margin-top-lg">
                    <div className="row">
                        <div className="filter__container">
                            <div>
                                <div className="filter__views">
                                    <button className="btn btn-default">
                                        Following <i className="fa fa-chevron-down"></i>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className="filter__categories">
                                    <ul className="category-lists swiper-lists">
                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        navigation
                                        pagination={{ clickable: true }}
                                        
                                        >
                                        <SwiperSlide>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"all"}
                                            activeClassName="activeFilter"
                                            className={this.props.location.pathname==='/'? 'activeFilter':' '}
                                            >All</NavLink>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"animation"} activeClassName="activeFilter">Animation</NavLink>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"branding"} activeClassName="activeFilter">Branding</NavLink>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li className='category' >
                                            <NavLink to={this.state.link+"illustration"} activeClassName="activeFilter">Illustration</NavLink>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"mobile"} activeClassName="activeFilter">Mobile</NavLink>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"print"} activeClassName="activeFilter">Print</NavLink>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li className='category' >
                                            <NavLink to={this.state.link+"typography"} activeClassName="activeFilter">Typography</NavLink>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"web-design"} activeClassName="activeFilter">Web</NavLink>
                                        </li>
                                        </SwiperSlide>
                                        </Swiper>
                                        <div className="swiper-pagination"></div>
                                    </ul>

                                    <ul className="category-lists normal-lists">
                                        <li className='category'>
                                            <NavLink to={this.state.link+"all"}
                                            activeClassName="activeFilter"
                                            className={this.props.location.pathname==='/'? 'activeFilter':' '}
                                            >All</NavLink>
                                        </li>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"animation"} activeClassName="activeFilter">Animation</NavLink>
                                        </li>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"branding"} activeClassName="activeFilter">Branding</NavLink>
                                        </li>
                                        <li className='category' >
                                            <NavLink to={this.state.link+"illustration"} activeClassName="activeFilter">Illustration</NavLink>
                                        </li>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"mobile"} activeClassName="activeFilter">Mobile</NavLink>
                                        </li>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"print"} activeClassName="activeFilter">Print</NavLink>
                                        </li>
                                        <li className='category' >
                                            <NavLink to={this.state.link+"typography"} activeClassName="activeFilter">Typography</NavLink>
                                        </li>
                                        <li className='category'>
                                            <NavLink to={this.state.link+"web-design"} activeClassName="activeFilter">Web</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="filter__settings">
                                    <button className="btn btn-default" onClick={this.showFilter}>
                                    {this.state.showFilter ? <i className="fa fa-arrow-up"></i> : <i className="fa fa-arrow-down"></i>} Filters
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {filterContent}
                </section>
                
            </div>
        )
    }
};

const mapDispatchToProps = dispatch=>{
    return {
        onChangeFilter: (filter,pthname)=>{dispatch(fetchShots(filter, pthname))}
    }
}

export default connect(null, mapDispatchToProps)(Filter);
