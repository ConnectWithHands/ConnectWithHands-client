import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/media";

import { useAtom, useAtomValue } from "jotai";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";

import {
  setHandDetector,
  drawHandKeypoints,
  getPercentage,
  useInterval,
} from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";
import {
  indexOfLetters,
  increaseIndexOfGesture,
  decreaseIndexOfGesture,
} from "../../store";

import VideoContent from "../../components/modules/VideoContent";
import Header from "../../components/modules/Header";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";
import IMAGE from "../../assets";

import {
  FACING_MODE,
  PRACTICE_TITLE,
  PRACTICE_DETECTED,
  LETTER,
  NAME_LETTER_TYPE,
} from "../../common/constants";

function PracticeDetail() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [result, setResult] = useState(PRACTICE_DETECTED.NONE);
  const [detector, setDetector] = useState(false);
  const [xCordination, setXCordination] = useState([]);
  const [, increaseIndex] = useAtom(increaseIndexOfGesture);
  const [, decreaseIndex] = useAtom(decreaseIndexOfGesture);
  const indexGestures = useAtomValue(indexOfLetters);
  const typeOfLetter = params.id;
  const indexOfLetter = indexGestures[typeOfLetter];
  const engNameOfCurrentLetter = LETTER[typeOfLetter][indexOfLetter];
  const koreanNameOfCurrentLetter = LETTER[typeOfLetter].getKorName(
    engNameOfCurrentLetter,
  );

  const moveToSubMain = () => {
    navigate("/practice");
  };

  const handleIndexIncrease = () => {
    increaseIndex(typeOfLetter);
    setScore(0);
    setHighScore(0);
    setResult(PRACTICE_DETECTED.NONE);
  };

  const handleIndexDecrease = () => {
    decreaseIndex(typeOfLetter);
    setScore(0);
    setHighScore(0);
    setResult(PRACTICE_DETECTED.NONE);
  };

  const checkSpecialCase = (type, gesture) => {
    const specialConsonants = ["giyeok", "digeut", "bieup", "siot", "jieut"];

    if (type === NAME_LETTER_TYPE.consonants) {
      if (specialConsonants.includes(gesture?.name)) return true;
    }

    return false;
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

          if (gesture.bestGesture.length) {
            const highestScore = gesture.bestGesture[0];
            const isSpecial = checkSpecialCase(typeOfLetter, highestScore);

            if (
              isSpecial &&
              Gestures[typeOfLetter][indexOfLetter]?.name ===
                `ssang${highestScore.name}`
            ) {
              if (setXCordination.length === 10) {
                setXCordination([]);
                return;
              }

              const xValue = hand[0].keypoints[0].x;
              setXCordination((previous) => [...previous, xValue]);

              const max = Math.max(...xCordination);
              const min = Math.min(...xCordination);

              if (max - min > 100) {
                const score = getPercentage(highestScore.score);
                setScore(score);
                setHighScore((previous) =>
                  parseInt(score) > parseInt(previous) ? score : previous,
                );
                setResult(PRACTICE_DETECTED.MATCHED);
              }
            } else if (
              highestScore.name === Gestures[typeOfLetter][indexOfLetter]?.name
            ) {
              const score = getPercentage(highestScore.score);
              setScore(score);
              setHighScore((previous) =>
                parseInt(score) > parseInt(previous) ? score : previous,
              );
              setResult(PRACTICE_DETECTED.MATCHED);
            } else {
              setXCordination([]);
              setScore(0);
              setResult(PRACTICE_DETECTED.UNMATCHED);
            }
          }
        } else {
          setXCordination([]);
          setScore(0);
          setResult(PRACTICE_DETECTED.UNMATCHED);
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

  useInterval(() => {
    if (detector) {
      detectHands(detector);
    }
  }, 200);

  return (
    <Container>
      <Header title="연습하기" onClick={moveToSubMain} />
      <ContentWrapper>
        <SubWrapper>
          <VideoContent
            webcamRef={webcamRef}
            canvasRef={canvasRef}
            facingMode={FACING_MODE.user}
            leftButton={{ text: "이전 글자", onClick: handleIndexDecrease }}
            rightButton={{ text: "다음 글자", onClick: handleIndexIncrease }}
          />
        </SubWrapper>
        <SubWrapper>
          {checkSpecialCase(
            typeOfLetter,
            Gestures[typeOfLetter][indexOfLetter - 1],
          ) ? (
            <Text className="normal">
              단자음 제스처를 왼쪽에서 오른쪽으로 이동
            </Text>
          ) : null}
          <Wrapper>
            <ImageBox>
              <Image
                width="50%"
                alt="example"
                src={IMAGE[typeOfLetter][engNameOfCurrentLetter]}
              />
            </ImageBox>
            <TextBox>
              <Text className="small">{PRACTICE_TITLE[typeOfLetter]}</Text>
              <Text className="super">{koreanNameOfCurrentLetter}</Text>
            </TextBox>
          </Wrapper>
          <TextWrapper>
            <Text className="normal">{`${result} / 정확도: ${score} / 최고점: ${highScore}`}</Text>
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

  ${media.small`
    flex-direction: column;
  `}
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

  ${media.small`
    flex-direction: row;
    width: 90%;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 70%;

  ${media.small`
    width: 90%;
  `}
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15vh;
  margin: 1.25rem 0.25rem;
  border: 1px solid black;

  ${media.small`
    flex-direction: row;
    width: 100%;
  `}
`;

const TextBox = styled(ImageBox)`
  flex-direction: column;
`;
