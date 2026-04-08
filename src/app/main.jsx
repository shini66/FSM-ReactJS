import App from "@/app/App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
