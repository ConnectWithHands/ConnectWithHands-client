import React from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";

function Practice() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Practice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
