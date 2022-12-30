import React, { useState } from "react";
import Book from "./Book";
import CheckIn from "./CheckIn";
import FlightStatus from "./FlightStatus";
import MyTrip from "../MyTrip";
import { SlPlane } from "react-icons/sl";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { AiFillFolderOpen, AiOutlineCheckCircle } from "react-icons/ai";

export default function Booking() {
  return (
    <>
    <div className="shadow-xl rounded-2xl lg:w-1/4 md:w-1/2">
      <div className="wrap-booking">
        <div className="booking">
          <div className="flex items-center w-full h-14 justify-start bg-brand-whiteLight rounded-t-3xl gap-3.5 text-brand-yellow px-7 text-xl">
            <SlPlane />
            <h6>Book</h6>
          </div>
        </div>
      </div>
    </div>
      <Book />
    </>
  );
}
