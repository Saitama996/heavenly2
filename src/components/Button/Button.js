import React from 'react';
import classes from './button.module.css';

const button = (props) => {
  return <div className={classes.ButtonDiv}>
    <button className={classes.Button}>{props.children}</button>
  </div>
}; export default button;