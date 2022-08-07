import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ButtonList from "../modules/ButtonList";
import Button from "../atoms/Button";
import Video from "../atoms/Video";
import Canvas from "../atoms/Canvas";

function VideoContent({
  webcamRef,
  canvasRef,
  facingMode,
  leftButton,
  rightButton,
}) {
  return (
    <Container>
      <ButtonList width="100%">
        <Button
          height="40px"
          className="small"
          bgColor="white"
          outline="#748DA6"
          onClick={leftButton.onClick}
        >
          {leftButton.text}
        </Button>
        <Button
          height="40px"
          className="small"
          bgColor="white"
          outline="#748DA6"
          onClick={rightButton.onClick}
        >
          {rightButton.text}
        </Button>
      </ButtonList>
      <VideoContainer>
        <Video ref={webcamRef} facingMode={facingMode} />
        <Canvas ref={canvasRef} />
      </VideoContainer>
    </Container>
  );
}

export default VideoContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const VideoContainer = styled(Container)`
  background-color: black;
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
  leftButton: PropTypes.object,
  rightButton: PropTypes.object,
};
