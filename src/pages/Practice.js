import React from "react";
import styled from "styled-components";

import HeaderContent from "../components/organisms/HeaderContent";
import PracticeListContent from "../components/organisms/PracticeListContent";
import language from "../assets/language";

function Practice() {
  const practiceList = [
    { title: "한글 자음", description: "총 14개", image: language.consonant },
    { title: "한글 모음", description: "총 17개", image: language.vowel },
    { title: "알파벳", description: "총 26개", image: language.alphabet },
  ];

  return (
    <Container>
      <HeaderContent title="수어 연습" />
      <Wrapper>
        {practiceList.map((practice) => (
          <PracticeListContent key={practice.title} data={practice} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Practice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 640px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5em 0;
`;
