import React from "react";
import logo from "../logo3.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./All.css";

export default function Navbar() {
  return (
    <div className="ffff">
      <div className="container">
        <div className="wrap-navbar">
          <div className="logo">
            <img style={{ width: "150px" }} src={logo}></img>
          </div>

          <ul className="menu-navbar">
            <li>Home</li>
            <li>About Us</li>
            <li>Review</li>
            <li>Flight Info</li>
            <li>Contact Us</li>
          </ul>

          <div className="search">
            <BsSearch />
            <AiOutlineUser />
            <a>Login</a>
            <p>|</p>
            <a>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
