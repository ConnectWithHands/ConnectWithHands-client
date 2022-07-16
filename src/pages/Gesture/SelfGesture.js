/* eslint-disable no-constant-condition */

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { nanoid } from "nanoid";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";

import HeaderContent from "../../components/organisms/HeaderContent";
import FormContent from "../../components/organisms/FormContent";
import ErrorContent from "../../components/organisms/ErrorContent";
import ButtonList from "../../components/molecules/ButtonList";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Video from "../../components/atoms/Video";
import { isMobile } from "../../common/utilities";
import { FACING_MODE, ERROR } from "../../constants";

import MobileError from "../../assets/desktop.png";

function SelfGesture() {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [estimatedResult, setEstimatedResult] = useState({
    resultName: "미탐지",
    probability: "0",
  });
  const [classifier, setClassifier] = useState(null);
  const [model, setModel] = useState(null);
  const [tfWebcam, setTfWebcam] = useState(null);
  const [initialMode, setInitialMode] = useState(false);
  const [gestureList, setGestureList] = useState([]);

  const runEstimator = async () => {
    if (classifier && model && tfWebcam) {
      while (true) {
        if (classifier.getNumClasses() > 0) {
          const image = await tfWebcam.capture();
          const activation = model.infer(image, "conv_preds");
          const result = await classifier.predictClass(activation);

          setEstimatedResult((previous) => ({
            ...previous,
            resultName: result.label,
            probability: result.confidences[result.label],
          }));

          image.dispose();
        }

        await tf.nextFrame();
      }
    }
  };

  const addGesture = (value) => {
    setGestureList((previous) => [...previous, { id: nanoid(), name: value }]);
  };

  const trainGesture = async (classId) => {
    console.log("학습");
    const image = await tfWebcam.capture();
    const activation = model.infer(image, true);

    classifier.addExample(activation, classId);
    image.dispose();
  };

  const initializeGesture = async () => {
    await classifier.clearAllClasses();
    setGestureList([]);
  };

  const saveModel = async () => {
    const dataset = await classifier.getClassifierDataset();

    let stringDataset = JSON.stringify(
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

    setInitialMode(false);
    console.log("Uploading");
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
        setInitialMode(true);
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

  useEffect(() => {
    const runModel = async () => {
      const classifier = knnClassifier.create();
      setClassifier(classifier);
      const mobilenetModel = await mobilenet.load();
      setModel(mobilenetModel);
      const webcam = await tf.data.webcam(webcamRef.current.video);
      setTfWebcam(webcam);
      setInitialMode(true);
      console.log("model loaded");
    };

    if (!isMobile()) {
      runModel();
    }
  }, []);

  useEffect(() => {
    if (webcamRef.current) {
      runEstimator();
    }
  }, [webcamRef]);

  useEffect(() => {
    let timerId;

    if (initialMode) {
      timerId = setInterval(() => {
        runEstimator();
      }, 1000);

      console.log(timerId);
    }

    return () => clearInterval(timerId);
  }, [initialMode]);

  return (
    <Container>
      {isMobile() ? (
        <ErrorContent
          image={MobileError}
          text={ERROR.MOBILE_FORBIDDEN}
          onClick={moveToSubMain}
        />
      ) : (
        <>
          <HeaderContent title="나만의 제스처" onClick={moveToSubMain} />
          <ContentWrapper>
            <SubWrapper>
              <Video
                ref={webcamRef}
                setWidth={true}
                facingMode={FACING_MODE.user}
              />
            </SubWrapper>
            <SubWrapper>
              <TextWrapper>
                <StyledText>탐지된 제스처 : </StyledText>
                <StyledText>{estimatedResult.resultName}</StyledText>
                <StyledText>{estimatedResult.probability}</StyledText>
              </TextWrapper>
              <FormContent placeholder="학습할 제스처" onClick={addGesture} />
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
                onChange={(event) => uploadModel(event)}
              />
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

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.div`
  margin: 0.5rem 0.2rem;
  font-size: 1.1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 90%;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
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
