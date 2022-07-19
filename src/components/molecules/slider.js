import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Slider from "react-slick";
import Image from "../atoms/Image";

function MultipleSlides({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Container>
      <Slider {...settings}>
        {images.map((image) => (
          <Image
            key={image.id}
            alt="gesture-example"
            src={image.src}
            width="20%"
          />
        ))}
      </Slider>
    </Container>
  );
}

export default MultipleSlides;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  overflow: hidden;
`;

MultipleSlides.propTypes = {
  images: PropTypes.array,
};
