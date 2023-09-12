import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
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
  ProductsByBrandPage,
  ProductsByCategoryPage,
  SearchProductsPage,
} from "./layout";
import ProtectedRouteHook from "./hooks/auth/ProtectedRouteHook";

const CustomRouterProvider = () => {
  const [isUser, isAdmin] = ProtectedRouteHook();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/categories", element: <CategoriesPage /> },
        { path: "/categories/:id", element: <ProductsByCategoryPage /> },
        { path: "/brands", element: <BrandsPage /> },
        { path: "/brands/:id", element: <ProductsByBrandPage /> },
        { path: "/products", element: <ProductsPage /> },
        { path: "/products/:id", element: <OneProductPage /> },
        { path: "/search", element: <SearchProductsPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/checkout", element: <CheckoutPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/forgotpassword", element: <ForgotPasswordPage /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout auth={isAdmin} />,
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
      element: <UserLayout auth={isUser} />,
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

  return <RouterProvider router={router} />;
};

export default CustomRouterProvider;
