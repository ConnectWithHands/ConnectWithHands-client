import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Image({ width, height, zIndex, alt, src }) {
  const cssStyle = {
    width,
    height,
    zIndex,
  };

  return (
    <ImageContainer {...cssStyle}>
      <StyledImage alt={alt} src={src} />
    </ImageContainer>
  );
}

export default Image;

const ImageContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  zindex: ${(props) => props.zIndex || 0};
  overflow: hidden;
  position: relative;
`;

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Image.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: PropTypes.number,
  alt: PropTypes.string,
  src: PropTypes.string,
};
