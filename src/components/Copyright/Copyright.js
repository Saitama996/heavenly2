import React, {useContext} from 'react';
import {myContext} from '../../ContextManager';

import classes from './copyright.module.css'

const Copyright = (props) => {
  const context = useContext(myContext);
  const companyName = context.state.companyName;

  return <div className={classes.Copyright}>
    <p>{companyName} &#169; All Rights Are Reserved.</p>
  </div>
}; export default Copyright;