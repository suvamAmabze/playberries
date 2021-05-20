import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carousel-slider-img"
          src="/images/slider/event-image1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Playberries</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-slider-img"
          src="/images/slider/event-image2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Playberries</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-slider-img"
          src="/images/slider/event-image3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Playberries</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
