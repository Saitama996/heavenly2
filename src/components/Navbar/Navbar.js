import React, {useContext} from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './navbar.module.css';
import {myContext} from '../../ContextManager';
import Hamburger from '../../assets/hamburger.svg';

const NavBar = (props) => {
  const {companyName} = useContext(myContext).state
  return <div className={['container', classes.Navbar].join(' ')}>
    <div className={classes.Hamburger}>
      <img src={Hamburger} alt={"Hamburger"} />
    </div>
    <Logo addName companyName={companyName} width='87px' height='115px'/>
    <NavItems />
  </div>
}; export default NavBar;