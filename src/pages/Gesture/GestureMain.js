import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import GestureContent from "../../components/organisms/GestureListContent";
import Header from "../../components/molecules/Header";
import { GESTURE_PAGE } from "../../constants/gesturePage";

function GestureMain() {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };

  const moveToSubPage = (subPage) => {
    navigate(`/gesture/${subPage}`);
  };

  return (
    <Container>
      <Header title="수어 인식하기" onClick={moveToHome} />
      <Wrapper>
        {GESTURE_PAGE.map((data) => (
          <GestureContent key={data.id} onClick={moveToSubPage} {...data} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default GestureMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
`;
