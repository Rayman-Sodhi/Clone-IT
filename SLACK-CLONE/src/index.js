import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from './components/Auth/Login'
import firebase from "./server/firebase";
import "semantic-ui-css/semantic.min.css"
import { Provider ,connect } from 'react-redux';
import { createStore } from 'redux';
import { combinedReducers } from './store/reducer';
import {setUser} from './store/actioncreator'

const store=createStore(combinedReducers)
const Index = (props) => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user)
        props.history.push("/");
      } else {
        props.setUser(null)
        props.history.push("/login");
      }
    })
  }, []);

  console.log(props.currentUser)

  return (<>
  {/* <AppLoader loading={props.loading && props.location.pathname === "/"} /> */}
  
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={App} />
    </Switch></>)
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    // loading: state.channel.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => { dispatch(setUser(user)) }
  }
}

const IndexWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
        <IndexWithRouter />
      </Router>
    
    </Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);
