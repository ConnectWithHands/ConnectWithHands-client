import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import HeaderContent from "../../components/organisms/HeaderContent";

function Communication() {
  return (
    <Container>
      <HeaderContent title="대화하기" />
      <Outlet />
    </Container>
  );
}

export default Communication;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
