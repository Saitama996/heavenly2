import React, {useContext} from 'react';
import classes from './subscribe.module.css';
import arrow from '../../assets/arrow_top_left.svg';
import {myContext} from '../../ContextManager';

const Subscribe = () => {
  const context = useContext(myContext);
  const submitSubscribe = context.subscribeFormHandler;
  const isLoading = context.state.subscribe.isLoading;

  return <section className={classes.Subscribe}>
    <div className={['container', classes.SubscribeContainer].join(' ')}>
      <div className={classes.Content}>
        <p className={classes.Title}>Subscribe To Our Newsletter</p>
        <p className={classes.SubTitle}>Receive, news and our exclusive offers right now!</p>
      </div>

      <div className={classes.SubForm}>
        <div className={classes.InputContainer}>
          <input type='email' placeholder='Email' />
            <div className={classes.Image}>
            {!isLoading? <img src={arrow} onClick={submitSubscribe} alt=''/>:
            <div className={["lds-spinner", classes.Loading].join(' ')}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            </div>
        </div>
          
        
      </div>
    </div>

  </section>
}; export default Subscribe;