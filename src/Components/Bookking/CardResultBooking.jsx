import React from "react";

import { useParams } from "react-router-dom";

import CardResultBookingOneWay from "./CardResultBookingOneWay";
import CardResultBookingReturn from "./CardResultBookingReturn";

export default function CardResultBooking() {
  const { trip } = useParams();
  console.log(trip);
  return (
    <section className="main-result-booking">
      <div className="container">
        {trip === "Return" ? (
          <CardResultBookingReturn />
        ) : (
          <CardResultBookingOneWay />
        )}
      </div>
    </section>
  );
}
