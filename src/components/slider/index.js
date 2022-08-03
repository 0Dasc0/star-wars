import React from 'react';
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import f1 from './1.jpg'
import f2 from './2.jpg'
import f3 from './3.jpg'

function CarouselFadeExample() {
  return (
    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f3}
          alt="First slide"
          class="imgs"
          width={1930}
          height={430}
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f1}
          alt="Second slide"
          class="imgs"
          width={1930}
          height={430}
        />

     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f2}
          alt="Third slide"
          class="imgs"
          width={1930}
          height={430}
        />

    
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;