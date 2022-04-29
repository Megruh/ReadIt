import React from 'react';
import Swiper from 'react-id-swiper';
import "../styles/carousel.css"

const Carousel = (props) => {
    
  return (
    <div className='carouselContainer'>
        {props.bookImages.map((book) => {
            return <img className='carouselImage' onClick={e => window.location.href=`/info/${book.id}`} src={book?.volumeInfo?.imageLinks?.thumbnail} />
        })}
    </div>
  )
};
export default Carousel;