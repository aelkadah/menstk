import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-bootstrap";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./styles/index.scss";
import { AdminPanel, HomePage, LoginPage } from "./layout";
import Header from "./components/utilities/Header";
import Footer from "./components/utilities/Footer";
import AdminOrdersPage from "./layout/admin/AdminOrdersPage";
import AdminProductsPage from "./layout/admin/AdminProductsPage";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<HomePage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/orders" element={<AdminOrdersPage />} />
      <Route path="/admin/products" element={<AdminProductsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
