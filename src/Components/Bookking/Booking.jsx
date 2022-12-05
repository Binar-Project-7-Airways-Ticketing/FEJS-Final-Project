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
    <>
      {booking ? (
        <>
          <div className="wrap-booking">
            <div className="booking">
              <div className="book-default">
                <SlPlane />
                <h5>Book</h5>
              </div>
              <div className="my-trip-cst" onClick={mytrip}>
                <AiFillFolderOpen />
                <h5>My Trip</h5>
              </div>
              <div className="check-in-cst" onClick={checkin}>
                <AiOutlineCheckCircle />
                <h5>Check In</h5>
              </div>

              <div className="flight-status-cst" onClick={flightstatus}>
                <MdOutlineFlightTakeoff />
                <h5>Flight Status</h5>
              </div>
            </div>
          </div>
          <Book />
        </>
      ) : myTrip ? (
        <>
          <div className="wrap-booking">
            <div className="booking">
              <div className="book-cst" onClick={book}>
                <SlPlane />
                <h5>Book</h5>
              </div>
              <div className="my-trip-default">
                <AiFillFolderOpen />
                <h5>My Trip</h5>
              </div>
              <div className="check-in-cst" onClick={checkin}>
                <AiOutlineCheckCircle />
                <h5>Check In</h5>
              </div>

              <div className="flight-status-cst" onClick={flightstatus}>
                <MdOutlineFlightTakeoff />
                <h5>Flight Status</h5>
              </div>
            </div>
          </div>
          <MyTrip />
        </>
      ) : checkIn ? (
        <>
          <div className="wrap-booking">
            <div className="booking">
              <div className="book-cst" onClick={book}>
                <SlPlane />
                <h5>Book</h5>
              </div>
              <div className="my-trip-cst" onClick={mytrip}>
                <AiFillFolderOpen />
                <h5>My Trip</h5>
              </div>
              <div className="check-in-default">
                <AiOutlineCheckCircle />
                <h5>Check In</h5>
              </div>
              <div className="flight-status-cst" onClick={flightstatus}>
                <MdOutlineFlightTakeoff />
                <h5>Flight Status</h5>
              </div>
            </div>
          </div>
          <CheckIn />
        </>
      ) : flightStatus ? (
        <>
          <div className="wrap-booking">
            <div className="booking">
              <div className="book-cst" onClick={book}>
                <SlPlane />
                <h5>Book</h5>
              </div>
              <div className="my-trip-cst" onClick={mytrip}>
                <AiFillFolderOpen />
                <h5>My Trip</h5>
              </div>
              <div className="check-in-cst" onClick={checkin}>
                <AiOutlineCheckCircle />
                <h5>Check In</h5>
              </div>
              <div className="flight-status-default">
                <MdOutlineFlightTakeoff />
                <h5>Flight Status</h5>
              </div>
            </div>
          </div>
          <FlightStatus />
        </>
      ) : (
        <h1>hiyaa</h1>
      )}
    </>
  );
}
