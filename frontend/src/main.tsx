import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from "react-helmet-async";
import {StoreProvider} from './Store'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
