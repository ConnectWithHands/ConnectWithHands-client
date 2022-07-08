import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";

import { setHandDetector, drawHandKeypoints } from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";

import VideoContent from "../../components/organisms/VideoContent";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";

import language from "../../assets/language";
import { FACING_MODE } from "../../constants/webcam";

function PracticeDetail() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE.user);
  const params = useParams();

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

  const detectHands = async (detector) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const { videoWidth, videoHeight } = video;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      try {
        const hand = await detector.estimateHands(video);
        const GE = new GestureEstimator(Gestures[params.id]);

        if (hand.length > 0) {
          const gesture = GE.estimate(hand, 7);
          console.log("gesture", gesture);

          const bestGesture = gesture.map((hand) => {
            const score = hand.gestures.map((prediction) => prediction.score);
            const maxScore = score.indexOf(Math.max(...score));

            return hand.gestures.length ? hand.gestures[maxScore] : false;
          });

          let gestureName = "";

          if (!bestGesture[0]) {
            gestureName = "감지된 제스처가 없어";
          } else {
            if (gesture.length > 1) {
              // 양손일 때

              if (bestGesture[0]?.name === bestGesture[1]?.name) {
                gestureName = bestGesture[0]?.name;
              }
            } else if (gesture.length === 1) {
              // 한손 일 때
              if (bestGesture[0]?.numberOfHands !== 1) {
                gestureName = "두 손이 필요해";
              } else {
                gestureName = bestGesture[0].name;
              }
            }
          }
        }

        const ctx = canvasRef.current.getContext("2d");
        drawHandKeypoints(hand, ctx);
      } catch (error) {
        console.log("error", error);
        detector.dispose();
      }
    }
  };

  useEffect(() => {
    let timerId;

    const runHandpose = async () => {
      const detector = await setHandDetector();

      timerId = setInterval(() => {
        detectHands(detector);
      }, 2000);
    };

    runHandpose();

    return () => clearInterval(timerId);
  }, []);

  return (
    <Container>
      <Button className="small" onClick={handleFacingModeChange}>
        카메라 전환
      </Button>
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
