import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { nanoid } from "nanoid";
import { throttle } from "lodash";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";

import { setHandDetector, drawHandKeypoints } from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";

import HeaderContent from "../../components/organisms/HeaderContent";
import VideoContent from "../../components/organisms/VideoContent";
import Text from "../../components/atoms/Text";
import ButtonList from "../../components/molecules/ButtonList";
import Button from "../../components/atoms/Button";

import { WORD } from "../../constants";

function HandGesture() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [speech, setSpeech] = useState(null);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState([]);
  const [detector, setDetector] = useState(false);
  const wordsRef = useRef(words);
  wordsRef.current = words;

  const handleWordsInitialize = () => {
    setWords([]);
  };

  const moveToSubMain = () => {
    navigate("/gesture");
  };

  const handleSpeechStart = (words) => {
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

          const bestGesture = gesture.map((hand) => {
            const score = hand.gestures.map((prediction) => prediction.score);
            const maxScore = score.indexOf(Math.max(...score));

            if (!hand.gestures.length) {
              return;
            }

            return hand.gestures[maxScore];
          });

          console.log("bestGesture", bestGesture);

          if (bestGesture.length > 1 && bestGesture[0] && bestGesture[1]) {
            const [hand1, hand2] = bestGesture;

            if (hand1.name === hand2.name) {
              const averageScore = (hand1.score + hand2.score) / 2;
              const scoreToString = (averageScore + "").substring(0, 4);

              throttleHandler(WORD[hand1.name]);
              setScore(scoreToString);
            }
          } else if (
            bestGesture.length === 1 &&
            bestGesture[0] &&
            bestGesture[0].numberOfHands === 1
          ) {
            if (bestGesture[0].name === "erase") {
              setWords((previous) => {
                const copy = [...previous];
                copy.pop();

                return [...copy];
              });
            } else if (bestGesture[0].name === "speech") {
              handleSpeechStart(wordsRef.current);
            } else {
              const scoreToString = (bestGesture[0].score + "").substring(0, 4);

              setScore(scoreToString);
              throttleHandler(WORD[bestGesture[0].name]);
            }
          }
        } else {
          setScore(0);
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
      const speech = new SpeechSynthesisUtterance();
      const voices = window.speechSynthesis.getVoices();
      speech.voice = voices.find((voice) => voice.name === "Google 한국의");

      console.log("detector ready");
      setDetector(detector);
      setSpeech(speech);
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
  }, [detector]);

  useEffect(() => {
    return () => {
      throttleHandler.cancel();
    };
  }, []);

  return (
    <Container>
      <HeaderContent title="수어 인식하기" onClick={moveToSubMain} />
      <ContentWrapper>
        <SubWrapper>
          <VideoContent webcamRef={webcamRef} canvasRef={canvasRef} />
        </SubWrapper>
        <SubWrapper>
          <Button className="normal" onClick={handleSpeechStop}>
            소리끄기
          </Button>
          <TextBox>
            {words.map((word) => (
              <Text key={nanoid()} className="big">
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
  margin: auto;

  align-items: center;
  width: 100%;
  margin: 1rem;
`;

const TextBox = styled.div`
  flex-wrap: wrap;
  height: 15vh;
  margin: 1rem 0;

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

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
