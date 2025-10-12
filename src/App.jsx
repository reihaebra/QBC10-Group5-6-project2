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
import UsersPage from "./pages/UsersPage";
import Dashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import AllProducts from "./pages/AllProducts";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user/home" element={<HomePage />} />
      <Route path="/user/shop" element={<ShopPage />} />
      <Route path="/user/shop/:productId" element={<ProductPage />} />
      <Route path="/user/favorites" element={<FavoritePage />} />
      <Route path="/user/cart" element={<CartPage />} />
      <Route path="/user/shop-progress" element={<ShoppingProgressPage />} />
      <Route path="/user/checkout" element={<CheckoutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/user/my-orders" element={<UserOrdersPage />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/all-users" element={<UsersPage />} />
      <Route path="/admin/orders" element={<OrderPage />} />
      <Route path="/admin/orders-detail" element={<OrderDetailPage />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/admin/all-products" element={<AllProducts />} />
      <Route path="/admin/edit-product" element={<EditProduct />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default App;
