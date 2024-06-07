import "./styles/App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Sidebar from "./components/Sidebar.jsx"
import { useState } from "react";

const App = () => {
   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

   const OpenSidebar = () => {
     setOpenSidebarToggle(!openSidebarToggle);
   };

  return (
    <div className="grid-container container-fluid p-0">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Main />
    </div>
  );
};

export default App;
