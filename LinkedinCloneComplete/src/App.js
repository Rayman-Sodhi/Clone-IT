import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { auth } from './firebase';
import { login, logout, selectUser } from "./features/userSlice";
import Feed from './Feed';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from "./Widgets";
import Header from "./Header";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
      auth.onAuthStateChanged(userAuth => {
        if (userAuth) {
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
            //user is logged in
        }))
      } else {
          //user is logged out
          dispatch(logout());
        }
      })
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      {!user ? (
         <Login />
        ) : (
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
  )}
    </div>
  );
}

export default App;
