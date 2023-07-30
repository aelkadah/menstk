import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Header, Footer } from "./components";
import {
  ErrorPage,
  HomePage,
  CategoriesPage,
  BrandsPage,
  ProductsPage,
  OneProductPage,
  LoginPage,
  RegisterPage,
  UserLayout,
  ProfilePage,
  AdminLayout,
  DashboardPage,
  AdminOrdersPage,
  AdminOrderDetailsPage,
  AdminProductsPage,
  AddProductPage,
  AdminCategoriesPage,
  AdminSubCategoriesPage,
  AdminBrandsPage,
  AdminCouponsPage,
} from "./layout";
import { ThemeProvider } from "react-bootstrap";
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
      { path: "/brands", element: <BrandsPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <OneProductPage /> },

      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
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
      { path: "orders/:id", element: <AdminOrderDetailsPage /> },
      { path: "products", element: <AdminProductsPage /> },
      { path: "products/add", element: <AddProductPage /> },
      { path: "categories", element: <AdminCategoriesPage /> },
      { path: "subcategories", element: <AdminSubCategoriesPage /> },
      { path: "brands", element: <AdminBrandsPage /> },
      { path: "coupons", element: <AdminCouponsPage /> },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Navigate to="profile" replace /> },
      { path: "profile", element: <ProfilePage /> },
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
