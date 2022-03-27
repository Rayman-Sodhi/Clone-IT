import React, { useState } from "react";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import RouterLink from "../link/RouterLink";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Place } from "../../assets/place.svg";
import logo from "../../assets/header-logo.png";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { auth } from "../../firebase.utils";
import { selectCartItemsCount } from "../../redux/cartSelector";
import { useNavigate } from "react-router-dom";
import { Drawer,Divider} from "antd";



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector(selectUser);
  const cartCount = useSelector((state) => selectCartItemsCount(state));


  const navigate = useNavigate();

  
  const signOut = () => {
    if (user) auth.signOut();
  };

  const handleSearch = (e) => {
   e.preventDefault();
       navigate("/shop");
  };
  return (
    <>
      <Drawer
        title={`Hello, ${user ? user.name : "Sign In"}`}
        headerStyle={{ backgroundColor: "#232F3E", color: "#fff" }}
        width={360}
        placement="left"
        onClose={() => setShowMenu(false)}
        visible={showMenu}
        footer={
          <div className="menuFooter">
            <p>Help & Settings</p>
            <p>Account</p>
            <p>Customer Service</p>
            <p>Sign Out</p>
          </div>
        }
      >
        <RouterLink to='/shop'>

        
        <div className="menu__body">
          <p className='menu__body__title'>Treading</p>
          <p>Best Sellers</p>
          <p>New Releases</p>
          <p>Movers and Shakers</p>
          <Divider/>

          <p className='menu__body__title'>Digital Content And Devices</p>
          <p>Amazon Fire TV</p>
          <p>Amazon Prime Video</p>
          <p>Amazon Music</p>
        

          <Divider />
          <p className='menu__body__title'>Shop By Department</p>
          <p>Books</p>
          <p>Music, Movies & Games</p>
          <p>Computers</p>
          <p>Electronics</p>
          <p>Home</p>
          <p>Baby</p>

          </div>
          </RouterLink>
      </Drawer>

      <div className="header">
        <div className="header__menu">
          <Menu
            onClick={() => setShowMenu(true)}
            className="header__menu__icon"
          />
        </div>
        <RouterLink to="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
        </RouterLink>
        <div className="header__search">         
          <Form>
            <InputGroup>
              <InputGroup.Prepend>
                <Form.Control as="select" className="header__search__category">
                  <option>All</option>
                  <option>Camera</option>
                  <option>Clothing</option>
                  <option>Computers</option>
                </Form.Control>
              </InputGroup.Prepend>
              <FormControl />
              <RouterLink to="/shop">
                <SearchIcon className="header__search__icon" />
              </RouterLink>
            </InputGroup>
            <button type="submit" onClick={handleSearch}>
              Hidde button
            </button>
          </Form>
        </div>

        <div className="header__nav">
          <RouterLink to={!user ? "/auth" : ""}>
            <div onClick={signOut} className="header__nav__option">
              <span>Hello {user ? user.name : "Guest"} </span>
              <span>{user ? "Sign Out" : "Sign In"}</span>
            </div>
          </RouterLink>
          <RouterLink to="/orders">
      <div className="header__nav__option">
              <span>returns</span>
   
   
             <span>&orders</span>
            </div>
          </RouterLink>
          <RouterLink to="/checkout">
            <div className="header__nav__cart">
              <span>{cartCount}</span>
              <Cart className="header__nav__cart__icon" />
            </div>
          </RouterLink>
        </div>
      </div>
      <RouterLink to="/shop">
        <div className="sub-header">
          <div className="sub-header__deliver">
            <Place className="sub-header__deliver__icon" />
            <div className="sub-header__deliver__info">
              <span>Deliver to</span>
              <span>New Zealand</span>
            </div>
          </div>
          <div className="sub-header__link">
            <span>Today's Deals</span>
            <span>Customer Service</span>
  
  
            <span>Gift Cards</span>
            <span>Registry</span>
            <span>Sell</span>
          </div>
          <div className="sub-header__notice">
            <span>Amazon's response to COVID-19</span>
          </div>
        </div>
      </RouterLink>
    </>
  );
};

export default Header;
