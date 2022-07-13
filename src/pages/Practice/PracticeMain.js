import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PracticeListContent from "../../components/organisms/PracticeListContent";
import HeaderContent from "../../components/organisms/HeaderContent";

import { PRACTICE_LIST } from "../../constants/practice";

function PracticeMain() {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };

  const moveToSubPage = (subPage, test = "") => {
    navigate(`/practice/detail/${subPage}/${test}`);
  };

  return (
    <Container>
      <HeaderContent title="수어 연습" onClick={moveToHome} />
      <Wrapper>
        {PRACTICE_LIST.map((data) => (
          <PracticeListContent
            key={data.id}
            onClick={moveToSubPage}
            {...data}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

export default PracticeMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
`;
