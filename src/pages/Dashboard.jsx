import "../styles/App.css"
const Dashboard = () => {
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
            <h1 className="p-3">300</h1>
          </div>
        </div>
        <div className="col">
          <div className="card bg-warning text-white">
            <div className="card-inner d-flex justify-content-between align-items-center p-3">
              <h3>CATEGORIES</h3>
              <i className="ri-folders-line card_icon"></i>
            </div>
            <h1 className="p-3">10</h1>
          </div>
        </div>
        <div className="col">
          <div className="card bg-success text-white">
            <div className="card-inner d-flex justify-content-between align-items-center p-3">
              <h3>CUSTOMERS</h3>
              <i className="ri-group-3-line card_icon"></i>
            </div>
            <h1 className="p-3">20</h1>
          </div>
        </div>
        <div className="col">
          <div className="card bg-danger text-white">
            <div className="card-inner d-flex justify-content-between align-items-center p-3">
              <h3>ORDERS</h3>
              <i className="ri-shopping-cart-2-line card_icon"></i>
            </div>
            <h1 className="p-3">20</h1>
          </div>
        </div>
        <div className="col">
          <div className="card bg-info text-white">
            <div className="card-inner d-flex justify-content-between align-items-center p-3">
              <h3>ALERT</h3>
              <i className="ri-notification-3-line card_icon"></i>
            </div>
            <h1 className="p-3">20</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
