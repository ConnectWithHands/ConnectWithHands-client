import React, { forwardRef } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import PropTypes from "prop-types";

function Video({ facingMode }, ref) {
  const videoConfig =
    facingMode === "user"
      ? { facingMode: "user" }
      : { facingMode: { exact: "environment" } };

  return (
    <StyledVideo
      autoPlay
      muted
      playsInline
      videoConstraints={videoConfig}
      ref={ref}
    />
  );
}

export default forwardRef(Video);

const StyledVideo = styled(Webcam)`
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
  width: 100vw;
  height: 50vh;
`;

Video.propTypes = {
  facingMode: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  props: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};
