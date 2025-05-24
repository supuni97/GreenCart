import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";

const App = () => {
  return (
    <Routes>
      {/* Public user routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:category" element={<ProductCategory />} />
      <Route path="/products/:category/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/add-address" element={<AddAddress />} />
      <Route path="/my-orders" element={<MyOrders />} />

      {/* Seller login */}
      <Route path="/seller-login" element={<SellerLogin />} />

      {/* Seller dashboard layout and nested routes */}
      <Route path="/seller" element={<SellerLayout />}>
        <Route index element={<AddProduct />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default App;
