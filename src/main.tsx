import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "./context/FavoriteContext";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found!");

createRoot(rootElement).render(
  <StrictMode>
    <FavoriteProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoriteProvider>
  </StrictMode>
);
