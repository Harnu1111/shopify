import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css"
const Sidebar = (sidebar) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="Sidebar_container">
        <div className="Sidebar_wrapper">
          <span className="Sidebar_title">
            <h3>MENU</h3>

            <button>
              <i>
                <CloseIcon />
              </i>
            </button>
          </span>

          <div className="Sidebar_menu">
            <h3>Shop By Department</h3>
            <p>Smart Phones</p>
            <p>Televisions</p>
            <p>Laptops & Computers</p>
            <p>Speakers</p>
            <p>Video Games </p>

            <h3>Sections</h3>
            <p>Shop</p>
            <p>Products</p>
            <p>About Us</p>
            <p>Contact Us</p>

            <h3>Support</h3>
            <p>Visit Our Support</p>
            <p>online Support</p>

            <span id="Logout">
              <p>LogOut</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
