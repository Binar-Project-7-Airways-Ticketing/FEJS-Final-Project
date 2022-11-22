import React from "react";
import logo from "../logo3.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="wrap-footer">
          <div style={{ width: "100%" }}>
            <img style={{ width: "300px" }} src={logo}></img>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptate itaque aliquam repellat totam quia dolorum,
              reprehenderit animi inventore accusantium.
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <ul className="menu-footer">
              <li>Home</li>
              <li>About Us</li>
              <li>Review</li>
              <li>Flight Info</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div style={{ width: "100%" }}>
            <h6>FOLLOW US</h6>
          </div>
          <div style={{ width: "100%" }}>
            <h6>PHONES</h6>
          </div>
          <div style={{ width: "100%" }}>
            <h6>ADDRESS</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus ab non provident hic nisi! Culpa fuga pariatur
              temporibus quisquam quae.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
