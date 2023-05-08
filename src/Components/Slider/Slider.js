import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="h-50 border-top">
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://thehanger.wp-theme.design/wp-content/uploads/nb-1st-slide.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='slider_title'>20% OFF Ziggo Shoes</h3>
          <button type="button" class="btn btn-secondary ">BUY NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://thehanger.wp-theme.design/wp-content/uploads/nb-2nd-slide.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='f_ship'>20% OFF Ziggo Shoes</h3>
          <button type="button" class="btn btn-secondary">BUY NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://thehanger.wp-theme.design/wp-content/uploads/nb-3rd-slide.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='f_ship'>20% OFF Ziggo Shoes</h3>
          <button type="button" class="btn btn-secondary">BUY NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider