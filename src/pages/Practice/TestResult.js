import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/media";

import ButtonList from "../../components/modules/ButtonList";
import Header from "../../components/modules/Header";
import Button from "../../components/atoms/Button";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";
import IMAGE from "../../assets";

function TestResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { subPage, answers } = location.state;

  const moveToHome = () => {
    navigate(`/`);
  };

  const moveToTestPage = () => {
    navigate(`/practice/detail/${subPage}/test`);
  };

  return (
    <Container>
      <Header title="테스트 결과" onClick={moveToTestPage} />
      <MainWrapper>
        <Wrapper>
          <Image
            width="50%"
            height="400px"
            alt="congrats"
            src={IMAGE.icon.congratulations}
          />
          <TextWrapper>
            <Text color="black" className="big">
              테스트 결과
            </Text>
            <Text color="black" className="normal">
              {`총 5문제 중 ${answers} 정답`}
            </Text>
          </TextWrapper>
        </Wrapper>
        <ButtonWrapper>
          <ButtonList width="100%" flexDirection="column">
            <Button
              width="80%"
              height="50px"
              className="normal"
              onClick={moveToTestPage}
            >
              다시 하기
            </Button>
            <Button
              width="80%"
              height="50px"
              className="normal"
              onClick={moveToHome}
            >
              홈으로 가기
            </Button>
          </ButtonList>
        </ButtonWrapper>
      </MainWrapper>
    </Container>
  );
}

export default TestResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media.small`
    flex-direction: column;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  ${media.small`
    flex-direction: column;
    width: 100%;
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 50%;

  ${media.small`
    width: 100%;
  `}
`;

const TextWrapper = styled(Container)`
  align-items: center;

  ${media.small`
    flex-direction: column;
    height: 30%;
  `}
`;
