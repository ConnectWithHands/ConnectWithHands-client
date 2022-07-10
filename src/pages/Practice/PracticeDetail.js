import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAtom, useAtomValue } from "jotai";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";

import { setHandDetector, drawHandKeypoints } from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";
import {
  indexOfLetters,
  increaseIndexOfGesture,
  decreaseIndexOfGesture,
} from "../../store";

import VideoContent from "../../components/organisms/VideoContent";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";

import ImageOfLetters from "../../assets/image";
import { PRACTICE_DETECTED, FACING_MODE, Letter } from "../../constants";

function PracticeDetail() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const params = useParams();
  const [facingMode, setFacingMode] = useState(FACING_MODE.user);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(PRACTICE_DETECTED.NONE);
  const [page, setPage] = useState(false);
  const [detector, setDetector] = useState(false);
  const [, increaseIndex] = useAtom(increaseIndexOfGesture);
  const [, decreaseIndex] = useAtom(decreaseIndexOfGesture);
  const indexGestures = useAtomValue(indexOfLetters);
  const typeOfLetter = params.id;
  const indexOfLetter = indexGestures[typeOfLetter];
  const engNameOfCurrentLetter = Letter[typeOfLetter][indexOfLetter];
  const koreanNameOfCurrentLetter = Letter[typeOfLetter].getName(
    engNameOfCurrentLetter,
  );

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

  const handleIndexIncrease = () => {
    increaseIndex(typeOfLetter);
    setScore(0);
    setResult(PRACTICE_DETECTED.NONE);
    setPage(!page);
  };

  const handleIndexDecrease = () => {
    decreaseIndex(typeOfLetter);
    setScore(0);
    setResult(PRACTICE_DETECTED.NONE);
    setPage(!page);
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
        const GE = new GestureEstimator(Gestures[typeOfLetter]);

        if (hand.length > 0) {
          const gesture = GE.estimate(hand, 7);
          console.log("gesture", gesture);

          const bestGesture = gesture.map((hand) => {
            const score = hand.gestures.map((prediction) => prediction.score);
            const maxScore = score.indexOf(Math.max(...score));

            return hand.gestures.length ? hand.gestures[maxScore] : false;
          });

          if (
            bestGesture[0]?.name === Gestures[typeOfLetter][indexOfLetter]?.name
          ) {
            console.log("일치");
            const scoreToString = (bestGesture[0].score + "").substring(0, 4);
            setScore(scoreToString);
            setResult(PRACTICE_DETECTED.MATCHED);
          } else {
            setScore(0);
            setResult(PRACTICE_DETECTED.UNMATCHED);
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
    const runHandpose = async () => {
      const detector = await setHandDetector();
      console.log("detector ready");
      setDetector(detector);
    };

    runHandpose();
  }, []);

  useEffect(() => {
    let timerId;

    if (detector) {
      timerId = setInterval(() => {
        detectHands(detector);
      }, 1000);
      console.log(timerId);
    }

    return () => clearInterval(timerId);
  }, [detector, page]);

  return (
    <Container>
      <Wrapper>
        <Button className="small" onClick={handleIndexDecrease}>
          이전 글자
        </Button>
        <Button className="small" onClick={handleIndexIncrease}>
          다음 글자
        </Button>
      </Wrapper>
      <VideoContent
        onClick={handleFacingModeChange}
        facingMode={facingMode}
        webcamRef={webcamRef}
        canvasRef={canvasRef}
      />
      <Wrapper>
        <ImageBox>
          <Image
            width="90%"
            alt="example"
            src={ImageOfLetters[typeOfLetter][engNameOfCurrentLetter]}
          />
        </ImageBox>
        <TextBox>
          <Text className="small">자음</Text>
          <Text className="super">{koreanNameOfCurrentLetter}</Text>
        </TextBox>
      </Wrapper>
      <TextWrapper>
        <Text className="normal">{`결과: ${result} /  정확도 : ${score}`}</Text>
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
