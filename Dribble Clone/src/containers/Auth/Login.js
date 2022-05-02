import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/auth';

class Login extends Component {
    state={
        email:'',
        password:''
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
        this.props.onSignIn(this.state)
    }
    

    render() {
        return (
            <div className="login__form">
                {this.props.error ? 
                <div className="error_div">
                    <p>There is no user record corresponding to this identifier. The user may have been deleted</p>
                </div> : null }
                <div className="login__form-left">
                    <div className="logo margin-bottom-sm"><Link to="/">terribbble</Link></div>
                    <h1>Discover the world's top Designers & Creatives.</h1>
                </div>
                <div className="login__form-right">
                    <h2 className="form__logo"><Link to="/">terribbble</Link></h2>
                    <div className="form__content">
                        <div className="signup__link">Not a member? <Link to="/auth/sign-up">Sign up now</Link></div>
                        <div className="row">
                            <h2 className="heading">Sign in to Terribbble</h2>
                            <form className="form margin-top-md" onSubmit={this.onSubmitHandler}>
                                <div className="form__group margin-bottom-md">
                                    <label htmlFor="email" className="form__label">Your e-mail</label>
                                    <input id="email" type="email" className="form__input " placeholder="name@domain.com"  required  onChange={this.onChangeHandler}/>
                                </div>
                                <div className="form__group margin-bottom-md">
                                    <label htmlFor="password" className="form__label">Password</label>
                                    <input id="password" type="password" className="form__input " placeholder="at least 6 characters"  required onChange={this.onChangeHandler}/>
                                </div>
                                <div className="row">
                                    {this.props.loading? <button className="btn btn-primary" disabled>Please wait...</button>:<button className="btn btn-primary">Login</button>}
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
        loading: state.authState.loading,
        error: state.authState.error
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onSignIn: (data)=>{dispatch(signIn(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
