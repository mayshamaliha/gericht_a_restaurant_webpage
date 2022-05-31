import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter} from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id = 'contact'>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contacts'>
        <h1 className='app_footer-headtext'>Contact Us</h1>
        <p className='.p__opensans' style={{color:'white'}}>Dhaka, Bangladesh</p>
        <p className='.p__opensans' style={{color:'white'}}>+880123456789</p>
        <p className='.p__opensans' style={{color:'white'}}>+880123456788</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht}/>
        <p className='.p__opensans' style={{color:'white'}}>Sed et dolor malesuada, sollicitudin nunc eget, viverra arcu. Proin venenatis posuere vulputate. </p>
        <img src={images.spoon} className="spoon__img" style={{marginTop:'15px'}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app_footer-headtext'>Working Hours</h1>
        <p className='.p__opensans' style={{color:'white'}}>Saturday-Thursday</p>
        <p className='.p__opensans' style={{color:'white'}}>10:00AM - 9:00PM</p>
        <p className='.p__opensans' style={{color:'white'}}>Friday</p>
        <p className='.p__opensans' style={{color:'white'}}>3:00PM - 9:00PM</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
