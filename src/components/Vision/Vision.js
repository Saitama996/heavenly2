import React from 'react';
import classes from './vision.module.css';
import basketarrow from '../../assets/basket_arrow.svg';


const vision = (props) => {
  return (
    <section className={classes.Vision}>
      <div className="container">
      <div className={['container', classes.VisionContainer].join(' ')}>
        <div className={classes.Content}>
          <div className={classes.TitleContainer}>
            <p className={classes.Title}>Our Friendly Vision</p>
          </div>
          
          <div className={classes.SubTitleContainer}>
          <p className={classes.SubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum mollitia repellendus consequatur velit alias? Adipisci vel consectetur 
          quam dolorem voluptatem cumque, dolore ab fuga ipsam.</p>
          </div>

          <div className={classes.FindMoreContainer}>
            <button className={classes.Button}>Find More</button>
          </div>
        </div>

        <div className={classes.Image}>
          <div className={classes.ImageContainer}>
            <img src={basketarrow} alt='arrow' />
          </div>
        </div>

        
      </div>
      </div>
    </section>
  )
}; export default vision;