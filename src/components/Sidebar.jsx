import "../styles/App.css";
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
const BarMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "ri-dashboard-2-line",
  },
  {
    title: "Admin",
    path: "/admin",
    icon: "ri-admin-line",
  },
  {
    title: "Categories",
    path: "/category",
    icon: "ri-folders-line",
  },
  {
    title: "Products",
    path: "/products",
    icon: "ri-box-3-line",
  },
  {
    title: "Customers",
    path: "/customers",
    icon: "ri-group-3-line",
  }
  ,
  {
    title: "Orders",
    path: "/orders",
    icon: "ri-shopping-cart-2-line",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: "ri-file-chart-line",
  }
];
const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside
      id="sidebar"
      className={`${
        openSidebarToggle ? "sidebar-responsive" : "d-none"
      } d-lg-flex flex-column bg-dark text-light h-100 z-3 shadow`}
    >
      <div className="sidebar-title d-flex justify-content-between align-items-center p-3">
        <div className="sidebar-brand">
          <i className="ri-shopping-cart-2-line me-2"></i>
          Toko <span className="text-warning">Mebel</span>
        </div>
        <button
          className="p-0 border-0 bg-transparent text-white ms-3 d-lg-none"
          onClick={OpenSidebar}
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
      <ul className="list-unstyled">
        {BarMenu.map((menu, index) => (
          <li className="sidebar-item p-3" key={index}>
            <Link
              to={menu.path}
              className=" text-decoration-none text-light p-3 w-100"
            >
              <i className={`${menu.icon} me-2`}></i> {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="btn btn-sm btn-danger fs-6 mx-3">
        Logout <i className="ri-logout-box-r-line ms-2"></i>
      </button>
    </aside>
  );
};

Sidebar.propTypes = {
  openSidebarToggle: PropTypes.bool.isRequired,
  OpenSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
