import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";

import styled from "styled-components";

import { handleCorrectAnswers, initializeResult } from "../../store";

import HeaderContent from "../../components/organisms/HeaderContent";
import Button from "../../components/atoms/Button";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";
import congrats from "../../assets/congratulations.png";

function TestResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const [numOfCorrectAnswers] = useAtom(handleCorrectAnswers);
  const [, initailizeTest] = useAtom(initializeResult);

  const moveToHome = () => {
    initailizeTest();
    navigate(`/`);
  };

  const moveToTestPage = () => {
    initailizeTest();
    navigate(`/practice/detail/${location.state}/test`);
  };

  return (
    <Container>
      <HeaderContent title="수어 연습" onClick={moveToTestPage} />
      <Wrapper>
        <Image width="50vw" height="30vh" alt="congrats" src={congrats} />
      </Wrapper>
      <TextWrapper>
        <Text color="black" className="big">
          테스트 결과
        </Text>
        <Text color="black" className="normal">
          {`총 5문제 중 ${numOfCorrectAnswers} 정답`}
        </Text>
      </TextWrapper>
      <Wrapper>
        <Button width="80vw" className="normal" onClick={moveToTestPage}>
          다시 하기
        </Button>
        <Button width="80vw" className="normal" onClick={moveToHome}>
          홈으로 가기
        </Button>
      </Wrapper>
    </Container>
  );
}

export default TestResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

const TextWrapper = styled(Container)`
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 2rem 0;
`;
