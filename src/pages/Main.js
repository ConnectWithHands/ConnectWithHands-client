import React from "react";
import styled from "styled-components";

import MainContent from "../components/organisms/MainContent";

function Main() {
  return (
    <Container>
      <MainContent />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
