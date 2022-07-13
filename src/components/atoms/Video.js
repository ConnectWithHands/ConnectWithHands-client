import React, { forwardRef } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FACING_MODE } from "../../constants/webcam";

function Video(props, ref) {
  const isiOS = () => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const isAndroid = () => {
    return /Android/i.test(navigator.userAgent);
  };

  const isMobile = () => {
    return isAndroid() || isiOS();
  };

  const widthClassifier = isMobile() && props.setWidth;
  console.log(widthClassifier);

  const $size = { width: 640 };
  const $m_size = { width: 360 };
  const normalConfig = {
    facingMode: FACING_MODE.user,
    width: isMobile() ? $m_size.width : $size.width,
  };

  return (
    <StyledVideo
      autoPlay
      muted
      playsInline
      videoConstraints={normalConfig}
      isclassifier={widthClassifier?.toString()}
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
  width: ${(props) => (props.isclassifier === "true" ? "360px" : "auto")};
  height: auto;
`;

Video.propTypes = {
  setWidth: PropTypes.bool,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};
