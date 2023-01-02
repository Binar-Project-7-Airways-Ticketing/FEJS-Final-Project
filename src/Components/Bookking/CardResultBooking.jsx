import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

import CardResultBookingOneWay from "./CardResultBookingOneWay";
import CardResultBookingReturn from "./CardResultBookingRoundTrip";

export default function CardResultBooking() {
  const { trip } = useParams();
 
  return (
    <section className="main-result-booking">
      <div className="container">
        {trip === "Round trip" ? (
          <CardResultBookingReturn />
        ) : (
          <CardResultBookingOneWay />
        )}
      </div>
    </section>
  );
}