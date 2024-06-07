import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Users from "../pages/Users/Users"
import Products from "../pages/Products/Products"
import Category from "../pages/Category/Category"
import Customers from "../pages/Customers/Customers"
import Orders from "../pages/Orders/Orders"
import Reports from "../pages/Reports/Reports"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />}  />
      <Route path="/dashboard" element={<Dashboard />}  />
      <Route path="/users" element={<Users />}  />
      <Route path="/products" element={<Products />}  />
      <Route path="/category" element={<Category />}  />
      <Route path="/customers" element={<Customers />}  />
      <Route path="/orders" element={<Orders />}  />
      <Route path="/reports" element={<Reports />}  />
    </Routes>
  )
}

export default Routers