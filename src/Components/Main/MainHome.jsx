import React from "react";
import Booking from "../Bookking/Booking";
import { Card } from "antd";
import Destination from "../Home/DestinationCard";
import ComingServices from "../Home/ComingServicesCard";
import ReviewCard from "../Home/ReviewCard";
import Benefit from "../Home/Benefit";
const { Meta } = Card;

export default function MainHome() {
  return (
    <>
      <section className="w-full ">
        <div className="container">
          <div className="py-12">
            <Booking />
          </div>
        </div>
      </section>
      <section className="w-full h-screen ">
        <div className="container">
          <div className="py-12">
            <Destination />
          </div>
        </div>
      </section>
      <section className="w-full h-fit bg-brand-black">
        <div className="container">
          <div className="py-12">
            <ComingServices />
          </div>
        </div>
      </section>
      <section className="w-full h-screen">
        <div className="container">
          <div className="py-12">
            <Benefit />
          </div>
        </div>
      </section>
      <section className="w-full h-fit bg-brand-choco  ">
        <div className="container">
          <div className="py-12">
            <ReviewCard />
          </div>
        </div>
      </section>
    </>
  );
}