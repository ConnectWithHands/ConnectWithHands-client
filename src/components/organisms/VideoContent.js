import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Video from "../atoms/Video";

function VideoContent() {
  const videoRef = useRef(null);

  return <Video ref={videoRef} />;
}

export default VideoContent;
