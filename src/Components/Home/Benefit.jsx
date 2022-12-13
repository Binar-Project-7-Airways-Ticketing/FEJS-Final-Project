import React from "react";
import benefit2 from "../../image/benefit2.jpg"
import benefit1 from "../../image/benefit1.avif"

export default function Benefit() {
  return (
    <div className="text-brand-black">
      <div className="mb-10">
        <h5>SPECIALS FEATURES</h5>
        <h2>Some Benefit if you flight with us</h2>
      </div>
      <div className="flex md:flex-row sm:flex-col-reverse w-full">
        <div className="md:flex md:flex-col sm:grid sm:grid-cols-2 gap-10 w-full ">
          <div className="flex flex-col gap-3">
            <span className="flex bg-brand-yellow w-16 h-12 rounded-3xl items-center justify-center text-brand-whiteLight font-bold text-lg">
              01
            </span>
            <h4>Get best deals</h4>
            <h6 className="xl:w-1/2 lg:3/5">
              Find help with your booking and travel plans and see what to
              expect along you journey today with us
            </h6>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex bg-brand-yellow w-16 h-12 rounded-3xl items-center justify-center text-brand-whiteLight font-bold text-lg">
              02
            </span>
            <h4>100% price transparency</h4>
            <h6 className="xl:w-1/2 lg:3/5">
              Find help with your booking and travel plans and see what to
              expect along you journey today with us
            </h6>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex bg-brand-yellow w-16 h-12 rounded-3xl items-center justify-center text-brand-whiteLight font-bold text-lg">
              03
            </span>
            <h4>Travel with more confidence</h4>
            <h6 className="xl:w-1/2 lg:3/5">
              Find help with your booking and travel plans and see what to
              expect along you journey today with us
            </h6>
          </div>
        </div>
        <div className="flex w-full sm:pb-2 items-end justify-end relative ">
          <img className="img-small" src={benefit2}/>
          <img className="img-large" src={benefit1}/>
        </div>
      </div>
    </div>
  );
}
