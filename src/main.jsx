import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FilteProvider } from "./context/filters.jsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilteProvider>
      <App />
    </FilteProvider>
  </StrictMode>
);
