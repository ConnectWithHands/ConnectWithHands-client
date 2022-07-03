import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ButtonList from "../molecules/ButtonList";
import Title from "../molecules/Title";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

import logo from "../../assets/logo192.png";

function MainContent() {
  const navigate = useNavigate();

  const moveToPage = (pageName) => {
    navigate(`/${pageName}`);
  };

  const subTitle = `"손의 언어로 하나되다"`;

  const descriptionText =
    "손의 모양을 확인하세요!\n정확한 손 모양으로 수어를\n연습하고 소통할 수 있습니다.";

  return (
    <StyledMainContent>
      <Image width="40%" height="180px" alt="logo" src={logo} />
      <Title color="black">수어지교(手語之交)</Title>
      <Wrapper>
        <Text color="black" className="normal">
          {subTitle}
        </Text>
        <Text color="black" className="normal">
          {descriptionText}
        </Text>
      </Wrapper>
      <ButtonList flexDirection="column">
        <Button
          width="250px"
          height="50px"
          className="normal"
          onClick={() => moveToPage("practice")}
        >
          수어 연습
        </Button>
        <Button
          width="250px"
          height="50px"
          className="normal"
          onClick={() => moveToPage("communication")}
        >
          실시간 대화하기
        </Button>
      </ButtonList>
    </StyledMainContent>
  );
}

export default MainContent;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

MainContent.propTypes = {};
