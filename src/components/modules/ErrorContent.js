import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { isMobile } from "../../common/utilities";

function ErrorContent({ image, text, onClick }) {
  const imageWidth = isMobile() ? "50%" : "20%";
  const imageHeight = isMobile() ? "200px" : "400px";

  return (
    <StyledErrorContent>
      <Image width={imageWidth} height={imageHeight} alt="error" src={image} />
      <Text className="title">{text}</Text>
      {onClick && (
        <ButtonWrapper>
          <Button width="80%" className="normal" onClick={onClick}>
            홈으로 가기
          </Button>
        </ButtonWrapper>
      )}
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
  width: 100%;
`;

ErrorContent.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
};
