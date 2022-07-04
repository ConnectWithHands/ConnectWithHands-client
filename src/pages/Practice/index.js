import React from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";

import HeaderContent from "../../components/organisms/HeaderContent";

function Practice() {
  return (
    <Container>
      <HeaderContent title="수어 연습" />
      <Outlet />
    </Container>
  );
}

export default Practice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
