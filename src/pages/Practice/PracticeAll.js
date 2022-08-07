import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/media";

import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import { useAtom } from "jotai";

import {
  setHandDetector,
  drawHandKeypoints,
  getPercentage,
  useInterval,
  checkOnline,
} from "../../common/utilities";
import { GestureEstimator, Gestures } from "../../common/Fingerpose";
import { modalType } from "../../store";

import VideoCanvas from "../../components/modules/VideoCanvas";
import Header from "../../components/modules/Header";
import Modal from "../../components/modules/Modal";
import Text from "../../components/atoms/Text";
import SelectBox from "../../components/atoms/Select";
import Button from "../../components/atoms/Button";

import {
  FACING_MODE,
  LETTER,
  PRACTICE_SELECT,
  MODAL_TYPE,
  NAME_LETTER_TYPE,
  ERROR,
} from "../../common/constants";

function PracticeAll() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [detector, setDetector] = useState(false);
  const [type, setType] = useState("consonants");
  const [score, setScore] = useState(0);
  const [modal, setModal] = useAtom(modalType);
  const [detectedGesture, setDetectedGesture] = useState("");
  const [xCordination, setXCordination] = useState([]);
  const koreanNameOfCurrentLetter = LETTER[type].getKorName(detectedGesture);

  const moveToSubMain = () => {
    navigate("/practice");
  };

  const handleModalClose = () => {
    setModal(MODAL_TYPE.NONE);
  };

  const handleSelectChange = (event) => setType(event.target.value);

  const checkSpecialCase = (type, gesture) => {
    const specialConsonants = ["giyeok", "digeut", "bieup", "siot", "jieut"];

    if (type === NAME_LETTER_TYPE.consonants) {
      if (specialConsonants.includes(gesture.name)) return true;
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
        const GE = new GestureEstimator(Gestures[type]);

        if (hand.length > 0) {
          const gesture = GE.estimate(hand, 8);
          console.log("gesture", gesture);

          if (gesture.bestGesture.length) {
            const highestScore = gesture.bestGesture[0];
            const isSpecial = checkSpecialCase(type, highestScore);

            if (isSpecial) {
              if (setXCordination.length === 10) {
                setXCordination([]);
                return;
              }

              const xValue = hand[0].keypoints[0].x;
              setXCordination((previous) => [...previous, xValue]);

              const max = Math.max(...xCordination);
              const min = Math.min(...xCordination);

              if (max - min > 100) {
                setDetectedGesture(`ssang${highestScore.name}`);
              } else {
                setDetectedGesture(highestScore.name);
              }
              const score = getPercentage(highestScore.score);
              setScore(score);
            } else {
              const score = getPercentage(highestScore.score);
              setScore(score);
              setDetectedGesture(highestScore.name);
            }
          }
        } else {
          setXCordination([]);
        }

        const ctx = canvasRef.current.getContext("2d");
        drawHandKeypoints(hand, ctx);
      } catch (error) {
        console.log("error", error);
        detector.dispose();
      }
    } else {
      setModal(MODAL_TYPE.ERROR);
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
          {!checkOnline() && (
            <Text className="normal" color="red">
              {ERROR.OFFLINE}
            </Text>
          )}
          <VideoCanvas
            webcamRef={webcamRef}
            canvasRef={canvasRef}
            facingMode={FACING_MODE.user}
          />
        </SubWrapper>
        <SubWrapper>
          <Wrapper>
            <SelectBox data={PRACTICE_SELECT} onChange={handleSelectChange} />
            <TextBox>
              <Text className="super">{koreanNameOfCurrentLetter}</Text>
            </TextBox>
          </Wrapper>
          <TextWrapper>
            <Text className="normal">{`정확도: ${score}`}</Text>
          </TextWrapper>
        </SubWrapper>
      </ContentWrapper>
      {modal === MODAL_TYPE.ERROR && (
        <Modal onClose={handleModalClose}>
          <Text className="big">{ERROR.CAMERA_UNDETECTED.title}</Text>
          <Text className="normal">{ERROR.CAMERA_UNDETECTED.description}</Text>
          <Button
            className="normal"
            width="50%"
            height="50px"
            onClick={moveToSubMain}
          >
            메인으로 돌아가기
          </Button>
        </Modal>
      )}
    </Container>
  );
}

export default PracticeAll;

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
  margin: auto 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: auto;

  ${media.small`
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
