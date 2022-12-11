import React from "react";

export default function Benefit() {
  return (
    <div className="text-brand-black">
      <div className="mb-10">
        <h5>SPECIALS FEATURES</h5>
        <h2>Some Benefit if you flight with us</h2>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col gap-10 w-full ">
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
        <div className="flex w-full items-end justify-end relative ">
          <img className="img-small" src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
          <img className="img-large" src="https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
        </div>
      </div>
    </div>
  );
}
