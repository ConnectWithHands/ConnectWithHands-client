import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

import HeaderContent from "../../components/organisms/HeaderContent";
import VideoContent from "../../components/organisms/VideoContent";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import ButtonList from "../../components/molecules/ButtonList";

import ImageOfLetters from "../../assets/image";
import { PRACTICE_TITLE, PRACTICE_DETECTED, Letter } from "../../constants";

function PracticeDetail() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();
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

  const moveToSubMain = () => {
    navigate("/practice");
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
      <HeaderContent title="연습하기" onClick={moveToSubMain} />
      <ContentWrapper>
        <SubWrapper>
          <ButtonList width="100%">
            <Button
              height="50px"
              className="small"
              onClick={handleIndexDecrease}
            >
              이전 글자
            </Button>
            <Button
              height="50px"
              className="small"
              onClick={handleIndexIncrease}
            >
              다음 글자
            </Button>
          </ButtonList>
          <VideoContent webcamRef={webcamRef} canvasRef={canvasRef} />
        </SubWrapper>
        <SubWrapper>
          <Wrapper>
            <ImageBox>
              <Image
                width="50%"
                alt="example"
                src={ImageOfLetters[typeOfLetter][engNameOfCurrentLetter]}
              />
            </ImageBox>
            <TextBox>
              <Text className="small">{PRACTICE_TITLE[typeOfLetter]}</Text>
              <Text className="super">{koreanNameOfCurrentLetter}</Text>
            </TextBox>
          </Wrapper>
          <TextWrapper>
            <Text className="normal">{`결과: ${result} /  정확도 : ${score}`}</Text>
          </TextWrapper>
        </SubWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default PracticeDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  @media screen and (max-width: 480px) {
    flex-direction: row;
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 70%;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15vh;
  margin: 1.25rem 0.25rem;
  border: 1px solid black;

  @media screen and (max-width: 480px) {
    flex-direction: row;
    width: 100%;
  }
`;

const TextBox = styled(ImageBox)`
  flex-direction: column;
`;
