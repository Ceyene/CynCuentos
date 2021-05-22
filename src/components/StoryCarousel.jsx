import React from "react";
import Carousel from "react-elastic-carousel";
import "../assets/styles/components/Carousel.scss";

const StoryCarousel = ({ children }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return <Carousel breakPoints={breakPoints}>{children}</Carousel>;
};

export default StoryCarousel;
