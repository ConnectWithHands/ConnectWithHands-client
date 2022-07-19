import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { nanoid } from "nanoid";
import throttle from "lodash.throttle";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";

import {
  setHandDetector,
  drawHandKeypoints,
  useInterval,
} from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";

import Header from "../../components/molecules/Header";
import VideoContent from "../../components/organisms/VideoContent";
import Text from "../../components/atoms/Text";
import ButtonList from "../../components/molecules/ButtonList";
import Button from "../../components/atoms/Button";

import { WORD, FACING_MODE } from "../../constants";

function HandGesture() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [speech, setSpeech] = useState(null);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState([]);
  const [detector, setDetector] = useState(false);
  const [facingMode, setFacingMode] = useState(FACING_MODE.user);

  const handleWordsInitialize = () => {
    setWords([]);
  };

  const moveToSubMain = () => {
    navigate("/gesture");
  };

  const setUpSpeech = () => {
    const speech = new SpeechSynthesisUtterance();
    setSpeech(speech);
  };

  const handleSpeechStart = async (words) => {
    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices.find((voice) => voice.name === "Google 한국의");

    if (words.length) {
      speech.text = words;
      window.speechSynthesis.speak(speech);
    }
  };

  const handleSpeechStop = () => {
    window.speechSynthesis.pause();
    window.speechSynthesis.cancel();
  };

  const throttleHandler = useMemo(
    () =>
      throttle((value) => setWords((previous) => [...previous, value]), 3000),
    [setWords],
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
        const GE = new GestureEstimator(Gestures.words);

        if (hand.length > 0) {
          const gesture = GE.estimate(hand, 7.5);
          console.log("gesture", gesture);

          if (gesture.bestGesture.length) {
            const matchedGesture = gesture.bestGesture[0];

            switch (matchedGesture.name) {
              case "erase":
                setWords((previous) => {
                  const copy = [...previous];
                  copy.pop();

                  return [...copy];
                });
                break;
              case "speech":
                handleSpeechStart(words);
                break;
              default: {
                const scoreToPercentage = matchedGesture.score * 10;
                const scoreToString = `${(scoreToPercentage + "").substring(
                  0,
                  4,
                )}%`;

                setScore(scoreToString);
                throttleHandler(WORD[matchedGesture.name]);
              }
            }
          } else {
            setScore(0);
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
      console.log("detector ready");
    };

    setUpSpeech();
    runHandpose();
  }, []);

  useInterval(() => {
    if (detector) {
      detectHands(detector);
    }
  }, 500);

  useEffect(() => {
    return () => {
      throttleHandler.cancel();
    };
  }, []);

  return (
    <Container>
      <Header title="수어 인식하기" onClick={moveToSubMain} />
      <ContentWrapper>
        <SubWrapper>
          <VideoContent
            webcamRef={webcamRef}
            canvasRef={canvasRef}
            facingMode={facingMode}
            leftButton={{
              text: "카메라 전환",
              onClick: handleFacingModeChange,
            }}
            rightButton={{ text: "소리끄기", onClick: handleSpeechStop }}
          />
        </SubWrapper>
        <SubWrapper>
          <Text className="big">탐지된 수어</Text>
          <TextBox>
            {words.map((word) => (
              <Text key={nanoid()} className="normal">
                {word}
              </Text>
            ))}
          </TextBox>
          <TextWrapper>
            <Text className="normal">{`정확도 : ${score}`}</Text>
          </TextWrapper>
          <ButtonList width="90%">
            <Button
              width="80%"
              height="50px"
              className="normal"
              onClick={handleWordsInitialize}
            >
              초기화
            </Button>
            <Button
              width="80%"
              height="50px"
              className="normal"
              onClick={() => handleSpeechStart(words)}
            >
              텍스트 읽기
            </Button>
          </ButtonList>
        </SubWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default HandGesture;

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
  margin: auto 1rem;
  align-items: center;
  width: 100%;
`;

const TextBox = styled.div`
  flex-wrap: wrap;
  height: ${(props) => (props.height ? props.height : "12vh")};
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 80%;
  overflow-y: scroll;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 80%;
  margin: 0.5rem 0;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
