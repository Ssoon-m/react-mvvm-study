import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { initMocks } from "@mocks/index.ts";

async function bootstrapApp() {
  await initMocks();
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

bootstrapApp();
