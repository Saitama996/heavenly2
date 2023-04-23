import React from 'react';
import styles from './styles.module.css';

const navItem = (props) => {
  return (
    <div className={styles.item}>
      <a href={props.to || "/"}><p>{props.itemName}</p></a>
    </div>
  )
}; export default navItem;