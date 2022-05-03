import React from 'react';
import "../styles/carousel.css"
import {Link} from "react-router-dom"

const Carousel = (props) => {
  return (
    <div>
    <div className='carouselContainer'>
        {props.bookImages.map((book, id) => {
          let url = `/info/${book.id}` 
           
            return <div key={id}>
            <Link to={url}>  <img className='carouselImage' src={book?.volumeInfo?.imageLinks?.thumbnail} /> </Link> </div>
        })}
    </div>
    </div>
  )
};
export default Carousel;