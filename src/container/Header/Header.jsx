import React from 'react';
import { images } from '../../constants';
import {SubHeading} from '../../components';


import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Proin vulputate augue vitae turpis auctor, id luctus mi cursus. Quisque vitae dolor rutrum, 
       euismod odio ac, convallis metus. Vestibulum lacinia velit non eros luctus, vel lacinia purus gravida.
      </p>
      <button type='button' className='custom__button' style={{marginTop: '2rem'}}>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
