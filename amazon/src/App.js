import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Orders from './Orders';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import {auth} from "./firebase";
import Payment from './Payment'
import {useStateValue} from "./StateProvider";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Ky1AESDAZrvSbkl7SpvHBYlAad049fbhFdbCg3vaEzl0tSm5nwXPAkQmfwFv3sBJ44nyxADqAMSoUsAlQmKkjcH00DumGs1Mt'); 


function App() {

  const [{user},dispatch] = useStateValue();

  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('the use is === ',authUser);
      
        if(authUser){
             dispatch ({
               type: 'SET_USER',
               user:authUser
             })
        }else{
 
          dispatch({
            type:'SET_USER',
            user: null
          })
        }
      })
  },[])
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path="/" element={
    <>
    <Header/>
    <Home/>
    </>
    }  
    />
     <Route exact path="/login" element={
    <>
    <Login />
    </>
    }  
    />
    <Route exact path="/orders" element={
    <>
    <Orders />
    </>
    }  
    />
    <Route exact path="/payment" element={
    <>
    <Header />
    <Elements stripe={promise}>
         <Payment />
    </Elements>
    </>
    }  
    />
    <Route exact path="/checkout" element={<>
      <Header/>
      <Checkout/>
    </>}/>
    </Routes> 
   </div>
   </Router>
    //in react-route-dom v6 switch updated with routes
  );
}

export default App;
