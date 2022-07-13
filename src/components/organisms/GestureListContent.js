import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "../atoms/Text";
import Button from "../atoms/Button";
import ButtonList from "../molecules/ButtonList";

function GestureContent({ title, description, buttonTitle, page, onClick }) {
  return (
    <StyledContainer>
      <Wrapper>
        <Text className="big">{title}</Text>
        <Text className="small">{description}</Text>
      </Wrapper>
      <Wrapper>
        <ButtonList width="100%">
          <Button
            width="80%"
            height="50px"
            className="small"
            onClick={() => onClick(page)}
          >
            {buttonTitle}
          </Button>
        </ButtonList>
      </Wrapper>
    </StyledContainer>
  );
}

export default GestureContent;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
  height: 25vh;
  margin: 1em 0;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 90%;
    flex-direction: column;
  }
`;

GestureContent.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  description: PropTypes.string,
  page: PropTypes.string,
  buttonTitle: PropTypes.string,
};
