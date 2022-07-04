import React from "react";
import styled from "styled-components";

import VideoContent from "../../components/organisms/VideoContent";
import Image from "../../components/atoms/Image";
import Text from "../../components/atoms/Text";
import language from "../../assets/language";

function PracticeDetail() {
  return (
    <Container>
      <VideoContent />
      <Wrapper>
        <ImageBox>
          <Image width="100%" alt="example" src={language.alphabet} />
        </ImageBox>
        <TextBox>
          <Text className="small">자음</Text>
          <Text className="super">ㄱ</Text>
        </TextBox>
      </Wrapper>
      <TextWrapper>
        <Text className="normal">정확도</Text>
      </TextWrapper>
    </Container>
  );
}

export default PracticeDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`;

const TextWrapper = styled.div`
  width: 86vw;
  height: 10vh;
  line-height: 10vh;
  text-align: center;
  border: 1px solid black;
`;

const ImageBox = styled.div`
  display: flex;
  width: 40vw;
  height: 20vh;
  margin: 1.5em 0;
  border: 1px solid black;
`;

const TextBox = styled(ImageBox)`
  flex-direction: column;
  justify-content: center;
`;
