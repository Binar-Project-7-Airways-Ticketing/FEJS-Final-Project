import React from "react";

import { Card } from "antd";
import Destination from "../Home/DestinationCard";
import ComingServices from "../Home/ComingServicesCard";
import ReviewCard from "../Home/ReviewCard";
import Benefit from "../Home/Benefit";
import Book from "../Bookking/Book";
const { Meta } = Card;

export default function MainHome() {
  return (
    <>
      <section className="w-full ">
        <div className="container">
          <div className="py-12">
            <Book />
          </div>
        </div>
      </section>
      {/* <section className="w-full h-fit ">
        <div className="container mx-auto">
          <div className="lg:py-12 sm:py-6">
            <Destination />
          </div>
        </div>
      </section> */}
      <section className="w-full h-fit bg-brand-black">
        <div className="container">
          <div className="lg:py-12 sm:py-6">
            <ComingServices />
          </div>
        </div>
      </section>
      <section className="w-full h-fit">
        <div className="container">
          <div className="lg:py-12 sm:py-6">
            <Benefit />
          </div>
        </div>
      </section>
      <section className="w-full h-fit bg-brand-choco  ">
        <div className="container">
          <div className="lg:py-12 sm:py-6">
            <ReviewCard />
          </div>
        </div>
      </section>
    </>
  );
}
