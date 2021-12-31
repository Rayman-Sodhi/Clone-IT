import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Menubar.module.css';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa';
import pracNlearn from '../DropdownMenus/pracNLearn';
import discuss from '../DropdownMenus/discuss';
import compete from '../DropdownMenus/compete';
import initiatives from '../DropdownMenus/initiatives';
import more from '../DropdownMenus/more';
import associates from '../DropdownMenus/associates';
import { VscCircleFilled } from 'react-icons/vsc';

const Menubar = () => {
    return (
        <section className={classes.Menubar}>
            <div className={classes.LogoDiv}>
                <Logo />
            </div>

            <div className={classes.Menu}>
                <ul className={classes.MainMenu}>

                    <li className={classes.ListItem}>
                        <FaCaretRight className={classes.CaretRight} />
                        <FaCaretDown className={classes.CaretDown} />
                        <a href='https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems_head'>
                           
                           PRACTICE {'&'} LEARN
                        </a>
                        <ul className={classes.DropdownItems}>
                            { 
                                pracNlearn.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a rel="noopener noreferrer" target='_blank' href={item.link}>
                                            <VscCircleFilled className={classes.Disc} />{item.name}
                                            </a>
                                        </li>
                                    );
                                }) 
                            }
                        </ul>
                    </li>
                        
                    <li className={classes.ListItem}>
                        <FaCaretRight className={classes.CaretRight} />
                        <FaCaretDown className={classes.CaretDown} />
                        <a href='https://www.codechef.com/contests/?itm_medium=navmenu&itm_campaign=allcontests_head'>COMPETE</a>
                        <ul className={classes.DropdownItems}>
                            { 
                                compete.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a rel="noopener noreferrer" target='_blank' href={item.link}>
                                            <VscCircleFilled className={classes.Disc} />{item.name}
                                            </a>
                                        </li>
                                    );
                                }) 
                            }
                        </ul>
                    </li>

                    <li className={classes.ListItem}>
                        <FaCaretRight className={classes.CaretRight} />
                        <FaCaretDown className={classes.CaretDown} />
                        <a href='https://discuss.codechef.com/?itm_medium=navmenu&itm_campaign=discuss_head'>DISCUSS</a>
                        <ul className={classes.DropdownItems}>
                            { 
                                discuss.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a rel="noopener noreferrer" target='_blank' href={item.link}>
                                            <VscCircleFilled className={classes.Disc} />{item.name}
                                            </a>
                                        </li>
                                    );
                                }) 
                            }
                        </ul>
                    </li>
                </ul>

                <ul className={classes.SideMenu}>
                    <li className={classes.ListItem}>
                        <FaCaretRight className={classes.CaretRight} />
                        <FaCaretDown className={classes.CaretDown} />
                        <a href='https://www.codechef.com/#'>OUR INITIATIVES</a>
                        <ul className={classes.DropdownItems}>
                            { 
                                initiatives.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a rel="noopener noreferrer" target='_blank' href={item.link}>
                                            <VscCircleFilled className={classes.Disc} />{item.name}
                                            </a>
                                        </li>
                                    );
                                }) 
                            }
                        </ul>
                    </li>

                    <li className={classes.ListItem}>
                        <FaCaretRight className={classes.CaretRight} />
                        <FaCaretDown className={classes.CaretDown} />
                        <a href='https://business.codechef.com/'>ASSOCIATE WITH US</a>
                        <ul className={classes.DropdownItems}>
                            { 
                                associates.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a rel="noopener noreferrer" target='_blank' href={item.link}>
                                            <VscCircleFilled className={classes.Disc} />{item.name}
                                            </a>
                                        </li>
                                    );
                                }) 
                            }
                        </ul>
                    </li>

                    <li className={classes.ListItem}>
                        <FaCaretRight className={classes.CaretRight} />
                        <FaCaretDown className={classes.CaretDown} />
                        <a href='https://www.codechef.com/ratings/all'>MORE</a>
                        <ul className={classes.DropdownItems}>
                            { 
                                more.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a rel="noopener noreferrer" target='_blank' href={item.link}>
                                            <VscCircleFilled className={classes.Disc} />{item.name}
                                            </a>
                                        </li>
                                    );
                                }) 
                            }
                        </ul>
                    </li>
                </ul>
            </div>

        </section>
    )
};

export default Menubar;