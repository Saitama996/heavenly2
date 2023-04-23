import React from 'react';
import classes from './card.module.css';

const Card = (props) => {
return (
  <div className={classes.Card}>
    {/* logo */}
    <div className={classes.Image}>
      <img src={props.src} alt={props.description}/>
    </div>
    {/* Description */}
    <div className={classes.Description}>
      <p>{props.description}</p>
    </div>
  </div>
)

}; export default Card;