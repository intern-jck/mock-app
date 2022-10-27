import React, { useState, useEffect } from "react";
import {FaChevronRight, FaChevronLeft, FaExpandArrowsAlt} from "react-icons/fa";
import "./ProjectCarousel.css";
import "./ProjectCarouselFullscreen.css";

const ProjectCarousel = ({slides}) => {
  // console.log(slides[0].url)
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
    <div className='ProjectCarousel'>

      <div className='project-carousel-img'>
        <img src={slides[current].url} />
      </div>

      <div className='project-carousel-controls'>
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
      {/* <div className='project-carousel-indicators'>
        { images ?
          images.map((slide, i) => ( i < 7 ? <div key={i} /> : <></>)) : null
        }
      </div> */}
    </div>
  );
};

export default ProjectCarousel;