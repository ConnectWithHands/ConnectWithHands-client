import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

import {
  setHandDetector,
  drawHandKeypoints,
  GestureEstimator,
} from "../../common/utilities";

import VideoContent from "../../components/organisms/VideoContent";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";

import language from "../../assets/language";
import { FACING_MODE } from "../../constants/webcam";

function PracticeDetail() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE.user);

  const handleFacingModeChange = () => {
    switch (facingMode) {
      case FACING_MODE.user:
        setFacingMode(FACING_MODE.environment);
        break;
      case FACING_MODE.environment:
        setFacingMode(FACING_MODE.user);
        break;
    }
  };

  const runHandpose = async () => {
    const hands = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
      runtime: "tfjs",
      modelType: "lite",
      maxHands: 2,
    };

    const detector = await handPoseDetection.createDetector(
      hands,
      detectorConfig,
    );
    console.log("Handpose model loaded.");

    setInterval(() => {
      detectHands(detector);
    }, 1000);
  };

  const detectHands = async (detector) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const { videoWidth, videoHeight } = video;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await detector.estimateHands(video);
      const ctx = canvasRef.current.getContext("2d");
      drawHandKeypoints(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <Container>
      <VideoContent
        onClick={handleFacingModeChange}
        facingMode={facingMode}
        webcamRef={webcamRef}
        canvasRef={canvasRef}
      />
      <Wrapper>
        <ImageBox>
          <Image width="90%" alt="example" src={language.alphabet} />
        </ImageBox>
        <TextBox>
          <Text className="small">자음</Text>
          <Text className="super">ㄱ</Text>
        </TextBox>
      </Wrapper>
      <TextWrapper>
        <Text className="normal">정확도</Text>
      </TextWrapper>
    </Container>
  );
}

export default PracticeDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`;

const TextWrapper = styled.div`
  width: 86vw;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
  border: 1px solid black;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 40vw;
  height: 20vh;
  margin: 1.2em 0;
  border: 1px solid black;
`;

const TextBox = styled(ImageBox)`
  flex-direction: column;
`;
