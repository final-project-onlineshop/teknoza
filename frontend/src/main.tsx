import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <PayPalScriptProvider deferLoading={true}>
       
          <App />
        
      </PayPalScriptProvider>
    </HelmetProvider>
  </React.StrictMode>
);
