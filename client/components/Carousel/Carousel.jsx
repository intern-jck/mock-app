import React, { useState, useEffect, useRef } from 'react';
import { FaChevronRight, FaChevronLeft, FaExpandArrowsAlt } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({slides}) => {
  console.log(slides)
  const [slideIndex, setSlideIndex] = useState(0);
  const [length, setLength] = useState(slides.length);

  const nextSlide = (event) => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  const updateCurrentImage = (event) => {
    event.preventDefault();
    const {name} = event.target;
    setCurrent(name);
  };

  return (

    <div className='Carousel'>
      <div className='carousel-body'>
        <div className='carousel-img'>
            <img
              hidden={false}
              src={slides[slideIndex].img} />
        </div>
        <div className='carousel-header'>
          {
            slides[slideIndex].header ?
              <h4>{slides[slideIndex].header}</h4> : null
          }
        </div>
        <div className='carousel-short'>
          {
            slides[slideIndex].short ?
              <h5><i>{slides[slideIndex].short}</i></h5> : null
          }
        </div>
      </div>

      <div className='carousel-controls'>
        <button
            onClick={prevSlide}
            className='carousel-left-arrow'>
          <FaChevronLeft
            size={60} />
        </button>
        <div className='carousel-indicator-div'>
          {
            slides.map((slide, index) => {
              return (
                <div
                  className={`carousel-indicator ${index === slideIndex ? 'current-indicator' : null}`}
                  key={index}
                  name={index}
                  // onClick={updateCurrentImage}
                />
              )
            })
          }
        </div>
        <button
            onClick={nextSlide}
            className='carousel-right-arrow'>
          <FaChevronRight
            size={60} />
        </button>
      </div>

    </div>
  );

};

export default Carousel;
