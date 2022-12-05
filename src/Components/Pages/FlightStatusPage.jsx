import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MainFlightStatus from "../Main/MainFlightStatus";
import MainHome from "../Main/MainHome";
import Navbar from "../Navbar";

export default function FlightStatusPage() {
  return (
    <div>
      <Navbar />
      <Header/>
      <MainFlightStatus/>
      <Footer />
    </div>
  );
}
