import React, { useState, useEffect } from 'react';
import {FaChevronRight, FaChevronLeft, FaExpandArrowsAlt} from 'react-icons/fa';
import './ProductCarousel.css';

const ProductCarousel = ({slides}) => {
  console.log(slides)
  const [length, setLength] = useState(slides.length);
  const [current, setCurrent] = useState(0);
  // const [currentImage, setCurrentImage] = useState('');

  // useEffect(() => {
  //   if (slides) {
  //     setCurrentImage(slides[current]);
  //     setLength(slides.length);
  //   }
  // }, [slides, current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  return (
    <div className='ProductCarousel'>

      {
        slides.length > 0 ?
        <>

      <div className='product-carousel-img'>
        <img src={slides[current].url} />
      </div>
      <div className='product-carousel-controls'>
        { current > 0 ?
          <FaChevronLeft
            className='carousel-left-arrow'
            onClick={prevSlide}
            size={60} /> :
            null
        }
        { current >= 0 && current != length - 1 ?
          <FaChevronRight
            className='carousel-right-arrow'
            onClick={nextSlide}
            size={60} /> :
            null
        }
      </div>
      {/* <div className='product-carousel-indicators'>
        { images ?
          images.map((slide, i) => ( i < 7 ? <div key={i} /> : <></>)) : null
        }
      </div> */}
        </> :
        <h3>NO IMAGE FOUND!</h3>
      }


    </div>
  );
};

export default ProductCarousel;