import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css"
const Dashboard = () => {
  const [productLength, setProductLength] = useState(0);
  const [customerLength, setCustomerLength] = useState(0);
  const [orderLength, setOrderLength] = useState(0);
  const [categoryLength, setCategoryLength] = useState(0);

  const fetchCount = async () => {
    try {
      const resProduct = await axios.get("http://localhost:5000/api/products");
      const resCategory = await axios.get("http://localhost:5000/api/category");
      const resCustomer = await axios.get("http://localhost:5000/api/customers");
      const resOrder = await axios.get("http://localhost:5000/api/orders");
      setProductLength(resProduct.data.length);
      setCategoryLength(resCategory.data.length);
      setCustomerLength(resCustomer.data.length);
      setOrderLength(resOrder.data.length);
    } catch (error) {
      console.error("Error fetching count", error);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);
  return (
    <div className="container">
      <div className="main-title d-flex justify-content-between">
        <h3>Dashboard</h3>
      </div>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1 g-2">
        <div className="col">
          <div className="card bg-primary text-white">
            <div className="card-inner d-flex justify-content-between align-items-center p-3">
              <h3>PRODUCTS</h3>
              <i className="ri-box-3-line card_icon"></i>
            </div>
            <h1 className="p-3">{ productLength }</h1>
          </div>
        </div>
        <div className="col">
          <div className="card bg-warning text-white">
            <div className="card-inner d-flex justify-content-between align-items-center p-3">
              <h3>CATEGORIES</h3>
              <i className="ri-folders-line card_icon"></i>
            </div>
            <h1 className="p-3">
              { categoryLength }
            </h1>
          </div>
        </div>
        <div className="col">
          <div className="card bg-success text-white">
            <div className="card-inner d-flex justify-content-between align-items-center p-3">
              <h3>CUSTOMERS</h3>
              <i className="ri-group-3-line card_icon"></i>
            </div>
            <h1 className="p-3">
              { customerLength }
            </h1>
          </div>
        </div>
        <div className="col">
          <div className="card bg-danger text-white">
            <div className="card-inner d-flex justify-content-between align-items-center p-3">
              <h3>ORDERS</h3>
              <i className="ri-shopping-cart-2-line card_icon"></i>
            </div>
            <h1 className="p-3">
              { orderLength }
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
