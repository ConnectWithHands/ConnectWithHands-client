import React, { forwardRef } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FACING_MODE } from "../../common/constants";
import { isMobile } from "../../common/utilities";

function Video({ facingMode }, ref) {
  const $size = { width: 640 };
  const $m_size = { width: 360 };

  const videoConfig = {
    width: isMobile() ? $m_size.width : $size.width,
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

export default forwardRef(Video);

const StyledVideo = styled(Webcam)`
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
  width: auto;
  height: auto;
`;

Video.propTypes = {
  facingMode: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};
