import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../../store/actions/auth';
import { Transition, animated } from 'react-spring/renderprops'

class Navbar extends Component{

    state = {
        toggle:false
    }

    onSearchHandler=(e)=>{
       
        if(e.key==="Enter"){
            this.props.history.push('/search/'+e.target.value)
        }
    }

    submitHandler=e=>{
        e.preventDefault()
    }

    logOutHandler = ()=>{
        this.props.onLogout()
        this.props.history.push("/")
    }

    toggleHandler = ()=>{
        this.setState({toggle:!this.state.toggle})
    }
    

    render(){
        return (
            <div className="navbar margin-bottom-xl">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__brand">
                        <i className="fa fa-bars" onClick={this.toggleHandler}></i>
                        <NavLink to="/"><span className="navbar__logo">terribbble</span></NavLink>
                    </div>
                    <Transition
                        native
                        items={this.state.toggle}
                        from={{ overflow: 'hidden', height: 0 }}
                        enter={[{ height: 'auto' }]}
                        leave={{ height: 0 }}>
                        {show =>
                            true && (props => 
                                <animated.div style={props}>
                                    <div className="navbar__toggle" style={{display: this.state.toggle ? "block":"none"}}>
                                        <div className="navbar__left">
                                            <li className="navbar__menu-item"><a href="#">Explore &nbsp;<i className="fa fa-chevron-down"></i></a></li>
                                            <li className="navbar__menu-item"><a href="#">For Designers  &nbsp;<i className="fa fa-chevron-down"></i></a></li>
                                            <li className="navbar__menu-item"><a href="#">Hiring Designers?  &nbsp;<i className="fa fa-chevron-down"></i></a></li>
                                        </div>
                                        <div className="navbar__right">
                                            <ul className="navbar__menu">
                                                <li className="navbar__menu-item">
                                                    <form action="" className="form" onSubmit={this.submitHandler}>
                                                        <div className="form__group">
                                                            <i className="fa fa-search"></i>
                                                            <input id="search" type="text" className="form__input" onKeyDown={this.onSearchHandler}/>
                                                        </div>
                                                    </form>
                                                </li>
                                                {this.props.name && 
                                                <li className="navbar__menu-item">
                                                    <div className="navbar__user">
                                                        { this.props.authData.profileImageUrl ?
                                                        <img src={this.props.authData.profileImageUrl} alt="" /> :
                                                        <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" />}
                                                        <div className="action__container">
                                                            <ul className="action__items">
                                                                <li className="action__item user__name"><NavLink to={"/user/"+this.props.authData.userId}>{this.props.authData.name}</NavLink></li>
                                                                <span></span>
                                                                <li className="action__item"><NavLink to="/user/account/profile">Edit Profile</NavLink></li>
                                                                <li className="action__item"><NavLink to="/">Edit Work Availability</NavLink></li>
                                                                <span></span>
                                                                <li className="action__item"><NavLink to={"/user/"+this.props.authData.userId+"/liked-shots"}><i className="fa fa-heart"></i> My Likes</NavLink></li>
                                                                <li className="action__item"><NavLink to={"/user/"+this.props.authData.userId}><i className="fa fa-folder"></i> My Shots</NavLink></li>
                                                                <span></span>
                                                                <li className="action__item" onClick={this.logOutHandler}><a><i className="fa fa-power-off"></i> Logout</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>}
                                                <li className="navbar__menu-item">
                                                    {!this.props.name && <>
                                                        <NavLink to="/auth/sign-in" >
                                                            <button className="btn btn-default">Sign in</button>
                                                        </NavLink>
                                                        <NavLink to="/auth/sign-up" >
                                                            <button className="btn btn-primary">Sign Up</button>
                                                        </NavLink>
                                                    </>}
                                                    {this.props.name && <NavLink to="/shots/new" >
                                                        <button className="btn btn-primary">Upload</button>
                                                    </NavLink>}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </animated.div>)
                        }
                    </Transition>
                </div>
            </div>
        </div>
        )
    }
};

const mapStateToProps = state=>{
    return {
        name: state.authState.name,
        authData:state.authState
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onLogout: ()=>{dispatch(logout())}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));