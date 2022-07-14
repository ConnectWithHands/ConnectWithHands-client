import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Video from "../atoms/Video";
import Canvas from "../atoms/Canvas";

function VideoContent({ webcamRef, canvasRef, facingMode }) {
  return (
    <Container>
      <Video ref={webcamRef} facingMode={facingMode} />
      <Canvas ref={canvasRef} />
    </Container>
  );
}

export default VideoContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100%;
  position: relative;
`;

VideoContent.propTypes = {
  webcamRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  canvasRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  facingMode: PropTypes.string,
};
