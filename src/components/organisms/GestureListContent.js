import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "../atoms/Text";
import Button from "../atoms/Button";

function GestureContent({ title, description, buttonTitle, page, onClick }) {
  return (
    <StyledContainer>
      <Wrapper>
        <Text className="big">{title}</Text>
        <Text className="small">{description}</Text>
      </Wrapper>
      <Button width="50vw" className="small" onClick={() => onClick(page)}>
        {buttonTitle}
      </Button>
    </StyledContainer>
  );
}

export default GestureContent;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  margin: 1.5em 0;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
`;

GestureContent.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  description: PropTypes.string,
  page: PropTypes.string,
  buttonTitle: PropTypes.string,
};
