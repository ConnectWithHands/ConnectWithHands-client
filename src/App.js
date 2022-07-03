import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./components/common/globalStyle";
import Main from "./pages/Main";
import Practice from "./pages/Practice";
import Communication from "./pages/Communication";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/communication" element={<Communication />} />
      </Routes>
    </>
  );
}

export default App;
