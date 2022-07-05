import React from "react";
import styled from "styled-components";

import CommunicationContent from "../../components/organisms/CommunicationListContent";
import { COMMUNICATION_LIST } from "../../constants/communication";

function CommunicationList() {
  return (
    <Container>
      {COMMUNICATION_LIST.map((data) => (
        <CommunicationContent key={data.id} {...data} />
      ))}
    </Container>
  );
}

export default CommunicationList;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
