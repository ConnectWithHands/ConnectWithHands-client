import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Video from "../atoms/Video";
import Canvas from "../atoms/Canvas";
import Button from "../atoms/Button";

function VideoContent({ facingMode, webcamRef, canvasRef }) {
  return (
    <Container>
      <Video facingMode={facingMode} ref={webcamRef} />
      <Canvas ref={canvasRef} />
    </Container>
  );
}

export default VideoContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100vw;
  position: relative;
`;

VideoContent.propTypes = {
  onClick: PropTypes.func,
  facingMode: PropTypes.string,
  webcamRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  canvasRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
