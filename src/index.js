import { Global } from "@emotion/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Styles } from "./styles";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Styles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
