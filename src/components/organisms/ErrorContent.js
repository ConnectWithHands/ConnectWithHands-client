import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

function ErrorContent({ image, text }) {
  const navigate = useNavigate();
  const moveToMainPage = () => navigate("/");

  return (
    <StyledErrorContent>
      <Image width="50%" height="200px" alt="error" src={image} />
      <Text className="title">{text}</Text>
      <ButtonWrapper>
        <Button width="80vw" height="5vh" onClick={moveToMainPage}>
          홈으로 가기
        </Button>
      </ButtonWrapper>
    </StyledErrorContent>
  );
}

export default ErrorContent;

const StyledErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

ErrorContent.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
};
