import React from 'react';
import Swiper from 'react-id-swiper';

const Carousel = (props) => {
    console.log(props)
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    }
  }
  return (
    <Swiper {...params}>
        {/* {props.bookImages.map((book, index) => {
            console.log(book)
            return <div style={{ backgroundImage: `url(${book})`}} key={index} />
        })} */}
      <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)' }} />
      <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
      <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
      <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />
      <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/5)' }} />

    </Swiper>
  )
};
export default Carousel;