import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/media";

import { nanoid } from "nanoid";
import { useAtom } from "jotai";
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
import { modalType } from "../../store";

import Header from "../../components/modules/Header";
import VideoContent from "../../components/modules/VideoContent";
import Modal from "../../components/modules/Modal";
import ButtonList from "../../components/modules/ButtonList";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";

import {
  WORD,
  FACING_MODE,
  EXAMPLE_IMAGE,
  MODAL_TYPE,
} from "../../common/constants";
import { isMobile } from "@tensorflow/tfjs-core/dist/device_util";

function HandGesture() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [speech, setSpeech] = useState(null);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState([]);
  const [speechStatus, setSpeechStatus] = useState(false);
  const [detector, setDetector] = useState(false);
  const [facingMode, setFacingMode] = useState(FACING_MODE.user);
  const [modal, setModal] = useAtom(modalType);

  const handleWordsInitialize = () => {
    setWords([]);
  };

  const moveToSubMain = () => {
    navigate("/gesture");
  };

  const setUpSpeech = async () => {
    const speech = new SpeechSynthesisUtterance();
    setSpeech(speech);
  };

  const handleSpeechStart = async (words) => {
    setSpeechStatus(true);
    if (speech.voice === null) {
      const voices = window.speechSynthesis.getVoices();
      speech.voice = voices.find((voice) => voice.name === "Google 한국의");
    }

    if (speech && words.length) {
      speech.text = words;
      window.speechSynthesis.speak(speech);
    }
  };

  const handleSpeechStop = () => {
    setSpeechStatus(false);
    window.speechSynthesis.pause();
    window.speechSynthesis.cancel();
  };

  const handleModalOpen = () => {
    setModal(MODAL_TYPE.INFO);
  };

  const handleModalClose = () => {
    setModal(MODAL_TYPE.NONE);
  };

  const addWordThrottle = useMemo(
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
        const hand = await detector.estimateHands(webcamRef.current.video);
        const GE = new GestureEstimator(Gestures.words);

        if (window.speechSynthesis.speaking === false) {
          setSpeechStatus(false);
        }

        if (hand.length > 0) {
          const gesture = GE.estimate(hand, 8);
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
                if (window.speechSynthesis.speaking === false) {
                  handleSpeechStart(words);
                }
                break;
              default: {
                const scoreToPercentage = matchedGesture.score * 10;
                const scoreToString = `${(scoreToPercentage + "").substring(
                  0,
                  4,
                )}%`;

                setScore(scoreToString);

                if (words[words.length - 1] !== WORD[matchedGesture.name]) {
                  addWordThrottle(WORD[matchedGesture.name]);
                }
              }
            }
          } else {
            setScore(0);
            addWordThrottle.cancel();
          }
        } else {
          addWordThrottle.cancel();
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
      addWordThrottle.cancel();
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
            rightButton={{ text: "제스처 보기", onClick: handleModalOpen }}
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
              onClick={
                speechStatus ? handleSpeechStop : () => handleSpeechStart(words)
              }
            >
              {speechStatus ? "읽기 종료" : "텍스트 읽기"}
            </Button>
          </ButtonList>
        </SubWrapper>
      </ContentWrapper>
      {modal === MODAL_TYPE.INFO && (
        <Modal onClose={handleModalClose}>
          <Text className="normal">등록된 제스처 예시</Text>
          <ImageWrapper>
            {EXAMPLE_IMAGE.map((image) => (
              <Image
                width={isMobile() ? "50%" : "30%"}
                src={image.url}
                key={image.id}
                alt="example"
              />
            ))}
          </ImageWrapper>
        </Modal>
      )}
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

  ${media.small`
    flex-direction: column;
  `}
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 1rem;
  align-items: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

  ${media.small`
    width: 90%;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 80%;
  margin: 0.5rem 0;

  ${media.small`
    width: 90%;
  `}
`;

const Image = styled.img`
  margin: 1rem;
`;
