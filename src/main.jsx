import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Counter from "./components/Counter.jsx";
import App from "./App.jsx";
import { ThangComponent } from "./components/ThangCompnent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <ThangComponent />
  </StrictMode>,
);
