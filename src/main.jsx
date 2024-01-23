import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import React from "react";
import { FilteProvider } from "./CartExample/context/filters.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
