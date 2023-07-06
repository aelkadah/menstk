import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./styles/index.scss";
import { HomePage } from "./layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
