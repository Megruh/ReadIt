import React from 'react';
import Swiper from 'react-id-swiper';
import "../styles/carousel.css"

const Carousel = (props) => {
    
  return (
    <div className='carouselContainer'>
        {props.bookImages.map((image) => {
            return <img className='carouselImage' onClick={e => window.location.href='/info'} src={image} />
        })}
    </div>
  )
};
export default Carousel;