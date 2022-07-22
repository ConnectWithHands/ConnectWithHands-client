import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/media";

import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";

import {
  setHandDetector,
  drawHandKeypoints,
  useInterval,
} from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";

import VideoContent from "../../components/modules/VideoContent";
import Header from "../../components/modules/Header";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";

import IMAGE from "../../assets";

import {
  FACING_MODE,
  PRACTICE_TITLE,
  NAME_LETTER_TYPE,
  LETTER,
} from "../../constants";

function TestDetail() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();
  const [detector, setDetector] = useState(false);
  const [hint, setHint] = useState(false);
  const [randomLetters, setRandomLetters] = useState([]);
  const [question, setQuestion] = useState({
    index: 0,
    answers: 0,
  });
  const { index, answers } = question;

  const typeOfLetter = params.id;
  const testGesturesList =
    typeOfLetter === NAME_LETTER_TYPE.consonants
      ? Gestures.consonantsTest
      : Gestures.vowels;
  const engNameOfCurrentLetter = randomLetters[index]?.name;
  const koreanNameOfCurrentLetter = LETTER[typeOfLetter].getKorName(
    engNameOfCurrentLetter,
  );

  const moveToResultPage = (subPage) => {
    navigate(`/practice/detail/${subPage}/test/result`, {
      state: { subPage, answers },
    });
  };

  const moveToSubMain = () => {
    navigate("/practice");
  };

  const initializeTest = () => {
    setQuestion({
      index: 0,
      answers: 0,
    });
  };

  const increaseIndex = () => {
    setQuestion((previous) => ({
      ...previous,
      index: previous.index + 1,
    }));

    setHint(false);
  };

  const shuffleGestures = () => {
    const result = [];
    const randomGestures = [];

    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * testGesturesList.length);

      if (result.includes(random)) {
        i--;
      } else {
        result.push(random);
      }
    }

    result.forEach((index) => {
      randomGestures.push(testGesturesList[index]);
    });

    setRandomLetters([...randomGestures]);
  };

  const handleTestInitialize = () => {
    initializeTest();
    shuffleGestures();
  };

  const handleHintShow = () => {
    setHint(!hint);
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
        const GE = new GestureEstimator(randomLetters);

        if (hand.length > 0) {
          const gesture = GE.estimate(hand, 7.5);
          console.log("gesture", gesture);

          if (
            gesture.bestGesture.length &&
            gesture.bestGesture[0].name === randomLetters[index]?.name
          ) {
            console.log("일치");
            setQuestion((previous) => ({
              ...previous,
              index: previous.index + 1,
              answers: previous.answers + 1,
            }));
            setHint(false);
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

    shuffleGestures();
    runHandpose();
  }, []);

  useInterval(() => {
    if (index === 5) {
      moveToResultPage(typeOfLetter);
      return;
    }

    if (detector) {
      detectHands(detector);
    }
  }, 200);

  return (
    <Container>
      <Header title="테스트하기" onClick={moveToSubMain} />
      <ContentWrapper>
        <SubWrapper>
          <VideoContent
            webcamRef={webcamRef}
            canvasRef={canvasRef}
            facingMode={FACING_MODE.user}
            leftButton={{ text: "다시 하기", onClick: handleTestInitialize }}
            rightButton={{ text: "다음 글자", onClick: increaseIndex }}
          />
        </SubWrapper>
        <SubWrapper>
          <Wrapper>
            <ImageBox onClick={handleHintShow}>
              {engNameOfCurrentLetter && hint ? (
                <Image
                  width="50%"
                  alt="example"
                  src={IMAGE[typeOfLetter]?.[engNameOfCurrentLetter]}
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
            <Text className="normal" color="red">{`문제: ${index + 1}번`}</Text>
            <Text className="normal">{`정답 수: ${answers} / 5 `}</Text>
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
  background-color: transparant;
`;
