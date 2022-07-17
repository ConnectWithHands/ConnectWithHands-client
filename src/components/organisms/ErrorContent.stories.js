import React from "react";
import ErrorContent from "./ErrorContent";
import styled from "styled-components";

import logo from "../../assets/heart.png";

export default {
  title: "Error Component",
  component: ErrorContent,
};

const TEXT = "example";
const ONCLICK = () => {};

export const Error = () => (
  <Container>
    <ErrorContent image={logo} text={TEXT} onClick={ONCLICK}>
      example
    </ErrorContent>
  </Container>
);

Error.story = {
  name: "ErrorContent",
};

const Container = styled.div`
  width: 500px;
`;
