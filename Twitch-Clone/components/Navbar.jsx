import React, { useState } from 'react'

import SearchBar from './Navbar/SearchBar.jsx'
import RightCategory from './Navbar/RightCategory.jsx'

import styles from '../styles/Navbar/Navbar.module.scss'
import LeftCategory from './Navbar/LeftCategory.jsx'

const Navbar = () => {

  return (
    <div className={styles.Navbar}>

       <LeftCategory/>

        <SearchBar/>

        <RightCategory/>

    </div>
  )
}

export default Navbar