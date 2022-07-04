import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Video from "../atoms/Video";

function VideoContent() {
  const videoRef = useRef(null);
  const [videoConstraints, setVideoConstraints] = useState({
    facingMode: "user",
  });

  return <Video ref={videoRef} />;
}

export default VideoContent;
