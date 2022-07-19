import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Image from "../atoms/Image";
import Button from "../atoms/Button";

function Slide({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_IMAGES = Math.floor(images.length / 3) + 1;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_IMAGES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_IMAGES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide * 120}%)`;
  }, [currentSlide]);

  return (
    <Container>
      <Button onClick={prevSlide} bgColor="white">{`<`}</Button>
      <SliderContainer ref={slideRef}>
        {images.map((image) => (
          <img
            width="20%"
            height="50px"
            src={image.src}
            key={image.id}
            alt="something"
          />
          // <Image
          //   key={image.id}
          //   alt="gesture-example"
          //   src={image.src}
          //   width="100px"
          //   height="10vh"
          // />
        ))}
      </SliderContainer>
      <Button onClick={nextSlide} bgColor="white">{`>`}</Button>
    </Container>
  );
}

export default Slide;

const Container = styled.div`
  display: flex;

  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
`;

const SliderContainer = styled.div`
  width: 290px;
  height: 290px;
  display: flex;
`;

Slide.propTypes = {
  images: PropTypes.array,
};
