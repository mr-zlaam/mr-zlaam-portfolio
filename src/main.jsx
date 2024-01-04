import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "./04_Variables_And_StyleComponents/Variables/Fonts_And_Styles.scss";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./01_Context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
