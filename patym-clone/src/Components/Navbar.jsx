import React from "react";
import Logo from "../img/logo.png";
import SignUpImg from "../img/signup.png";
const Navbar = () => {
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-light" id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={Logo} alt="logo" id="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle drop_font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Paytm for Consumer
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Payments</a></li>
            <li><a className="dropdown-item" href="#">Ticket Booking</a></li>
            <li><a className="dropdown-item" href="#">Financial Services</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle drop_font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Paytm for Business
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Consumer Payments</a></li>
            <li><a className="dropdown-item" href="#">Business Payments</a></li>
            <li><a className="dropdown-item" href="#">Business Software</a></li>
            <li><a className="dropdown-item" href="#">Financial Services</a></li>
            <li><a className="dropdown-item" href="#">Developer</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle drop_font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">About</a></li>
            <li><a className="dropdown-item" href="#">Blog</a></li>
            <li><a className="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle drop_font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Investor Relations
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Financial information</a></li>
            <li><a className="dropdown-item" href="#">Corporate Governance</a></li>
            <li><a className="dropdown-item" href="#">Stock Exchange Submissions</a></li>
            <li><a className="dropdown-item" href="#">General Mettings</a></li>
            <li><a className="dropdown-item" href="#">Investor Resources</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link drop_font" href="#">Career</a>
        </li>
      </ul>
      <div className="signup">
        <button>Sign In <span> <img src={SignUpImg} alt="img" /></span></button>
      </div>
    </div>
  </div>
</nav>
    </>
    )
}

export default Navbar