import React from 'react'
import "./Header.css"
const Header = () => {
    return ( 
             <div className="max-width Header">
         <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className="Headerlogo">

         </img>
         <div className="Header-right" >
             <div className="header-location-search-container">
                 <div className="location-wrapper">
                     <div className='location-icon-name'>
                        <i className="fi fi-ss-marker absolute-center location-icon"></i>
                        <div>City</div>
                     </div>
                     <div>
                          <i className="fi fi-rr-caret-down absolute-center"></i>
                     </div>
                 </div>
                 <div className='location-search-separator'>
                     <div className='header-searchBar'>
                     <i class="fi fi-bs-search absolute-center search-icon"></i>
                     <input placeholder='Search for restaurant, cuisine or a dish' className='search-input'></input>
                     </div>
                    
                 </div>
             </div>
             <div className='profile-wrapper'>
                 <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                 alt="profile"
                 className='header-profile-image'></img>
                 <span className='header-username'>UserName</span>
                 <i class="fi fi-sr-angle-down absolute-center profile-options-icon"></i>
             </div>
         </div> 
        </div>
    )
}

export default Header