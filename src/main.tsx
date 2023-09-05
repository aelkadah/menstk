import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-bootstrap";
import { Provider } from "react-redux";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import CustomRouterProvider from "./CustomRouterProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <Provider store={store}>
        <CustomRouterProvider />
        {/* <RouterProvider router={router} /> */}
      </Provider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        rtl
      />
    </ThemeProvider>
  </React.StrictMode>
);
