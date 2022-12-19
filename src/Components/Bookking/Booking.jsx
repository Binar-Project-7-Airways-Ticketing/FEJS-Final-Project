import React, { useState } from "react";
import Book from "./Book";
import CheckIn from "./CheckIn";
import FlightStatus from "./FlightStatus";
import MyTrip from "../MyTrip";
import { SlPlane } from "react-icons/sl";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { AiFillFolderOpen, AiOutlineCheckCircle } from "react-icons/ai";

export default function Booking() {
  const [booking, setBooking] = useState(true);
  const [myTrip, setMyTrip] = useState(false);
  const [checkIn, setCheckIn] = useState(false);
  const [flightStatus, setFlightStatus] = useState(false);

  const book = () => {
    setBooking(true);
  };

  const mytrip = () => {
    setBooking(false);
    setMyTrip(true);
  };
  const checkin = () => {
    setBooking(false);
    setMyTrip(false);
    setCheckIn(true);
  };
  const flightstatus = () => {
    setBooking(false);
    setMyTrip(false);
    setCheckIn(false);
    setFlightStatus(true);
  };
  return (
    <div className="shadow-xl rounded-2xl w-full">
      {booking ? (
        <>
          <div className="wrap-booking">
            <div className="booking">
              <div className="book-default">
                <SlPlane />
                <h6>Book</h6>
              </div>

              <div className="flight-status-cst" onClick={flightstatus}>
                <MdOutlineFlightTakeoff />
                <h6>Flight Status</h6>
              </div>
            </div>
          </div>
          <Book />
        </>
      ) : flightStatus ? (
        <>
          <div className="wrap-booking">
            <div className="booking">
              <div className="book-cst" onClick={book}>
                <SlPlane />
                <h6>Book</h6>
              </div>

              <div className="flight-status-default">
                <MdOutlineFlightTakeoff />
                <h6>Flight Status</h6>
              </div>
            </div>
          </div>
          <FlightStatus />
        </>
      ) : null}
    </div>
  );
}
