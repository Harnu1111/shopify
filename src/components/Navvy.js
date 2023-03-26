import React, {useState} from 'react';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";


const Navvy = () => {
    const [sidebar, setSidebar]= useState(false)

    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className="Navbar_container">
        <div className="Navbar_wrapper">
          <button>
            <i className="icon">
              <AiOutlineMenu onClick={showSidebar} />
            </i>
          </button>

          <div className="Navbar_links">
            <a href="/shop">Shop</a>
            <a href="/product">Products</a>
            <a href="about">About us</a>
            <a href="contact">Contact us</a>
          </div>

          <div className="Navbar_center">
            <a href="/home">
              <h3>HARNUS.</h3>
            </a>
          </div>
          <div className="Navbar-right">
            <div className="Navbar_search" id="search">
              <input
                placeholder="Search..."
                type="search"
                id="search_input"
              ></input>
              <button>
                <i id="search_btn">
                  <AiOutlineSearch />
                </i>
              </button>
            </div>

            <a href="/cart" className="Navbar-cart">
              <button id="cart_btn" path="/cart">
                <i id="cart">
                  <AiOutlineShoppingCart />
                </i>
                <p>5</p>
              </button>
            </a>
            <span className="login" id="login">
              <button>
                <p>Login</p>
              </button>
            </span>
          </div>
        </div>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
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

            <div className="Sidebar_menu" onClick={showSidebar}>
              <h3>Shop By Department</h3>
              <a href="/smartPhoneShop">
                {" "}
                <p>Smart Phones</p>
              </a>
              <a href="/laptop">
                {" "}
                <p>Laptops & Computers</p>
              </a>
              <a href="/speaker">
                {" "}
                <p>Speakers</p>
              </a>
              <a href="/games">
                {" "}
                <p> video Games</p>
              </a>
              <a href="/televison">
                {" "}
                <p> Televisions </p>
              </a>

              <h3>Sections</h3>
              <a href="/shop">
                {" "}
                <p>Shop</p>
              </a>
              <a href="/product">
                <p>Products</p>
              </a>
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
      </nav>
    </>
  );
}

export default Navvy