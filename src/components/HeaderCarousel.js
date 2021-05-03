import React from "react";
import { Carousel } from "react-bootstrap";
import Slider4 from "../assets/carousel/Carousel2.jpg";
import Slider5 from "../assets/carousel/Carousel3.jpg";
import Slider6 from "../assets/carousel/Carousel4.jpg";
import './HeaderCarousel.css';
// import CarouselText from './CarouselText';


const HeaderCarousel = () => {
  return (
    <Carousel className="header">
      <Carousel.Item>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={Slider4}
          alt="First slide"
        />
        <Carousel.Caption className="text-color fs-1 fw-bold">
          {/* <CarouselText></CarouselText> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={Slider5}
          alt="Second slide"
        />

        <Carousel.Caption className="text-color fs-1 fw-bold">
        {/* <CarouselText></CarouselText> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-dark">
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={Slider6}
          alt="Third slide"
        />

        <Carousel.Caption className="text-color fs-1 fw-bold">
        {/* <CarouselText></CarouselText> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderCarousel;