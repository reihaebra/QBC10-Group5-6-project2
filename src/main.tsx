import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FavoriteProvider } from "./context/FavoriteContext";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found!");

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </BrowserRouter>
  </StrictMode>
);
