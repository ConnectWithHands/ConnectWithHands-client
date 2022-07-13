import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAtom } from "jotai";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";

import { setHandDetector, drawHandKeypoints } from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";
import {
  randomLetters,
  handleIndexOfRandom,
  handleCorrectAnswers,
  initializeResult,
} from "../../store";

import HeaderContent from "../../components/organisms/HeaderContent";
import VideoContent from "../../components/organisms/VideoContent";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import ButtonList from "../../components/molecules/ButtonList";

import ImageOfLetters from "../../assets/image";
import { PRACTICE_TITLE, lengthOfLetter, Letter } from "../../constants";

function TestDetail() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();
  const [detector, setDetector] = useState(false);
  const [indexOfRandom, increaseIndexOfRandom] = useAtom(handleIndexOfRandom);
  const [numOfCorrectAnswers, increaseNumOfCorrect] =
    useAtom(handleCorrectAnswers);
  const [random, setRandom] = useAtom(randomLetters);
  const [, initailizeTest] = useAtom(initializeResult);
  const typeOfLetter = params.id;
  const engNameOfCurrentLetter = random[indexOfRandom]?.name;
  const koreanNameOfCurrentLetter = Letter[typeOfLetter].getName(
    engNameOfCurrentLetter,
  );

  const moveToResultPage = (subPage) => {
    navigate(`/practice/detail/${subPage}/test/result`, {
      state: subPage,
    });
  };

  const moveToSubMain = () => {
    navigate("/practice");
  };

  const shuffleGestures = (data) => {
    const length = lengthOfLetter[data];
    const gestures = Gestures[data];
    const result = [];
    const randomGestures = [];

    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * length);

      if (result.includes(random)) {
        i--;
      } else {
        result.push(random);
      }
    }

    result.forEach((index) => {
      randomGestures.push(gestures[index]);
    });

    setRandom([...randomGestures]);
  };

  const handleTestInitialize = () => {
    initailizeTest();
    shuffleGestures(typeOfLetter);
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
        const GE = new GestureEstimator(random);

        if (hand.length > 0) {
          const gesture = GE.estimate(hand, 7);
          console.log("gesture", gesture);

          const bestGesture = gesture.map((hand) => {
            const score = hand.gestures.map((prediction) => prediction.score);
            const maxScore = score.indexOf(Math.max(...score));

            return hand.gestures.length ? hand.gestures[maxScore] : false;
          });

          if (
            bestGesture.length &&
            bestGesture[0]?.name === random[indexOfRandom]?.name
          ) {
            console.log("일치");
            increaseIndexOfRandom();
            increaseNumOfCorrect();
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

    shuffleGestures(typeOfLetter);

    runHandpose();
  }, []);

  useEffect(() => {
    if (indexOfRandom === 5) {
      moveToResultPage(typeOfLetter);
      return;
    }

    console.log("다시 타이머 셋");

    let timerId;

    if (detector) {
      timerId = setInterval(() => {
        detectHands(detector);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [detector, indexOfRandom]);

  return (
    <Container>
      <HeaderContent title="테스트하기" onClick={moveToSubMain} />
      <ContentWrapper>
        <SubWrapper>
          <ButtonList width="100%">
            <Button className="small" onClick={handleTestInitialize}>
              다시 하기
            </Button>
            <Button className="small" onClick={increaseIndexOfRandom}>
              넘어가기
            </Button>
          </ButtonList>
          <VideoContent webcamRef={webcamRef} canvasRef={canvasRef} />
        </SubWrapper>
        <SubWrapper>
          <Wrapper>
            <ImageBox>
              {engNameOfCurrentLetter ? (
                <Image
                  width="50%"
                  alt="example"
                  src={ImageOfLetters[typeOfLetter]?.[engNameOfCurrentLetter]}
                />
              ) : null}
            </ImageBox>
            <TextBox>
              <Text className="small">{PRACTICE_TITLE[typeOfLetter]}</Text>
              {koreanNameOfCurrentLetter && (
                <Text className="super">{koreanNameOfCurrentLetter}</Text>
              )}
            </TextBox>
          </Wrapper>
          <TextWrapper>
            <Text className="normal">{`문제: ${
              indexOfRandom + 1
            }번,  정답: ${numOfCorrectAnswers} / 5 `}</Text>
          </TextWrapper>
        </SubWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default TestDetail;

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
