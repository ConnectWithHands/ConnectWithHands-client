import React from "react";
import GestureListContent from "./GestureListContent";
import styled from "styled-components";

import logo from "../../assets/heart.png";

export default {
  title: "GestureList Component",
  component: GestureListContent,
};

const TITLE = "example";
const DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const ONCLICK = () => {};

export const GestureList = () => (
  <Container>
    <GestureListContent
      title={TITLE}
      description={DESCRIPTION}
      image={logo}
      buttonTitle={TITLE}
      onClick={ONCLICK}
    />
  </Container>
);

GestureList.story = {
  name: "GestureList",
};

const Container = styled.div`
  width: 1000px;
`;
