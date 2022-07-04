import React from "react";
import styled from "styled-components";

import PracticeListContent from "../../components/organisms/PracticeListContent";
import language from "../../assets/language";

function PracticeMain() {
  const practiceList = [
    { title: "한글 자음", description: "총 14개", image: language.consonant },
    { title: "한글 모음", description: "총 17개", image: language.vowel },
    { title: "알파벳", description: "총 26개", image: language.alphabet },
  ];

  return (
    <Container>
      <Wrapper>
        {practiceList.map((practice) => (
          <PracticeListContent key={practice.title} data={practice} />
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
