import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./common/globalStyle";
import Main from "./pages/Main";
import Practice from "./pages/Practice";
import PracticeMain from "./pages/Practice/PracticeMain";
import PracticeDetail from "./pages/Practice/PracticeDetail";
import TestDetail from "./pages/Practice/TestDetail";
import TestResult from "./pages/Practice/TestResult";
import Communication from "./pages/Communication";
import CommunicationList from "./pages/Communication/CommunicationList";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/practice" element={<Practice />}>
          <Route index element={<PracticeMain />} />
          <Route path="detail/:id" element={<PracticeDetail />} />
          <Route path="detail/:id/test" element={<TestDetail />} />
          <Route path="detail/:id/test/result" element={<TestResult />} />
        </Route>
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
