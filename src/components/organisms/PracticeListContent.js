import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import ButtonList from "../molecules/ButtonList";

function PracticeListContent({ data }) {
  const navigate = useNavigate();

  const moveToPage = (pageName) => {
    navigate(`/practice/${pageName}`);
  };

  return (
    <StyledContainer>
      <Image width="25%" height="70px" alt="logo" src={data.image} />
      <Wrapper>
        <Text className="big">{data.title}</Text>
        <Text className="small">{data.description}</Text>
      </Wrapper>
      <ButtonList flexDirection="column">
        <Button
          width="100px"
          height="40px"
          className="small"
          onClick={() => moveToPage("detail")}
        >
          연습하기
        </Button>
        <Button
          width="100px"
          height="40px"
          className="small"
          onClick={() => moveToPage("communication")}
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
  width: 90vw;
  height: 25vh;
  margin: 1em 0;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

PracticeListContent.propTypes = {
  description: PropTypes.string,
  data: PropTypes.array,
};
