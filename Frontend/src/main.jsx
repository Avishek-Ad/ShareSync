import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import URLProvider from "./Contexts/URLContext.jsx";

createRoot(document.getElementById("root")).render(
  <URLProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </URLProvider>
);
