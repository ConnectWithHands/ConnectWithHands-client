import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";

import GlobalStyle from "./styles/globalStyle";
import Main from "./pages/Main";
import Practice from "./pages/Practice";
import PracticeMain from "./pages/Practice/PracticeMain";
import PracticeDetail from "./pages/Practice/PracticeDetail";
import PracticeAll from "./pages/Practice/PracticeAll";
import TestDetail from "./pages/Practice/TestDetail";
import TestResult from "./pages/Practice/TestResult";
import Gesture from "./pages/Gesture";
import GestureMain from "./pages/Gesture/GestureMain";
import SelfGesture from "./pages/Gesture/SelfGesture";
import HandGesture from "./pages/Gesture/HandGesture";
import NotFound from "./pages/NotFound";
import ErrorContent from "./components/modules/ErrorContent";

import { ERROR } from "./constants";
import error from "./assets/error.png";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Wrapper>
        <ErrorBoundary
          fallback={<ErrorContent text={ERROR.SOMETHING_ERROR} image={error} />}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/practice" element={<Practice />}>
              <Route index element={<PracticeMain />} />
              <Route path="detail/:id" element={<PracticeDetail />} />
              <Route path="detail/:id/test" element={<TestDetail />} />
              <Route path="detail/:id/test/result" element={<TestResult />} />
              <Route path="detail/all" element={<PracticeAll />} />
            </Route>
            <Route path="/gesture" element={<Gesture />}>
              <Route index element={<GestureMain />} />
              <Route path="handgesture" element={<HandGesture />} />
              <Route path="selfgesture" element={<SelfGesture />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f2d7d9;
  font-family: "Noto Sans CJK KR";
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
  height: 820px;
  background-color: white;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 100%;
  }
`;
