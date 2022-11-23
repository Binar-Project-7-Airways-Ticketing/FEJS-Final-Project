import React from "react";
import "./All.css";
import landmark from "../landmark.jpg";
import Booking from "./Booking";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrap-header">
          <div className="header-main">
            {/* <div className="img1">
              <img src={landmark}></img>
            </div>
            <div className="img2">
              <img src={landmark}></img>
            </div> */}
          </div>
          <div className="zzz">
            <Booking />
          </div>
        </div>
      </div>
    </header>
  );
}
