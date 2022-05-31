import React, { useState } from 'react'

import Search from "../../public/svg/Search.js"
import Time from '../../public/svg/Time.js'
import Close from '../../public/svg/Close.js'

import styles from '../../styles/Navbar/SearchBar.module.scss'
import classNames from 'classnames'

const SearchBar = () => {
    const [search, setSearch] = useState()
    const [dropDown, setDropDown] = useState(false)


  return (
    <div className={ classNames( styles.SearchBar, { [styles.active]: dropDown } )}>
            <div className={styles.SearchContent}>
                <input 
                placeholder='Search' 
                type="search" 
                value={search} 
                // onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setDropDown(true)}
                onBlur={() => setDropDown(false)} />
                <span className={styles.SearchContainer}>
                    <Search className={styles.Icon} />
                </span>
            </div>
            <div className={styles.DropDown}>
                <ul className={styles.SearchItem}>
                    <Time className={styles.SearchIcon} />
                    Software & Game Development
                    <div className={styles.IconContainer}>
                        <Close className={styles.SearchIcon} />
                    </div>
                </ul>
                <ul className={styles.SearchItem}>
                    <Time className={styles.SearchIcon} />
                    Grand Theft Auto V
                    <div className={styles.IconContainer}>
                        <Close className={styles.SearchIcon} />
                    </div>
                </ul>
            </div>
        </div>
  )
}

export default SearchBar