import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import App from "./App";

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
