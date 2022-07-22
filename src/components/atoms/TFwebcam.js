import React, { forwardRef } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FACING_MODE } from "../../constants";

function TFwebcam({ facingMode }, ref) {
  const videoConfig = {
    width: 640,
    facingMode:
      facingMode === FACING_MODE.user
        ? FACING_MODE.user
        : { exact: FACING_MODE.environment },
  };

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

export default forwardRef(TFwebcam);

const StyledVideo = styled(Webcam)`
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
  width: 640;
  height: auto;
`;

TFwebcam.propTypes = {
  facingMode: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};