import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "../atoms/Text";
import Button from "../atoms/Button";

function CommunicationContent({ title, description, buttonTitle }) {
  const navigate = useNavigate();

  const moveToPage = (pageName) => {
    navigate(`/communication/${pageName}`);
  };

  return (
    <StyledContainer>
      <Wrapper>
        <Text className="big">{title}</Text>
        <Text className="small">{description}</Text>
      </Wrapper>
      <Button
        width="50vw"
        className="small"
        onClick={() => moveToPage("practice")}
      >
        {buttonTitle}
      </Button>
    </StyledContainer>
  );
}

export default CommunicationContent;

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

CommunicationContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
};
