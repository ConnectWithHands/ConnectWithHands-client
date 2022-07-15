import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import ButtonList from "../molecules/ButtonList";

function PracticeListContent({ title, image, description, page, onClick }) {
  return (
    <StyledContainer>
      <Image width="25%" height="200px" alt="example" src={image} />
      <Wrapper>
        <Text className="big">{title}</Text>
        <Text className="small">{description}</Text>
      </Wrapper>
      <ButtonList width="40%" flexDirection="column">
        <Button
          width="80%"
          height="50px"
          className="small"
          onClick={() => onClick(page)}
        >
          연습하기
        </Button>
        <Button
          width="80%"
          height="50px"
          className="small"
          onClick={() => onClick(page, "test")}
        >
          테스트하기
        </Button>
      </ButtonList>
    </StyledContainer>
  );
}

export default PracticeListContent;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 25vh;
  margin: 1em 0;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

PracticeListContent.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  page: PropTypes.string,
  onClick: PropTypes.func,
};
