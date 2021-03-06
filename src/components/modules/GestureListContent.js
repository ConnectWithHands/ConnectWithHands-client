import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../styles/media";

import Text from "../atoms/Text";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import ButtonList from "../modules/ButtonList";

import { isMobile } from "../../common/utilities";

function GestureContent({
  title,
  description,
  image,
  buttonTitle,
  page,
  onClick,
}) {
  return (
    <StyledContainer>
      <Image
        width={isMobile() ? "25%" : "15%"}
        height="250px"
        alt="icon"
        src={image}
      />
      <SubContainer>
        <Wrapper>
          <Text className="big">{title}</Text>
          <Text className="small">{description}</Text>
        </Wrapper>
        <Wrapper>
          <ButtonList width="100%">
            <Button
              width="50%"
              height="50px"
              bgColor="white"
              outline="#748DA6"
              className="small"
              onClick={() => onClick(page)}
            >
              {buttonTitle}
            </Button>
          </ButtonList>
        </Wrapper>
      </SubContainer>
    </StyledContainer>
  );
}

export default GestureContent;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 1em 0;
  border: 1px solid black;
  border-radius: 10px;

  ${media.small`
    flex-direction: column;
    height: 40vh;
  `}
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
  width: 50%;

  ${media.small`
    width: 90%;
    flex-direction: column;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  ${media.small`
    width: 90%;
    flex-direction: column;
  `}
`;

GestureContent.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.string,
  page: PropTypes.string,
  buttonTitle: PropTypes.string,
};
