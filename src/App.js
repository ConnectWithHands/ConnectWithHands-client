import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./components/common/globalStyle";
import Main from "./pages/Main";
import Practice from "./pages/Practice";
import Communication from "./pages/Communication";
import CommunicationList from "./pages/Communication/CommunicationList";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/communication" element={<Communication />}>
          <Route index element={<CommunicationList />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
