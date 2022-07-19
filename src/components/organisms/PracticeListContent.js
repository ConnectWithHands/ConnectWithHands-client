import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import ButtonList from "../molecules/ButtonList";

import { isMobile } from "../../common/utilities";

function PracticeListContent({ title, image, description, page, onClick }) {
  return (
    <StyledContainer>
      <Image
        width={isMobile() ? "20%" : "15%"}
        height="180px"
        alt="example"
        src={image}
      />
      <Wrapper>
        <Text className="big">{title}</Text>
        <Text className="small">{description}</Text>
      </Wrapper>
      <ButtonList width="40%" flexDirection="column">
        <Button
          width="80%"
          height="50px"
          bgColor="white"
          outline="#748DA6"
          className="small"
          onClick={() => onClick(page)}
        >
          연습하기
        </Button>
        {title !== "자/모음" ? (
          <Button
            width="80%"
            height="50px"
            bgColor="white"
            outline="#748DA6"
            className="small"
            onClick={() => onClick(page, "test")}
          >
            테스트하기
          </Button>
        ) : null}
      </ButtonList>
    </StyledContainer>
  );
}

export default PracticeListContent;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70%;
  margin: 1em 0;
  border: 1px solid black;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
`;

PracticeListContent.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  page: PropTypes.string,
  onClick: PropTypes.func,
};
