import React from 'react'; 
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Header(){

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header"> 
         <Link to="/">
         <img alt="ccc" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="h_com header_logo" />
         </Link>
         
         <div className="header_search"> 
            <input
            className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
         </div>

         <div className="header_nav"> 
         <Link to={!user && '/login'}>
          <div className="header_option h_com"  onClick={
              handleAuthentication
          }>
              <span className="header_optionLineOne">  {user ? `Hello ${user.email.substring(0, user.email.lastIndexOf("@"))}` : 'Hello Guest'}</span>
              <span className="header_optionLineTwo"> {user ? 'Sign Out' : 'Sign In'}</span>
          </div>
          </Link>

          
          <Link to="/orders">
          <div className="header_option h_com">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
       
          <div className="header_option h_com">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
          <div className="header_optionBasket h_com">
 <ShoppingCartIcon />
 <span className="header_optionLineTwo
 header_basketCount">{basket?.length}</span>
</div>
          </Link>
          
         </div>
        </div>

        
    )
}

export default Header;