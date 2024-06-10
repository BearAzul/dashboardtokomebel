import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users/Users";
import Products from "../pages/Products/Products";
import Category from "../pages/Category/Category";
import Customers from "../pages/Customers/Customers";
import Orders from "../pages/Orders/Orders";
import Reports from "../pages/Reports/Reports";

import FormProduct from "../pages/Products/FormProducts";
import FormCustomers from "../pages/Customers/FormCustomers";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Users */}
      <Route path="/admin" element={<Users />} />

      {/* Products */}
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<FormProduct />} />
      <Route path="/products/edit/:id" element={<FormProduct />} />

      {/* Categories */}
      <Route path="/category" element={<Category />} />

      {/* Customers */}
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/add" element={<FormCustomers />} />

      {/* Orders */}
      <Route path="/orders" element={<Orders />} />

      {/* Reports */}
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};

export default Routers;
