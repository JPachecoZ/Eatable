import { Global } from "@emotion/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { global, reset } from "./styles";


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </React.StrictMode>
);
