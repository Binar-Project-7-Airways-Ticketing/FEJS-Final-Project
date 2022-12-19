import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import CardResultBooking from "../Bookking/CardResultBooking";
import { useEffect } from "react";
import ButtonFindFlight from "../Reusable/ButtonFindFlight";
import { useNavigate } from "react-router-dom";
import { Empty } from "antd";

export default function Bookingpage() {
  const [haveSchedule1, setHaveSchedeule1] = useState(true);
  const [haveSchedule2, setHaveSchedeule2] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    const flightReturn = localStorage.getItem("flightDepart");
    const flightOneway = localStorage.getItem("flightReturn");
    setHaveSchedeule1(flightReturn);
    setHaveSchedeule2(flightOneway);
  },[haveSchedule1, haveSchedule2]);
  return (
    <div>
      {haveSchedule1 || haveSchedule2 ? (
        <>
          <Navbar />

          <CardResultBooking />
          <Footer />
        </>
      ) : (
        <div className="container">
          <div className="flex h-screen items-center justify-center">
            <div className="flex items-center bg-brand-whiteLight h-fit rounded-2xl p-5">
              <div className="flex w-full flex-col">
                <h4>Halaman Tidak Ditemukan</h4>
                <Empty />
                <div className="flex w-full justify-center ">
                  <ButtonFindFlight handle={() => navigate("/")} value="Back" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
