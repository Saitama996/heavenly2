import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './navitems.module.css';

const navItems = (props) => {
  return (
    <>
    <div className={classes.NavItems}>
        <NavItem to='/' itemName='Home' />
        <NavItem itemName='About' />
        <NavItem itemName='Contact' />
        <NavItem itemName='Login' />
    </div>
    
    </>
  )
}; export default navItems;