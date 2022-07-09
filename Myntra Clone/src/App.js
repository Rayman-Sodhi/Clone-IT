import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CrouselView from './components/Crousel/Crousel';
import DealCardViewPort from './components/DealCardViewPort/DealCardViewPort';
import BrandInFocusViewPort from './components/BrandInFocusViewPort/BrandInFocusViewPort'


library.add(fas)





class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
       <Header/>
       
       <CrouselView/>
        <DealCardViewPort/>

        <h2>BRANDS IN FOCUS</h2>
        <p>Show some brand love</p>
        

       <BrandInFocusViewPort/>
       
       
    
      </div>
    );
  }
}

export default App;
