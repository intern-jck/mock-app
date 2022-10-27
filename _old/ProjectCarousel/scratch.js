    // <div className={fullscreen ? 'Carousel-fullscreen' : 'Carousel'}>
    e='carousel-content'>
    { current > 0 ?
      <FaChevronLeft className="carousel-left-arrow onclick" onClick={prevSlide} size={35}/>
      : null
    }

    {
      currentImage ?
        <div className={fullscreen ? "carousel-content-fullscreen" : "carousel-content"}>
          <img
            hidden={false}
            className={fullscreen? "carousel-image-fullscreen" : "carousel-image"}
            src={currentImage.url} />
          <FaExpandArrowsAlt onClick={makeFullscreen} className="carousel-fullscreen-btn onclick" size={25}/>
        </div>
        : null
    }

    { current >= 0 && current != length -1?
      <FaChevronRight className="carousel-right-arrow onclick" onClick={nextSlide} size={35}/>
        : null
    }
  </div>
  <div className="carousel-indicator-div">
    { current > 0 ?
      <FaChevronLeft className="indicator-left-arrow onclick" onClick={prevSlide} size={20}/>
      : null
    }
    {
      images ? images.map((slide, index) => {
        return (
          <img
            key={index}
            src={slide.thumbnail_url}
            className={slide.thumbnail_url === currentImage.thumbnail_url ? "selected-thumbnail carousel-indicator onclick" : "carousel-indicator onclick"}
            name={index}
            onClick={updateCurrentImage}/>
          )
        })
      : null
    }
    { current >= 0 && current != length - 1?
      <FaChevronRight className="indicator-right-arrow onclick" onClick={nextSlide} size={20}/>
      : null
    }
  </div> */}