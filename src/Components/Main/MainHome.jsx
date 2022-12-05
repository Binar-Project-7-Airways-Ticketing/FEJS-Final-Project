import React from "react";
import Booking from "../Bookking/Booking";
import { Card } from "antd";
import Destination from "../Home/DestinationCard";
import ComingServices from "../Home/ComingServicesCard";
import ReviewCard from "../Home/ReviewCard";
const { Meta } = Card;

export default function MainHome() {
  return (
    <div className="container">
      <div className="py-12">
        <Booking />
      </div>
      <div className="py-12">
       <Destination/>
      </div>
      <div className="py-12">
        <ComingServices/>
      </div>
      <div className="py-12">
       <ReviewCard/>
      </div>
    </div>
  );
}
