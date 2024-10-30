import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ApiPlanetsProvider from "./context/ApiStarWarsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ApiPlanetsProvider>
    <App />
  </ApiPlanetsProvider>
);
