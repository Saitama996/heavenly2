import React from 'react';
import classes from './partners.module.css';
import Partner from './partner';


import cloudSvg from '../../assets/cloudsSmall.svg';

const Partners = () => {
  return <section className={classes.Partners}>
    <div className={[classes.PartnersContainer]}>
      <Partner alt='cloud' img={cloudSvg} /> 
      <Partner alt='cloud' img={cloudSvg} /> 
      <Partner alt='cloud' img={cloudSvg} /> 
      <Partner alt='cloud' img={cloudSvg} />
      <Partner alt='cloud' img={cloudSvg} />
      <Partner alt='cloud' img={cloudSvg} />
    </div> 
  </section>
}; export default Partners;