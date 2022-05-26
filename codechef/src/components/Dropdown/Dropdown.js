import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import classes from './Dropdown.module.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';

const dropDownItems = [
    { item: 'Account', link: "/" },
    { item: 'Edit Profile', link: "/" },
    { item: 'My Laddus', link: "/" },
    { item: 'My Apps', link: "/" },
    { item: 'My Todos', link: "/" },
    { item: 'Mt Sets', link: "/" },
    { item: 'My Certificates', link: "/" },
    { item: 'My Teams', link: "/" },
    { item: 'Team Invites', link: "/" },
    { item: 'Referrals', link: "/" },
];

const dropdown = (props) => (
    <Dropdown  className={classes.Dropdown}>
        <Dropdown.Toggle  className={classes.Toggle} variant="light" size="sm" id="dropdown-basic">
            {props.children}
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes.Menu}>
            {
                dropDownItems.map((item, index) => {
                    return (
                        <Aux key={item.item} >
                            <Dropdown.Item className={classes.MenuItem} href={item.link}>{item.item}</Dropdown.Item>
                            {index !== dropDownItems.length-1 ? <Dropdown.Divider  className={classes.Divider}/> : null}
                        </Aux>
                    );    
                })
            }
            
        </Dropdown.Menu>
    </Dropdown>
);

export default dropdown;