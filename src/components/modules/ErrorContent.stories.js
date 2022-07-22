import React from "react";
import ErrorContent from "./ErrorContent";
import styled from "styled-components";

import IMAGE from "../../assets";

export default {
  title: "Error Component",
  component: ErrorContent,
};

const TEXT = "example";
const ONCLICK = () => {};

export const Error = () => (
  <Container>
    <ErrorContent image={IMAGE.icon.heart} text={TEXT} onClick={ONCLICK}>
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
