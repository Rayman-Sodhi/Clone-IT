import React , {useState } from 'react'
import './Login.css'
  import { Link ,useNavigate} from 'react-router-dom';
  import { auth } from "./firebase"

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  
    const SignIn = e => {
        e.preventDefault();
 
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e=>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))

    }
    return (
    <div className="Login">
      <Link to='/'>
                <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
            </Link>

            <div className='login_container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}  />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={SignIn} className='login_signin_button'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon clone's Conditions of Use and Privacy Notice.
                </p>

                <button className='login_register_button' onClick={register}>Create your Amazon account</button>

            </div>
    </div>
  )
}

export default Login