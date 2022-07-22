import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/media";

import ButtonList from "../components/modules/ButtonList";
import Image from "../components/atoms/Image";
import Text from "../components/atoms/Text";
import Button from "../components/atoms/Button";

import { isMobile } from "../common/utilities";

import IMAGE from "../assets";

function Main() {
  const navigate = useNavigate();

  const moveToPage = (pageName) => {
    navigate(`/${pageName}`);
  };

  return (
    <Container>
      <StyledMainContent>
        <Image
          width={isMobile() ? "50%" : "30%"}
          height={isMobile() ? "300px" : "400px"}
          alt="logo"
          src={IMAGE.icon.heart}
        />
        <ContentWrapper>
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
          <ButtonWrapper>
            <ButtonList width="100%" flexDirection="column">
              <Button
                width="60%"
                height="50px"
                className="normal"
                bgColor="white"
                outline="#748DA6"
                onClick={() => moveToPage("practice")}
              >
                수어 연습하기
              </Button>
              <Button
                width="60%"
                height="50px"
                className="normal"
                bgColor="white"
                outline="#748DA6"
                onClick={() => moveToPage("gesture")}
              >
                수어 인식하기
              </Button>
            </ButtonList>
          </ButtonWrapper>
        </ContentWrapper>
      </StyledMainContent>
    </Container>
  );
}

export default Main;

const subTitle = `"손의 언어로 하나되다"`;

const descriptionText =
  "화면에 비치는 손을 확인해 보세요!\n정확한 손 모양으로 수어를 연습하고\n실시간으로 소통할 수 있습니다.";

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

  ${media.small`
    flex-direction: column;
  `}
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 1.5rem 0;

  ${media.small`
    flex-direction: column;
    width: 100%;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  width: 60%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  height: auto;

  ${media.small`
    width: 100%;
    flex-direction: column;
  `}
`;
