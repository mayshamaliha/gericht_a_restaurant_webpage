import React, {useRef, useState} from 'react';
import { images , data } from '../../constants';
import { SubHeading} from '../../components';
import { BsInstagram , BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css';

const galleryImages = [images.gallery03, images.gallery04,images.gallery03, images.gallery04];

const Gallery = () => {
  const[state, setState] = useState('');
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -=300;
    }else{
      current.scrollLeft +=300;
    }
  }

  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>Vestibulum rutrum magna eget tincidunt fermentum.
         Praesent maximus elit id ipsum vestibulum, vitae semper metus tristique. Aliquam erat volutpat.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
         <div className='app__gallery-images_container' ref={scrollRef}>
            {galleryImages.map((gImg, index) => (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
                  <img src={gImg} alt="gallery_image"/>
                  <BsInstagram className='gallery__image-icon'/>
              </div>
            ))}
         </div>
         <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
         </div>
      </div>
    </div>
  );
};

export default Gallery;
