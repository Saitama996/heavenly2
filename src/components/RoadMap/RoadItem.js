import React from 'react';
import classes from './roaditem.module.css';

const roadItem = (props) => {
  return <>
  <div className={classes.RoadItem}>
    <div className={classes.Shape}>
      <img  className={classes.Icon} src={props.src} alt=''/>
    </div>
    <p className={classes.Title}>{props.title}</p>
  </div>
  <div className={classes.Row}></div>
  </>
}; export default roadItem;