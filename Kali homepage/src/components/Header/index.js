import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
       <div className='header-background'>
       <nav>
       <img id="logo" src="https://www.kali.org/images/kali-logo.svg" alt=''></img>
       <ul className='nav-bar'>
         <li>
         <a className='nav-link' href="https://www.kali.org/get-kali/">GET KALI</a>
         </li>
         <li>
         <a className='nav-link' href="https://www.kali.org/blog/">BLOG</a>
         </li>
         <li>
         <a className='nav-link' href="https://www.kali.org/blog/">DOCUMENTATION</a>
         </li>
      
         <li>
         <a className='nav-link' href="https://www.kali.org/blog/">COMMUNITY</a>
       
         </li>
         <li>
         <a className='nav-link' href="https://www.kali.org/blog/">COURSES</a>
       
         </li>
         <li>
         <a className='nav-link' href="https://www.kali.org/blog/">DEVELOPERS</a>
    
         </li>
         <li>
         <a className='nav-link' href="https://www.kali.org/blog/">ABOUT</a>
       
         </li>
         
       </ul>
       </nav>
       <div className='banner'>
         <div className='circle-logo'></div>
         <div className='logo-text'>
         <div><h1>Kali Linux</h1>
         <p>The most advanced Penetration Testing Distribution. Ever.</p>
         </div><div><h1>The most advanced Penetration Testing Distribution</h1>
         <p>Kali Linux is an open-source, Debian-based Linux distribution geared towards various information security tasks, such as Penetration Testing, Security Research, Computer Forensics and Reverse Engineering.</p></div>
         <div><a id="download-button" class="btn" href="https://www.kali.org/get-kali/">Download <i class="ti-download"></i></a>
<a id="documentation-link" class="btn" href="https://www.kali.org/docs/">Documentation <i class="ti-book"></i></a></div>
         </div>
       </div>
       </div>
    </div>
  
  )
}

export default Header