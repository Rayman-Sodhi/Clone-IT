import React from 'react'
import { useState } from 'react';
import './Auth.css'
import firebase from '../../server/firebase'
import {Grid,Form,Segment,Icon,Header,Button,Message} from 'semantic-ui-react';
import {Link} from "react-router-dom"
import sidelogo from '../../images/sidelogo.png'
import logo from '../../images/slack.png'


 const Login = () => {

    let user={
        email:"",
        password:"",
      
      };
    let errors=[]
    
    const [User, setUser] = useState(user)
    const [isSuccess,SetSuccess] = useState(false)
    const [Error, setError] = useState(errors)
    const [isLoading,SetLoading] = useState(false)



    const mystyle={
        maxWidth:"500px",
       alignItems: "center",
       justifyContent:"center",
       marginTop:"100px"
      }
    
    const handleInput = (event) =>{
        let target=event.target
        setUser((currentState)=>{
          let currentuser={...currentState}
          currentuser[target.name]=target.value
          return currentuser
        })
      }
      const onSubmitHandler=(event)=>{
        event.preventDefault();
        SetSuccess(false);
        setError(()=>[])
        if(checkform()){
          SetLoading(true)
          firebase.auth().signInWithEmailAndPassword(User.email, User.password)
                   .then(user=>{
                       SetLoading(false)
                    console.log(user);
                   })
                   .catch(servererr=>{
                        SetLoading(false)
                     setError((error)=>error.concat(servererr))})
        }
    
      }
      const checkform=()=>{
        if(isFormEmpty())
        {
          setError((error)=>error.concat({message:"Please fill in all the fields"}))
          return false
        }
    
        return true
      }
      const isFormEmpty=()=>{
        return !User.password.length||!User.email.length
      }
      const formaterrors=()=>{
        return  Error.map((err,index)=><p key={index}>{err.message}</p>)
        }
    return (
        <div >
        <Grid verticalalign="left" textAlign="center" className="register" >
        <Grid.Column style={mystyle}>
            <Header icon as ="h2">
                {/* <Icon name="slack"/>  */}
                <img src={logo} style={{height:"30px",width:"30px"}}/>
                Login
            </Header>
            <Form onSubmit={onSubmitHandler}>
                <Segment stacked>
                    
                    <Form.Input
                        name="email"
                        value={User.email}
                        icon="mail"
                        iconPosition="left"
                        onChange={handleInput}
                        type="email"
                        placeholder="UserEmail"
                    />
                    <Form.Input
                        name="password"
                        value={User.password}
                        icon="lock"
                        iconPosition="left"
                        onChange={handleInput}
                        type="password"
                        placeholder="Password"
                    />
                    
                </Segment>
                    <Button disabled={isLoading} loading={isLoading} style={{backgroundColor:"#611f69",color:"white"}}>
                        <Icon name=" sign-in"/>
                        Login</Button>
            </Form>
            {Error.length>0 && 
            <Message error>
                <h3>Errors</h3>
                {formaterrors()}
            </Message>}
            
            <Message>
            Dont have a account? <Link to="/register" >Register</Link>
            </Message>

        <img src={sidelogo} className='logo'/>

        </Grid.Column>

    </Grid>


    </div>
    )
}
export default Login