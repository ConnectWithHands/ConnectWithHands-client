import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Video from "../atoms/Video";
import Canvas from "../atoms/Canvas";
import Button from "../atoms/Button";

function VideoContent({ onClick, facingMode, webcamRef, canvasRef }) {
  return (
    <Container>
      <Button className="small" onClick={onClick}>
        카메라 전환
      </Button>
      <Wrapper>
        <Video facingMode={facingMode} ref={webcamRef} />
        <Canvas ref={canvasRef} />
      </Wrapper>
    </Container>
  );
}

export default VideoContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  position: relative;
`;

VideoContent.propTypes = {
  onClick: PropTypes.func,
  facingMode: PropTypes.string,
  webcamRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  canvasRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};
