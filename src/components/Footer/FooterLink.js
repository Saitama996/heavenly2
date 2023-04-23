import React from 'react';
import classes from './footerlink.module.css';

const footerLink = (props) => {
  return(
    <div className={classes.Container}>
      <div>
        <a href={props.to}>{props.children}</a>
      </div>
      <div className={classes.LowerBorder}></div>
    </div>
  )
}; export default footerLink;