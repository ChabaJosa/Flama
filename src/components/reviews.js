import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    // Reference: Testimonial v.2 https://mdbootstrap.com/docs/react/sections/testimonials/
    <>
      <div className="row reviews">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="container">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum
                accusamus eveniet molestias voluptatum inventore laboriosam
                labore sit, aspernatur praesentium iste impedit quidem dolor
                veniam.
              </p>
              <h3>First Review </h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum
                accusamus eveniet molestias voluptatum inventore laboriosam
                labore sit, aspernatur praesentium iste impedit quidem dolor
                veniam.
              </p>
              <h3>Second Review </h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum
                accusamus eveniet molestias voluptatum inventore laboriosam
                labore sit, aspernatur praesentium iste impedit quidem dolor
                veniam.
              </p>
              <h3>Third Review </h3>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
