import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResultsContextProvider } from "./store/resultsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultsContextProvider>
      <App />
    </ResultsContextProvider>
  </React.StrictMode>
);
