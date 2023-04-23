import React, {useContext} from 'react';
import Logo from '../Logo/Logo';
import FooterLink from './FooterLink';
import classes from './footer.module.css';
import fb from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';



import {myContext} from '../../ContextManager';

const Footer = (props) => {
  const context = useContext(myContext);
  const companyName = context.state.companyName;

  return <footer className={classes.Footer}>
    <div className={['container', classes.FooterContainer].join(' ')}>
      {/* Div Intro */}
      <div className={classes.Intro}>
        {/* Logo */}
        <div>
          <Logo companyName={companyName} addName width='87px' height='115px'/>
        </div>
        {/* Text */}
        <div className={classes.IntroText}>
          <p>When Hope is gone... Undo this Lock... And Send Me Forth... On a Moonlit Walk.</p>
        </div>
      </div>
      {/* Social */}
      <div className={classes.Social}>
        <img alt='fb' src={fb} />
        <img alt='instagram' src={instagram} />
        <img alt='twitter' src={twitter} />
      </div>
      {/* Contact */}
      <div className={classes.Contact}>
        <button>Contact Us</button>
      </div>
      {/* Links */}
      <div className={classes.Links}>
        
        <FooterLink to='#'>FAQs</FooterLink>
        <FooterLink to='#'>Services</FooterLink>
        <FooterLink to='#'>Whatever</FooterLink>
        <FooterLink to='#'>Privacy Policy</FooterLink>
      </div>
      {/* Copyright */}
      
    </div>
  </footer>
}; export default Footer;