import React, { useState, useMemo } from "react";

import {
  ArrowRightOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "../logo.png";
import bri from "../image/bri.jpg";
import bca from "../image/bca.jpg";
import mandiri from "../image/mandiri.jpg";
import bni from "../image/bni.jpg";
import ovo from "../image/ovo.jpg";
import danaa from "../image/dana.jpg";
import {
  MdFlightTakeoff,
  MdFlightLand,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { BsCircle } from "react-icons/bs";

import { SlPlane } from "react-icons/sl";
import { FaBarcode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadTicket } from "./Feature/Models/GetTicket";
import { loadCity } from "./Feature/Models/AirportSlice";

import PDFTicket from "./PDFTikcet";
import { Preview, print } from "react-html2pdf";

export default function Transaction() {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState([]);
  console.log(ticket);
  const [payment, setPayment] = useState(false);
  const dispatch = useDispatch();


  const downloadTiket = () => {
    print("Tiket Penerbangan", "tiket")
    localStorage.clear()
    navigate('/')
  };
  useEffect(() => {
    setTicket(JSON.parse(localStorage.getItem("booking")));
    dispatch(loadCity());
  }, [payment]);

  return (
    <>
      <Navbar />
      <div className="bg-brand-yellow">
        <div className="container ">
          <div className=" pt-24 text-brand-whiteLight h-screen">
            <h4>Tiket Keberangkatan</h4>
            <div className="w-1/2">
              <Preview id={"tiket"}>
                {ticket.map((item, i) => (
                  <div key={i} className="py-5 flex">
                    <div className=" w-4/5 bg-brand-black h-80 rounded-3xl ">
                      <div className="flex justify-between py-5 px-5 items-center">
                        <div>
                          <h6>BOARDING PASS</h6>
                          <h6>7-AIRWAYS</h6>
                        </div>
                        <SlPlane size={25} />
                      </div>
                      <div className="bg-brand-whiteLight text-brand-black flex py-2 gap-5 px-3 border-dotted border-r-2 border-brand-black">
                        <div className="flex flex-col">
                          <FaBarcode className="rotate-90" size={72} />
                          <FaBarcode className="rotate-90" size={72} />
                        </div>
                        <div className="flex flex-col w-full gap-5">
                          <div className="w-full flex gap-5">
                            <div className="w-full">
                              <h6 className="text-sm font-bold">NAME</h6>
                              <p>
                                {item.passenger.firstName}{" "}
                                {item.passenger.lastName}
                              </p>
                            </div>
                            <div className="w-full">
                              <h6 className="text-sm font-bold">FROM</h6>
                              <p>{item.flight.departureCode}</p>
                            </div>
                            <div className="w-full">
                              <h6 className="text-sm font-bold">TO</h6>
                              <p>{item.flight.arrivalCode}</p>
                            </div>
                          </div>

                          <div className="w-full flex  gap-5">
                            <div className="w-full">
                              <h6 className="text-sm font-bold">DATE</h6>
                              <p>{item.flight.departureDate}</p>
                            </div>
                            <div className="w-full">
                              <h6 className="text-sm font-bold">TIME</h6>
                              <p>{item.flight.departureTime}</p>
                            </div>
                            <div className="w-full">
                              <h6 className="text-sm font-bold">GATE</h6>
                              <p>G22E</p>
                            </div>
                          </div>

                          <div className="w-full flex  ">
                            <div className="w-52">
                              <h6 className="text-sm font-bold">
                                FLIGHT NUMBER
                              </h6>
                              <p>{item.flight.flightNumber}</p>
                            </div>
                            <div className="w-full">
                              <h6 className="text-sm font-bold">SEAT</h6>
                              <p>Number {item.seat.numberSeat}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/5 bg-brand-black h-80 rounded-3xl ">
                      <div className="flex justify-between py-5 px-5 items-center">
                        <div>
                          <h6>FLIGHT</h6>
                          <h6>7-AIRWAYS</h6>
                        </div>
                        <SlPlane size={25} />
                      </div>
                      <div className="bg-brand-whiteLight text-brand-black flex flex-col py-2 px-2 gap-5">
                        <div className="w-full flex gap-2 ">
                          <div className="w-full">
                            <h6 className="text-sm font-bold">NAME</h6>
                            <p>
                              {item.passenger.firstName}{" "}
                              {item.passenger.lastName}
                            </p>
                          </div>
                          <div className="w-full">
                            <h6 className="text-sm font-bold">FROM</h6>
                            <p>{item.flight.departureCode}</p>
                          </div>
                          <div className="w-full">
                            <h6 className="text-sm font-bold">TO</h6>
                            <p>{item.flight.arrivalCode}</p>
                          </div>
                        </div>

                        <div className="w-full flex  gap-2 ">
                          <div className="w-full">
                            <h6 className="text-sm font-bold">DATE</h6>
                            <p>{item.flight.departureDate}</p>
                          </div>
                          <div className="w-full">
                            <h6 className="text-sm font-bold">TIME</h6>
                            <p>{item.flight.departureTime}</p>
                          </div>
                          <div className="w-full">
                            <h6 className="text-sm font-bold">GATE</h6>
                            <p>G22E</p>
                          </div>
                        </div>
                        <div className="w-full flex gap-2 ">
                          <div className="w-full  gap-2">
                            <h6 className="text-sm font-bold">FLIGHT NUMBER</h6>
                            <p>{item.flight.flightNumber}</p>
                          </div>
                          <div className="w-full">
                            <h6 className="text-sm font-bold">SEAT</h6>
                            <p>Number {item.seat.numberSeat}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Preview>
            </div>
            <>
              <Button
                onClick={() => downloadTiket()}
                htmlType="submit"
                className="bg-brand-whiteLight text-brand-black rounded-md "
              >
                Download Tiket
              </Button>
            </>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

