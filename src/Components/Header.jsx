import React from "react";
import "./All.css";
import landmark from "../landmark.jpg";
import Booking from "./Bookking/Booking";
export default function Header() {
  return (
    <header>
      <div className="container">
        {/* <div className="wrap-header"> */}
        <div className="wrap-header">
          <div className="header-main">
            <div className="slogan">
              <h1>Let's go to the best places in the World with us</h1>
            </div>
          </div>
          {/* <div className="zzz">
            <Booking />
          </div> */}
        </div>
      </div>
    </header>
  );
}
