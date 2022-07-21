import React, { forwardRef } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FACING_MODE } from "../../constants";

function TFWebcam({ facingMode }, ref) {
  const videoConfig = {
    width: 360,
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

export default forwardRef(TFWebcam);

const StyledVideo = styled(Webcam)`
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
  width: 360px;
  height: auto;
`;

TFWebcam.propTypes = {
  facingMode: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};
