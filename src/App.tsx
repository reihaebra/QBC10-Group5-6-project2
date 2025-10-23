import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import FavoritePage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
import ShoppingProgressPage from "./pages/ShoppingProgressPage";
import ProfilePage from "./pages/ProfilePage";
import CheckoutPage from "./pages/CheckoutPage";
import UserOrdersPage from "./pages/UserOrdersPage";
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import OrdersDeliverOptionPage from "./pages/OrdersDeliverOptionPage";
import OrdersDeliveredPage from "./pages/OrdersDeliveredPage";
import UsersPage from "./pages/UsersPage";
import Dashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import AllProducts from "./pages/AllProducts";
import CartProvider from "./context/CartContextProvider";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./layouts/PrivateRoute";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/user/home" element={<HomePage />} />
        <Route path="/user/shop" element={<ShopPage />} />
        <Route path="/user/shop/:productId" element={<ProductPage />} />
        <Route
          path="/user/favorites"
          element={
            <PrivateRoute>
              <FavoritePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/shop-progress"
          element={
            <PrivateRoute>
              <ShoppingProgressPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/my-orders"
          element={
            <PrivateRoute>
              <UserOrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/my-orders/:orderId"
          element={
            <PrivateRoute>
              <OrderDetailPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute adminOnly>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/all-users"
          element={
            <PrivateRoute adminOnly>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/orders/:orderId/delivered"
          element={
            <PrivateRoute adminOnly>
              <OrdersDeliveredPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <PrivateRoute adminOnly>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/orders/:orderId"
          element={
            <PrivateRoute adminOnly>
              <OrdersDeliverOptionPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/create-product"
          element={
            <PrivateRoute adminOnly>
              <CreateProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-product"
          element={
            <PrivateRoute adminOnly>
              <EditProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/all-products"
          element={
            <PrivateRoute adminOnly>
              <AllProducts />
            </PrivateRoute>
          }
        />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
