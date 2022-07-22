import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/media";

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
  justify-content: center;
  width: 100%;
  height: 100%;

  ${media.small`
    flex-direction: column;
  `}
`;
