import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Gesture() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Gesture;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
