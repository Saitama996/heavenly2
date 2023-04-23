import React from 'react';
import classes from './hero.module.css';
import truck1image from '../../assets/truck.svg'
// import clouds from '../../assets/coluds.svg'

import Button from '../Button/Button';



const Hero = (props) => {
  return (<section className={classes.Hero}>
    <div className={['container', classes.HeroContainer].join(' ')}>
      <div className={classes.HeroImages}>
        <div className={classes.Truck}><img alt='truck' src={truck1image} width='400px' height='381px' /></div>
        {/* <div className={classes.CloudsContainer}>
          <div className={classes.Clouds}><img alt='clouds' src={clouds} /></div>
        </div> */}
      </div>
      <div className={classes.HeroText}>
        <p className={classes.Title}>A Cleaner <span>Environment</span>, A Happier One.</p>
        <p className={classes.Subtitle}>Fill your basket & fill your wallet. Get Started Right Away!</p>
      </div>
      <div className={classes.HeroButtons}>
        <Button>Register</Button>
      </div>
      
    </div>
  </section>)
}; export default Hero;