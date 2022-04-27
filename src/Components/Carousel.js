import React from 'react';
import Swiper from 'react-id-swiper';
import "../styles/carousel.css"

const Carousel = (props) => {
    
  return (
    <div className='carouselContainer'>
        <div className='carouselOfImages'>
        {props.bookImages.map((image) => {
            return <img className='carouselImage' src={image} />
        })}
        </div>
        <div class="gradient-left">
        </div>
        <div class="gradient-right">
        </div>
    </div>
  )
};
export default Carousel;