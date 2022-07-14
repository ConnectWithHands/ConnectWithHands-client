import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ButtonList from "../components/molecules/ButtonList";
import Image from "../components/atoms/Image";
import Text from "../components/atoms/Text";
import Button from "../components/atoms/Button";

import { isMobile } from "../common/utilities";

import logo from "../assets/heart.png";

function Main() {
  const navigate = useNavigate();

  const moveToPage = (pageName) => {
    navigate(`/${pageName}`);
  };

  const subTitle = `"손의 언어로 하나되다"`;

  const descriptionText =
    "손의 모양을 확인하세요!\n정확한 손 모양으로 수어를\n연습하고 소통할 수 있습니다.";

  return (
    <Container>
      <StyledMainContent>
        <Wrapper>
          <Image width="60%" height="400px" alt="logo" src={logo} />
          <TextBox>
            <Text color="#748DA6" className={isMobile() ? "title" : "super"}>
              수어지교(手語之交)
            </Text>
            <Text color="black" className="big">
              {subTitle}
            </Text>
            <Text color="black" className="big">
              {descriptionText}
            </Text>
          </TextBox>
        </Wrapper>
        <ButtonWrapper>
          <ButtonList width="100%" flexDirection="column">
            <Button
              width="80%"
              height="50px"
              className="normal"
              onClick={() => moveToPage("practice")}
            >
              수어 연습하기
            </Button>
            <Button
              width="80%"
              height="50px"
              className="normal"
              onClick={() => moveToPage("gesture")}
            >
              수어 인식하기
            </Button>
          </ButtonList>
        </ButtonWrapper>
      </StyledMainContent>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20vh;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
