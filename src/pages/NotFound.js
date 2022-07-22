import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/media";

import Image from "../components/atoms/Image";
import Text from "../components/atoms/Text";
import Button from "../components/atoms/Button";

import { isMobile } from "../common/utilities";

import pageNotFound from "../assets/404.png";

function NotFound() {
  const navigate = useNavigate();

  const moveToPage = (pageName) => {
    navigate("/");
  };

  return (
    <Container>
      <Image
        width={isMobile() ? "40%" : "20%"}
        height={isMobile() ? "250px" : "400px"}
        alt="notFound"
        src={pageNotFound}
      />
      <Wrapper>
        <Text className="big">존재하지 않는 페이지 입니다</Text>
        <Button className="normal" onClick={moveToPage}>
          홈으로 가기
        </Button>
      </Wrapper>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media.small`
    flex-direction: column;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;
