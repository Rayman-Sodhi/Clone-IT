import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {signUp} from '../../store/actions/auth';

class SignUp extends Component {

    state = {
        name:'',
        username:'',
        email:''
    }

    onChangeHandler = (e)=>{

        let updatedState = {...this.state}
        let value=e.target.value

        updatedState[e.target.id]=value


        this.setState({
            ...this.state,
            ...updatedState
        })
    }

    onSubmitHandler = (e)=>{
        e.preventDefault()
        this.props.onSignUp(this.state)
    }
    
    
    render(){

        return (
            <div className="signup__form">
                    <div className="signup__form-left">
                        <div className="logo margin-bottom-sm"><Link to="/">terribbble</Link></div>
                        <h1>Discover the world's top Designers & Creatives.</h1>
                    </div>
                    <div className="signup__form-right">
                        <h2 className="form__logo"><Link to="/">terribbble</Link></h2>
                        <div className="form__content">
                            <div className="signup__link">Already a member? <Link to="/auth/sign-in">Sign in</Link></div>
                            <div className="row">
                                <h2 className="heading">Sign up to Terribbble</h2>
                                <form className="form margin-top-md" onSubmit={this.onSubmitHandler}>
                                    <div className="row">
                                        <div className="col-1-of-2">
                                            <div className="form__group">
                                                <label htmlFor="name" className="form__label">Name</label>
                                                <input id="name" type="text" className="form__input " required onChange={this.onChangeHandler}/>
                                            </div>
                                        </div>
    
                                        <div className="col-1-of-2">
                                            <div className="form__group">
                                                <label htmlFor="username" className="form__label">Username</label>
                                                <input id="username" type="text" className="form__input " required onChange={this.onChangeHandler}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form__group">
                                            <label htmlFor="email" className="form__label">Your e-mail</label>
                                            <input id="email" type="email" className="form__input " placeholder="name@domain.com"  required onChange={this.onChangeHandler}/>
                                        </div>
                                    </div>
    
                                    <div className="row">
                                        <div className="form__group">
                                            <label htmlFor="password" className="form__label">Password</label>
                                            <input id="password" type="password" className="form__input " placeholder="at least 6 characters"  required onChange={this.onChangeHandler}/>
                                        </div>
                                    </div>
                                        
                                    <div className="row">
                                    {this.props.loading? <button className="btn btn-primary" disabled>Please wait...</button>:<button className="btn btn-primary">Signup</button>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
};

const mapStateToProps = state=>{
    return {
        loading: state.authState.loading
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onSignUp: (data)=>{dispatch(signUp(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
