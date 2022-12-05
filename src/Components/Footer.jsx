import React from "react";
import logo from "../logo3.png";
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="wrap-footer">
          <div style={{ width: "100%" }}>
            <img style={{ width: "300px" }} src={logo}></img>
            <p>The general airline Aviation Operator and Services Provider. Delivering World-Class Services in Aircraft sales, completiones, management, flight support, charter and FBO-Indonesia.</p>
          </div>
          <div style={{ width: "100%" }}>
            <ul className="menu-footer">
              <li>
                <h6>Home</h6>
              </li>
              <li>
                <h6>About Us</h6>
              </li>
              <li>
                <h6>Review</h6>
              </li>
              <li>
                <h6>Flight Info</h6>
              </li>
              <li>
                <h6>Contact Us</h6>
              </li>
            </ul>
          </div>

          <div style={{ width: "100%" }}>
            <h6>FOLLOW US</h6>
            <svg width="0" height="0">
              <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#FFDC80" offset="0%" />
                <stop stopColor="#FCAF45" offset="16%" />
                <stop stopColor="#F77737" offset="26%" />
                <stop stopColor="#F56040" offset="36%" />
                <stop stopColor="#FD1D1D" offset="46%" />
                <stop stopColor="#E1306C" offset="56%" />
                <stop stopColor="#C13584" offset="66%" />
                <stop stopColor="#833AB4" offset="76%" />
                <stop stopColor="#5B51D8" offset="86%" />
                <stop stopColor="#405DE6" offset="100%" />
              </linearGradient>
            </svg>
            <svg width="0" height="0">
              <linearGradient id="twitter-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#F5F8FA" offset="20%" />
                <stop stopColor="#1DA1F2" offset="70%" />
              </linearGradient>
            </svg>
            <div className="social-media">
              <BsInstagram style={{ fill: "url(#instagram-gradient)", fontSize: "25px" }} />
              <BsTwitter style={{ fill: "url(#twitter-gradient)", fontSize: "25px" }} />
              <BsFacebook className="facebook" />
              <BsYoutube className="youtube" />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <h6>PHONES</h6>
          </div>
          <div style={{ width: "100%" }}>
            <h6>ADDRESS</h6>
            <p>Jl. Asia Afrika No.19, RT.1/RW.3, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
