import "../styles/App.css";
import PropTypes from "prop-types";
const Header = ({ OpenSidebar }) => {
  return (
    <header className="header p-3 shadow text-bg-dark position-relative z-3">
      <div className="container d-flex align-items-center justify-content-between">
        <button className="d-lg-none border-0 bg-transparent p-0 text-white">
          <i className="ri-menu-line" onClick={OpenSidebar}></i>
        </button>
        
        <div className="header-right d-flex ms-auto">
          <i className="ri-notification-3-line icon mx-2"></i>
          <i className="ri-mail-line icon mx-2"></i>
          <i className="ri-user-line icon mx-2"></i>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
};

export default Header;
