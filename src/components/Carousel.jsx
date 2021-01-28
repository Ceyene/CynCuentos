import React, { useState } from "react";
import "../assets/styles/components/Carousel.scss";

const Carousel = ({ children }) => {
  //state that will handle the horizontal position of the slider
  const [x, setX] = useState(1);
  //it handles the left movement of the slider
  const goLeft = () => {
    console.log("left", x);
    x <= -40 ? setX(x + 25) : setX(1);
  };
  //it handles the right movement of the slider
  const goRight = () => {
    console.log("right", x);
    x >= -95 && x !== -110 ? setX(x - 25) : setX(-110);
  };

  return (
    <section className="carousel">
      <button type="button" className="prev" id="prev" onClick={goLeft}>
        &#10094;
      </button>
      <div className="carousel__container">
        <div
          className="carousel__slide"
          style={{ transform: `translateX(${x}%)` }}
        >
          {children}
        </div>
      </div>
      <button type="button" className="next" id="next" onClick={goRight}>
        &#10095;
      </button>
    </section>
  );
};

export default Carousel;
