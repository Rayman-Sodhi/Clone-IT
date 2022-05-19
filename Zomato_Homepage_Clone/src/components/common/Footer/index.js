import React from 'react'
import "./Footer.css"
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const footer = () => {
  return (
    
    <div className='main-footer'>
    <div className='sec-7'>
    <div className='first'>
      <h1>zomato</h1>
    </div>
    <div className='first-1'>
      <div><span>India</span></div>
      <div><span>English</span></div>
    </div>
      <div className='second'>

  <div>
    <h4>ABOUT ZOMATO</h4>
    
      <a href='#'>Who We Are</a>
      <a href='#'>Blog</a>
      <a href='#'>Work With Us</a>
      <a href='#'>Investor Relations</a>
      <a href='#'>Report Fraud</a>
   
  </div>
  <div>
    <h4>ZOMAVERSE</h4>
   
    <a href='#'>Zomato</a>
    <a href='#'>Feeding India</a>
    <a href='#'>Hyperpure</a>
    <a href='#'>Zomaland</a>

  </div>
  <div>
    <h4>FOR RESTAURANTS</h4>
    
    <a href='#'>Partner With Us</a>
    <a href='#'>Apps For You</a>

  </div>
  <div>
    <h4>LEARN MORE</h4>
  
    <a href='#'>Privacy</a>
    <a href='#'>Security</a>
    <a href='#'>Terms</a>
    <a href='#'>Sitemap</a>
  
  </div>
  <div className='box-4'>
    <h4>SOCIAL LINKS</h4>
   
   <a href="#"><FaFacebook/></a>
   <a href="#"><FaInstagram/></a>
   <a href="#"><FaTwitter/></a>
   
  </div>
  </div>
<hr/> 
  <p className='third'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</p>

     
      
    </div>
    </div>
  )
}

export default footer