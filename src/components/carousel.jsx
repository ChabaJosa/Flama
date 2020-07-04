import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import SomePic1 from "../candles-heart.jpg";
import SomePic2 from "../candle-dark.jpg";
import SomePic3 from "../candles-red.jpg";

export default function LandingCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div style={{background:"rgba(0, 0, 0, 0.8)"}}>
            <img
              className="d-block w-100 carouselImage"
              src={SomePic1}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{background:"rgba(0, 0, 0, 0.8)"}}>
            <img
              className="d-block w-100 carouselImage"
              src={SomePic2}
              alt="Second slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{background:"rgba(0, 0, 0, 0.8)"}}>
            <img
              className="d-block w-100 carouselImage"
              src={SomePic3}
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
