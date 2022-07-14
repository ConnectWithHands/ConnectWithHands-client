import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

serviceWorkerRegistration.register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <JotaiProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </JotaiProvider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
