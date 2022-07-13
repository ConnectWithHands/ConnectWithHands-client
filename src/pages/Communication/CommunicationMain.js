import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import HeaderContent from "../../components/organisms/HeaderContent";
import CommunicationContent from "../../components/organisms/GestureListContent";
import { COMMUNICATION_LIST } from "../../constants/gesturePage";

function CommunicationMain() {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };

  const moveToSubPage = (subPage) => {
    navigate(`/communication/${subPage}`);
  };

  return (
    <Container>
      <HeaderContent title="수어 인식하기" onClick={moveToHome} />
      <Wrapper>
        {COMMUNICATION_LIST.map((data) => (
          <CommunicationContent
            key={data.id}
            onClick={moveToSubPage}
            {...data}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

export default CommunicationMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
