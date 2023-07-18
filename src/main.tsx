import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import {
  AdminLayout,
  AdminOrdersPage,
  AdminProductsPage,
  CategoriesPage,
  DashboardPage,
  ErrorPage,
  HomePage,
} from "./layout";
import { Footer, Header } from "./components";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./styles/index.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/categories", element: <CategoriesPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "orders", element: <AdminOrdersPage /> },
      { path: "products", element: <AdminProductsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { ThemeProvider } from "react-bootstrap";
// import {
//   Outlet,
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.rtl.min.css";
// import "./styles/index.scss";

// import { Header, Footer } from "./components";
// import {
//   ErrorPage,
//   HomePage,
//   CategoriesPage,
//   BrandsPage,
//   ProductsPage,
//   OneProductPage,
//   LoginPage,
//   RegisterPage,
//   DashboardPage,
//   AdminOrdersPage,
//   AdminProductsPage,
// } from "./layout";

// const Layout = () => {
//   return (
//     <>
//       {/* <Header /> */}
//       <Outlet />
//       {/* <Footer /> */}
//     </>
//   );
// };

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Layout />} errorElement={<ErrorPage />}>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/categories" element={<CategoriesPage />} />
//       <Route path="/brands" element={<BrandsPage />} />

//       <Route path="/products" element={<ProductsPage />} />
//       <Route path="/products/:id" element={<OneProductPage />} />

//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/register" element={<RegisterPage />} />

//       <Route path="/admin/dashboard" element={<DashboardPage />} />
//       <Route path="/admin/orders" element={<AdminOrdersPage />} />
//       <Route path="/admin/products" element={<AdminProductsPage />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <ThemeProvider dir="rtl">
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   </React.StrictMode>
// );
