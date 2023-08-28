import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import {
  ErrorPage,
  Layout,
  HomePage,
  CategoriesPage,
  BrandsPage,
  ProductsPage,
  OneProductPage,
  CartPage,
  CheckoutPage,
  RegisterPage,
  LoginPage,
  ForgotPasswordPage,
  UserLayout,
  ProfilePage,
  AddressesPage,
  WishlistPage,
  UserOrdersPage,
  UserOrderDetailsPage,
  AdminLayout,
  DashboardPage,
  AdminOrdersPage,
  AdminOrderDetailsPage,
  AdminProductsPage,
  AddProductPage,
  AdminCategoriesPage,
  AdminOneCategoryPage,
  AdminBrandsPage,
  AdminCouponsPage,
} from "./layout";
import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";

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
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },

      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/forgotpassword", element: <ForgotPasswordPage /> },
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
      { path: "categories/:id", element: <AdminOneCategoryPage /> },
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
      { path: "addresses", element: <AddressesPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "orders", element: <UserOrdersPage /> },
      { path: "orders/:id", element: <UserOrderDetailsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <Provider store={store}>
        <RouterProvider router={router} />
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
