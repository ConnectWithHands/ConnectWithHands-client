import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PracticeListContent from "../../components/organisms/PracticeListContent";
import { PRACTICE_LIST } from "../../constants/practice";

function PracticeMain() {
  const navigate = useNavigate();

  const moveToPage = (pageName, subPage) => {
    navigate(`/practice/${pageName}/${subPage}`);
  };

  return (
    <Container>
      <Wrapper>
        {PRACTICE_LIST.map((practice) => (
          <PracticeListContent
            key={practice.id}
            data={practice}
            onClick={moveToPage}
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
