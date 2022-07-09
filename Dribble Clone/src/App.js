import React, {Component, Suspense} from 'react';
import './css/main.css';
import Navbar from './components/Navbar/Navbar';
import ShotLists from './containers/ShotLists/ShotLists';
import Filter from './containers/Filters/Filter';
import { Route, Redirect } from 'react-router-dom';
import NewShots from './containers/NewShots/NewShots';
import Switch from 'react-bootstrap/esm/Switch';
import Popup from './components/Popup/Popup';
import {connect} from 'react-redux';
import {authCheckState} from './store/actions/auth'
import {withRouter} from 'react-router-dom';
import Profile from './containers/ProfilePage/ProfilePage';
import Search from './containers/Search/Search';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';
const EditProfile = React.lazy(() => import('./containers/EditProfile/EditProfile'));
const Login = React.lazy(() => import('./containers/Auth/Login'));
const SignUp = React.lazy(() => import('./containers/Auth/SignUp'));

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoLogin()
  }
  
  render(){
    let redirect = null

    if(this.props.location.pathname.includes('/auth/') && this.props.token){
      redirect = <Redirect to ='/' />
    } else {
      redirect = <Redirect to ={this.props.location.pathname} />
    }

    if(this.props.location.pathname.includes('/shots/new') && !this.props.token){
      redirect = <Redirect to ='/' />
    }

    let routes=(
      <>
        <Switch>
          {this.props.location.pathname.includes('/auth/') ? null:<Navbar />}
          <Route path="/" exact component={Filter}/>

          <Route path="/user/:uid" component={Profile}/>
          <Route path="/user/:filter" exact component={ShotLists}/>
          <Route path="/user/:filter/liked-shots" exact component={ShotLists}/>
          {this.props.isLoggedIn ? null: <><Route path="/auth/sign-in" exact render={()=><Suspense fallback={<Spinner/>}><Login/></Suspense>}/><Route path="/auth/sign-up" exact component={SignUp}/></>}

          <Route path="/shots/shot-details/:id/:uid" exact component={Popup}/>
          {/* <Route path="/following/" component={Filter}/> */}

          <Route path="/search/:filter" component={Search}/>
          <Route path="/search/:filter" component={Filter}/>
          <Route path="/search/:filter" component={ShotLists}/>

          {/* <Route path="/shots/shot-details/:id" exact component={ShotLists}/> */}
          <Route path="/following/:filter" exact component={Filter}/>
          <Route path="/following/:filter" exact component={ShotLists}/>
          <Route path="/account/profile" exact component={EditProfile}/>
          <Route path="/" exact component={ShotLists}/>
          {redirect}
        </Switch>
        <Route path="/" exact component={Footer}/>
        <Route path="/user/" component={Footer}/>
        <Route path="/search/" component={Footer}/>
        <Route path="/following/:filter" component={Footer}/>
      </>
    )

    if(this.props.token){
      routes=(
        <>
          <Switch>
            <Navbar />
              <Route path="/" exact component={Filter}/>
              <Route path="/following/" component={Filter}/>
            
            <Route path="/user/account/profile" component={EditProfile}/>
            {/* <Route path="/user/account/profile" component={Profile}/> */}
            <Route path="/user/:uid" component={Profile}/>
            <Route path="/user/:filter" exact component={ShotLists}/>
            <Route path="/user/:filter/liked-shots" exact component={ShotLists}/>
            
            <Route path="/shots/new" exact component={NewShots}/>

            <Route path="/shots/edit/:shotid" exact component={NewShots}/>

            <Route path="/search/:filter" component={Search}/>
            {/* <Route path="/search/:filter" component={Filter}/> */}
            <Route path="/search/:filter" component={ShotLists}/>

            <Route path="/shots/shot-details/:id/:uid" exact component={Popup}/>
            {/* <Route path="/shots/shot-details/:id" exact component={ShotLists}/> */}
            <Route path="/following/:filter" exact component={ShotLists}/>
            <Route path="/my-profile/account/profile" exact component={EditProfile}/>
            <Route path="/" exact component={ShotLists}/>
            {redirect}
          </Switch>
          <Route path="/" exact component={Footer}/>
          <Route path="/user/" component={Footer}/>
          <Route path="/my-profile/" component={Footer}/>
          <Route path="/search/" component={Footer}/>
          <Route path="/following/:filter" component={Footer}/>
        </>
      )
    }
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    token: state.authState.token,
    uid:state.authState.userId,
    name:state.authState.name,
    isLoggedIn:state.authState.loggedIn
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onTryAutoLogin: ()=>dispatch(authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));