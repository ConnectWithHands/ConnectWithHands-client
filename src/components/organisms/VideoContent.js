import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ButtonList from "../molecules/ButtonList";
import VideoCanvas from "../molecules/VideoCanvas";
import Button from "../atoms/Button";

function VideoContent({
  webcamRef,
  canvasRef,
  facingMode,
  leftButton,
  rightButton,
}) {
  return (
    <>
      <ButtonList width="100%">
        <Button
          height="50px"
          className="small"
          bgColor="white"
          outline="#748DA6"
          onClick={leftButton.onClick}
        >
          {leftButton.text}
        </Button>
        <Button
          height="50px"
          className="small"
          bgColor="white"
          outline="#748DA6"
          onClick={rightButton.onClick}
        >
          {rightButton.text}
        </Button>
      </ButtonList>
      <Container>
        <VideoCanvas
          webcamRef={webcamRef}
          canvasRef={canvasRef}
          facingMode={facingMode}
        />
      </Container>
    </>
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
  leftButton: PropTypes.object,
  rightButton: PropTypes.object,
};
