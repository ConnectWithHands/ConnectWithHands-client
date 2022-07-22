/* eslint-disable no-constant-condition */

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/media";

import { nanoid } from "nanoid";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";

import Form from "../../components/modules/Form";
import ErrorContent from "../../components/modules/ErrorContent";
import ButtonList from "../../components/modules/ButtonList";
import Header from "../../components/modules/Header";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import TFwebcam from "../../components/atoms/TFwebcam";
import { isMobile } from "../../common/utilities";
import { FACING_MODE, ERROR } from "../../common/constants";

import { useInterval } from "../../common/utilities";
import IMAGE from "../../assets";

const defaultResult = {
  resultName: "미탐지",
  probability: "0",
};

function SelfGesture() {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [estimatedResult, setEstimatedResult] = useState(defaultResult);
  const [classifier, setClassifier] = useState(null);
  const [model, setModel] = useState(null);
  const [initialMode, setInitialMode] = useState(false);
  const [tfWebcam, setTfWebcam] = useState(null);
  const [gestureList, setGestureList] = useState([]);
  const [facingMode, setFacingMode] = useState(FACING_MODE.user);

  const runEstimator = async () => {
    if (
      !initialMode &&
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      setInitialMode(true);
    }

    if (classifier && model && tfWebcam) {
      if (classifier.getNumClasses() > 0) {
        const image = await tfWebcam.capture();
        const activation = model.infer(image, "conv_preds");
        const result = await classifier.predictClass(activation);
        const probability = (result.confidences[result.label] + "").substring(
          0,
          4,
        );

        setEstimatedResult((previous) => ({
          ...previous,
          resultName: result.label,
          probability: probability,
        }));

        image.dispose();
      }

      await tf.nextFrame();
    }
  };

  const addGesture = (value) => {
    setGestureList((previous) => [...previous, { id: nanoid(), name: value }]);
  };

  const trainGesture = async (classId) => {
    const image = await tfWebcam.capture();
    const activation = model.infer(image, true);

    classifier.addExample(activation, classId);
    image.dispose();
  };

  const initializeGesture = async () => {
    await classifier.clearAllClasses();
    setGestureList([]);
    setEstimatedResult(defaultResult);
  };

  const saveModel = async () => {
    const dataset = await classifier.getClassifierDataset();
    const stringDataset = JSON.stringify(
      Object.entries(dataset).map(([label, data]) => [
        label,
        Array.from(data.dataSync()),
        data.shape,
      ]),
    );
    const downloader = document.createElement("a");

    downloader.download = "model.json";
    downloader.href =
      "data:text/text;charset=utf-8," + encodeURIComponent(stringDataset);
    document.body.appendChild(downloader);
    downloader.click();
    downloader.remove();
  };

  const uploadModel = async (event) => {
    await classifier.clearAllClasses();
    await classifier.dispose();

    let inputModel = event.target.files;
    let fr = new FileReader();

    if (inputModel.length > 0) {
      const tempModel = knnClassifier.create();

      fr.onloadend = async () => {
        const dataset = fr.result;

        const tensorObj = Object.fromEntries(
          JSON.parse(dataset).map(([label, data, shape]) => [
            label,
            tf.tensor(data, shape),
          ]),
        );

        tempModel.setClassifierDataset(tensorObj);
        setClassifier(tempModel);
        event.target.value = "";

        console.log("Classifier has been set up! Congrats! ");
      };
    }

    await fr.readAsText(inputModel[0]);
    console.log("Uploaded");
  };

  const moveToSubMain = async () => {
    await classifier?.clearAllClasses();
    await classifier?.dispose();
    navigate("/gesture");
  };

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

  useEffect(() => {
    const runInitialModel = async () => {
      const classifier = knnClassifier.create();
      const mobilenetModel = await mobilenet.load();

      const video = webcamRef.current.video;
      const { videoWidth, videoHeight } = video;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      const webcam = await tf.data.webcam(webcamRef.current.video);
      setModel(mobilenetModel);
      setClassifier(classifier);
      setTfWebcam(webcam);
    };

    if (initialMode) {
      runInitialModel();
    }
  }, [initialMode]);

  useEffect;

  useInterval(() => {
    runEstimator();
  }, 500);

  return (
    <Container>
      {isMobile() ? (
        <ErrorContent
          image={IMAGE.icon.error}
          text={ERROR.MOBILE_FORBIDDEN}
          onClick={moveToSubMain}
        />
      ) : (
        <>
          <Header title="나만의 제스처" onClick={moveToSubMain} />
          <ContentWrapper>
            <SubWrapper>
              {initialMode && (
                <Button
                  width="50%"
                  height="50px"
                  className="small"
                  bgColor="white"
                  outline="#748DA6"
                  onClick={handleFacingModeChange}
                >
                  카메라 전환
                </Button>
              )}
              <TFwebcam ref={webcamRef} facingMode={facingMode} />
            </SubWrapper>
            <SubWrapper>
              <TextWrapper>
                <Text className="big" color="red">{`제스처 이름: ${
                  estimatedResult.resultName
                    ? estimatedResult.resultName
                    : defaultResult.resultName
                } `}</Text>
                <Text className="big">{`확률 :  ${
                  estimatedResult.probability
                    ? estimatedResult.probability
                    : defaultResult.probability
                } `}</Text>
              </TextWrapper>
              <FormContainer>
                <Form placeholder="학습할 제스처" onClick={addGesture}>
                  제스처 추가
                </Form>
                <ListContainer>
                  {gestureList.map((gesture) => (
                    <ListWrapper key={gesture.id}>
                      <Text width="65%">{gesture.name}</Text>
                      <Button
                        className="small"
                        onClick={() => trainGesture(gesture.name)}
                      >
                        학습
                      </Button>
                    </ListWrapper>
                  ))}
                </ListContainer>
                <Input
                  type="file"
                  className="small"
                  width="80%"
                  onChange={(event) => uploadModel(event)}
                />
              </FormContainer>
              <ButtonList width="90%">
                <Button
                  width="80%"
                  height="50px"
                  className="normal"
                  onClick={initializeGesture}
                >
                  초기화
                </Button>
                <Button
                  width="80%"
                  height="50px"
                  className="normal"
                  onClick={saveModel}
                >
                  저장하기
                </Button>
              </ButtonList>
            </SubWrapper>
          </ContentWrapper>
        </>
      )}
    </Container>
  );
}

export default SelfGesture;

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
  margin: 1rem;
  align-items: center;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 90%;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0.5rem 0;
  height: 15vh;
  border: 1px solid #808080;
  overflow-y: scroll;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.3rem 0;
`;
