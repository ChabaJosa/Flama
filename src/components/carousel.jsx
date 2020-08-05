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
          <div style={{ background: "rgba(0, 0, 0, 0.8)" }}>
            <img
              className="d-block w-100 carouselImage"
              src={SomePic1}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>First thing</h3>
            <p>flamma stands for this</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ background: "rgba(0, 0, 0, 0.8)" }}>
            <img
              className="d-block w-100 carouselImage"
              src={SomePic2}
              alt="Second slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Second thing</h3>
            <p>flamma stands for this</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ background: "rgba(0, 0, 0, 0.8)" }}>
            <img
              className="d-block w-100 carouselImage"
              src={SomePic3}
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Third thing</h3>
            <p>flamma stands for this</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
