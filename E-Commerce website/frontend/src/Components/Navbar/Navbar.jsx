import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    //Navbar div
    <div className="navbar">
      {/* Logo and title */}
      <div className="nav-logo">
        <img src={logo} alt="A shopping bag, the logo of the company" />
        <p>SHOPPER</p>
      </div>
      {/* Navbar links list */}
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop {menu==="shop" ? <hr />:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          Men {menu==="men" ? <hr />:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          Women {menu==="women" ? <hr />:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids {menu==="kids" ? <hr />:<></>}
        </li>
      </ul>
      {/* Login button */}
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="A shopping cart" />
        {/* Shopping cart counter */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
