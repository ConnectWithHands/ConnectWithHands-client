import React from "react";
import PracticeListContent from "./PracticeListContent";
import styled from "styled-components";

import logo from "../../assets/heart.png";

export default {
  title: "PracticeList Component",
  component: PracticeListContent,
};

const TITLE = "example";
const DESCRIPTION = "Lorem Ipsum is simply dummy text";
const ONCLICK = () => {};

export const PracticeList = () => (
  <Container>
    <PracticeListContent
      title={TITLE}
      description={DESCRIPTION}
      image={logo}
      onClick={ONCLICK}
    />
  </Container>
);

PracticeList.story = {
  name: "PracticeList",
};

const Container = styled.div`
  width: 1000px;
`;
