import React, { useState } from "react";

import { Button } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { SlPlane } from "react-icons/sl";
import { FaBarcode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { Preview, print } from "react-html2pdf";

export default function Ticket() {
  const navigate = useNavigate();
  const [showTiket, setShowTiket] = useState(false);
  const [ticketDepart, setTicketDepart] = useState(() => {
    const tiket = JSON.parse(localStorage.getItem("bookingDepart"));
    return tiket;
  });
  const [ticketReturn, setTicketReturn] = useState(() => {
    const tiket = JSON.parse(localStorage.getItem("bookingReturn"));
    return tiket;
  });

  const downloadTiketDepart = () => {
    print("Tiket Penerbangan", "tiketDepart");

    if (ticketReturn) {
    } else {
      localStorage.removeItem("bookingDepart");
      navigate("/");
    }
  };
  const downloadTiketReturn = () => {
    print("Tiket Penerbangan", "tiketReturn");

    navigate("/");
    localStorage.removeItem("bookingDepart");
    localStorage.removeItem("bookingReturn");
  };
  useEffect(() => {
    if (ticketDepart === null) {
      setTimeout(function () {
        window.location.reload(1);
      }, 500);
    }
    setShowTiket(true);
  }, [ticketDepart]);

  return (
    <>
      {showTiket ? (
        <>
          <Navbar />
          <div className="bg-brand-yellow">
            <div className="container ">
              <div className=" pt-24 text-brand-whiteLight h-fit pb-5">
                <h4>Tiket Keberangkatan</h4>
                <div className="w-full">
                  <Preview id={"tiketDepart"}>
                    {ticketDepart.map((item, i) => (
                      <div key={i} className="py-5 flex">
                        <div className=" xl:w-5/12 lg:w-6/12 md:w-full bg-brand-black h-80 rounded-3xl ">
                          <div className="text-brand-whiteLight flex justify-between py-5 px-5 items-center">
                            <div className="text-brand-whiteLight">
                              <h6>BOARDING PASS</h6>
                              <h6>7-AIRWAYS</h6>
                            </div>
                            <SlPlane color="f1efe9" size={25} />
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
                                  <p>{item.passenger.lastName}</p>
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
                        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 bg-brand-black h-80 rounded-3xl ">
                          <div className="flex justify-between py-5 px-5 items-center">
                            <div className="text-brand-whiteLight">
                              <h6>FLIGHT</h6>
                              <h6>7-AIRWAYS</h6>
                            </div>
                            <SlPlane color="f1efe9" size={25} />
                          </div>
                          <div className="bg-brand-whiteLight text-brand-black flex flex-col py-2 px-2 gap-5">
                            <div className="w-full flex gap-2 ">
                              <div className="w-full">
                                <h6 className="text-sm font-bold">NAME</h6>
                                <p>{item.passenger.lastName}</p>
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
                    ))}
                  </Preview>
                </div>
                <Button
                  onClick={() => downloadTiketDepart()}
                  htmlType="submit"
                  className="bg-brand-whiteLight text-brand-black rounded-md "
                >
                  Download Tiket
                </Button>
                {/* <PDFTicket downloadTiketDepart={downloadTiketDepart}/> */}
                {ticketReturn ? (
                  <>
                    <h4>Tiket Kepulangan</h4>
                    <div className="w-full">
                      <Preview id={"tiketReturn"}>
                        {ticketReturn.map((item, i) => (
                          <div key={i} className="py-5 flex">
                            <div className=" xl:w-5/12 lg:w-6/12 md:w-full bg-brand-black h-80 rounded-3xl ">
                              <div className="flex justify-between py-5 px-5 items-center">
                                <div className="text-brand-whiteLight">
                                  <h6>BOARDING PASS</h6>
                                  <h6>7-AIRWAYS</h6>
                                </div>
                                <SlPlane color="f1efe9" size={25} />
                              </div>
                              <div className="bg-brand-whiteLight text-brand-black flex py-2 gap-5 px-3 border-dotted border-r-2 border-brand-black">
                                <div className="flex flex-col">
                                  <FaBarcode className="rotate-90" size={72} />
                                  <FaBarcode className="rotate-90" size={72} />
                                </div>
                                <div className="flex flex-col w-full gap-5">
                                  <div className="w-full flex gap-5">
                                    <div className="w-full">
                                      <h6 className="text-sm font-bold">
                                        NAME
                                      </h6>
                                      <p>{item.passenger.lastName}</p>
                                    </div>
                                    <div className="w-full">
                                      <h6 className="text-sm font-bold">
                                        FROM
                                      </h6>
                                      <p>{item.flight.departureCode}</p>
                                    </div>
                                    <div className="w-full">
                                      <h6 className="text-sm font-bold">TO</h6>
                                      <p>{item.flight.arrivalCode}</p>
                                    </div>
                                  </div>

                                  <div className="w-full flex  gap-5">
                                    <div className="w-full">
                                      <h6 className="text-sm font-bold">
                                        DATE
                                      </h6>
                                      <p>{item.flight.departureDate}</p>
                                    </div>
                                    <div className="w-full">
                                      <h6 className="text-sm font-bold">
                                        TIME
                                      </h6>
                                      <p>{item.flight.departureTime}</p>
                                    </div>
                                    <div className="w-full">
                                      <h6 className="text-sm font-bold">
                                        GATE
                                      </h6>
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
                                      <h6 className="text-sm font-bold">
                                        SEAT
                                      </h6>
                                      <p>Number {item.seat.numberSeat}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 bg-brand-black h-80 rounded-3xl ">
                              <div className="flex justify-between py-5 px-5 items-center">
                                <div className="text-brand-whiteLight">
                                  <h6>FLIGHT</h6>
                                  <h6>7-AIRWAYS</h6>
                                </div>
                                <SlPlane color="f1efe9" size={25} />
                              </div>
                              <div className="bg-brand-whiteLight text-brand-black flex flex-col py-2 px-2 gap-5">
                                <div className="w-full flex gap-2 ">
                                  <div className="w-full">
                                    <h6 className="text-sm font-bold">NAME</h6>
                                    <p>{item.passenger.lastName}</p>
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
                        ))}
                      </Preview>
                    </div>
                    <Button
                      onClick={() => downloadTiketReturn()}
                      htmlType="submit"
                      className="bg-brand-whiteLight text-brand-black rounded-md "
                    >
                      Download Tiket
                    </Button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : null}
    </>
  );
}
