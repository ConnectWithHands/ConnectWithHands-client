import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";

import {
  setHandDetector,
  drawHandKeypoints,
  useInterval,
} from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";

import HeaderContent from "../../components/organisms/HeaderContent";
import VideoContent from "../../components/organisms/VideoContent";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";

import ImageOfLetters from "../../assets/image";
import {
  FACING_MODE,
  PRACTICE_TITLE,
  LENGTH_LETTER_TYPE,
  LETTER,
  NAME_LETTER_TYPE,
} from "../../constants";

function TestDetail() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();
  const [detector, setDetector] = useState(false);
  const [hint, setHint] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(0);
  const [randomLetters, setRandomLetters] = useState([]);
  const typeOfLetter = params.id;
  const engNameOfCurrentLetter = randomLetters[index]?.name;
  const koreanNameOfCurrentLetter = LETTER[typeOfLetter].getKorName(
    engNameOfCurrentLetter,
  );

  const moveToResultPage = (subPage, answers) => {
    navigate(`/practice/detail/${subPage}/test/result`, {
      state: { subPage, answers },
    });
  };

  const moveToSubMain = () => {
    navigate("/practice");
  };

  const increaseIndex = () => {
    setIndex((previous) => previous + 1);
  };

  const shuffleGestures = (data) => {
    const length = LENGTH_LETTER_TYPE[data];
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

    setRandomLetters([...randomGestures]);
  };

  const handleTestInitialize = () => {
    setIndex(0);
    setAnswers(0);
    shuffleGestures(typeOfLetter);
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
          const gesture = GE.estimate(hand, 7);
          console.log("gesture", gesture);

          if (
            gesture.bestGesture.length &&
            gesture.bestGesture[0].name === randomLetters[index]?.name
          ) {
            setIndex((previous) => previous + 1);
            setAnswers((previous) => previous + 1);
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
      setDetector(detector);
    };

    shuffleGestures(typeOfLetter);
    runHandpose();
  }, []);

  useInterval(() => {
    if (index === 5) {
      moveToResultPage(typeOfLetter, answers);
      return;
    }

    if (detector) {
      detectHands(detector);
    }
  }, 200);

  return (
    <Container>
      <HeaderContent title="테스트하기" onClick={moveToSubMain} />
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
              index + 1
            }번,  정답: ${answers} / 5 `}</Text>
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
  background-color: null;
`;

const StyledCover = styled.div`
  width: 100%;
  z-index: 2;

  background-color: #9cb4cc;
`;
