import React from 'react';
import classes from './roadmap.module.css';
import RoadItem from './RoadItem';
import Card from '../Card/Card';

// Normal svgs
import register from '../../assets/register.svg';
import basket from '../../assets/fill_basket.svg';
import location2 from '../../assets/location2.svg';
import running from '../../assets/running.svg';
import analysis from '../../assets/analysis.svg';
import cash from '../../assets/cash.svg';
import truck2 from '../../assets/truck2.svg';


// Mobile svgs

import registerMobile from '../../assets/registerMobile.svg';
import basketMobile from '../../assets/fillBasketMobile.svg';
import location2Mobile from '../../assets/locationMobile.svg';
import runningMobile from '../../assets/runningMobile.svg';
import analysisMobile from '../../assets/analysisMobile.svg';
import cashMobile from '../../assets/cashMobile.svg';

const roadMap = (props) => {
  return (
    <section className={classes.RoadMap}>
      <div className={['container', classes.RoadMapContainer].join(' ')}>
        <div className={classes.RoadMapImage}>
          <img alt='truck2' src={truck2} />
        </div>
        <div className={classes.RoadMapContent}>
          <div className={classes.Logo}>
            <p>Our Road Map</p>
          </div>

          <div className={classes.Items}>
            <RoadItem src={register} title={'Register with us.'}/>
            <RoadItem src={basket} title={'Fill Basket'}/>
            <RoadItem src={location2} title={"Tell us what's in your basket"}/>
            <RoadItem src={running} title={'Our delegate will reach you.'}/>
            <RoadItem src={analysis} title={'Your order will be reviewed.'}/>
            <RoadItem src={cash} title={'Get Paid via our channels.'}/>
          </div>

          <div className={classes.ItemsMobile}> 
            <Card src={registerMobile} description={"Create your friendly account."} />
            <Card src={basketMobile} description={"Start by filling your own basket."} />
            <Card src={location2Mobile} description={"Tell us what's in your basket"} />
            <Card src={runningMobile} description={"Our delegate  will reach you."} />
            <Card src={analysisMobile} description={"Your order will be reviewed."} />
            <Card src={cashMobile} description={"You will get Paid via our channels."} />
          </div>
        </div>
      </div>
    </section>
  )
}; export default roadMap;