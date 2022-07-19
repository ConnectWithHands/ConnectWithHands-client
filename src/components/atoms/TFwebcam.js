import React, { forwardRef } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FACING_MODE } from "../../constants/webcam";
import { isMobile } from "../../common/utilities";

const $size = { width: 640, height: 480 };
const $m_size = { width: 360, height: 250 };

function TFwebcam({ device }, ref) {
  const deviceSize = device === "mobile" ? $m_size : $size;

  const videoConfig = {
    width: deviceSize.width,
    facingMode: FACING_MODE.user,
  };

  return (
    <StyledVideo
      autoPlay
      device={device}
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
  width: ${(props) => (props.device === "mobile" ? "360px" : "640px")};
  height: auto;
`;

TFwebcam.propTypes = {
  device: PropTypes.string,
  tfWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};

// width: ${() => (isMobile() ? $m_size.width : $size.width)};
// height: ${() => (isMobile() ? $m_size.height : $size.height)};
