import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carousal = ({ images }) => {
  return (
    <Carousel
      showIndicators={true}
      showStatus={false}
      showArrows={false}
      dynamicHeight={false}
      showThumbs={false}
    >
      {images.map(item => (
        <img className="carousal-image" src={item} />
      ))}
    </Carousel>
  );
};

export default Carousal;
