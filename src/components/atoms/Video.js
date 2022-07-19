import React, { forwardRef } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FACING_MODE } from "../../constants/webcam";
import { isMobile } from "../../common/utilities";

function Video({ facingMode, tfWidth }, ref) {
  const size = { pc: 640, mobile: 360 };
  const videoWidth = isMobile() ? size.mobile : size.pc;
  console.log("mobile", isMobile());

  const videoConfig = {
    // width: tfWidth ? tfWidth : videoWidth,
    facingMode:
      facingMode === FACING_MODE.user
        ? FACING_MODE.user
        : { exact: FACING_MODE.environment },
  };

  console.log(videoConfig.width);

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
  width: ${() => (isMobile() ? "360px" : "640px")};
  height: auto;
`;

Video.propTypes = {
  facingMode: PropTypes.string,
  tfWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};
