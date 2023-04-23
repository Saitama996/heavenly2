import React from 'react';
import logosvg from '../../assets/logo.svg';
import classes from './logo.module.css';


const logo = (props) => {
  return (
  <div className={classes.LogoContainer}>
    <div className={classes.Logo}><img alt='Logo' width={props.width} height={props.height} src={logosvg} /></div>
    {props.addName? <div className={classes.CompanyName}>{props.companyName}</div>: null}
  </div>
  )
}; export default logo;