import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Video from "../atoms/Video";
import Button from "../atoms/Button";

function VideoContent() {
  const videoRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user");

  const handleFacingModeChange = () => {
    switch (facingMode) {
      case "user":
        setFacingMode("environment");
        break;
      case "environment":
        setFacingMode("user");
        break;
    }
  };

  return (
    <Container>
      <Button className="small" onClick={handleFacingModeChange}>
        카메라 전환
      </Button>
      <Video facingMode={facingMode} ref={videoRef} />
    </Container>
  );
}

export default VideoContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
