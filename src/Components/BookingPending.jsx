import React, { useState, useMemo } from "react";
import {
  ArrowRightOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "../logo.png";
import bri from "../image/bri.jpg";
import bca from "../image/bca.jpg";
import mandiri from "../image/mandiri.jpg";
import bni from "../image/bni.jpg";
import ovo from "../image/ovo.jpg";
import danaa from "../image/dana.jpg";
import linkAja from "../image/link aja.jpg";
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { loadLuggages } from "./Feature/Models/LuggageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadPayment } from "./Feature/Models/PaymentSlice";


export default function Transaction() {
  const navigate = useNavigate();

  const [bagasi, setBagasi] = useState("");
  const [payment, setPayment] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSeatOpen, setIsModalSeatOpen] = useState(false);
  const { luggages } = useSelector((state) => state.luggage);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // method payment
  const dana = () => {
    // navigate('/payment')
    // alert("Transasi akan diproses");
    // navigate("/");
    setPayment(true);
  };
  
  useEffect(() => {
    dispatch(loadLuggages());
  }, [luggages]);

  useEffect(() => {
    dispatch(loadPayment());
  }, [payment]);

  return (
    <>
      <div className="bg-brand-yellow">
        <Navbar />
        <div className="p-8">
          <div className="booking-container">
            <div className="booking-left">
              <div className="parent-a w-full bg-brand-nude p-6 rounded-md border-2 border-brand-black">
                <div className="block justify-center">
                  <h3 className="flex justify-center p-4 text-2xl font-bold text-red-700">Booking Pending</h3>
                  <p className="flex justify-center p-2">Please Note Booking is in Pending only, will be Confirmed Only after receiving the Payment</p>
                </div>
                <div className="flex justify-center p-4">
                  <span className="bg-brand-gray items-center text-center rounded-full w-[30%]">
                    Flight PNR : QWSA876
                  </span>
                </div>
                <div className="block justify-center items-center text-center">
                  <p className="p-4">
                    Thanks for choosing 7-Airways
                  </p>
                  <p>
                    Ticket Deadline :
                    <span>
                      16 December 2022
                    </span>
                  </p>
                  <div className="p-2 mb-4">
                    <p>
                      This voucher code is only usable after your payment for this booking.
                    </p>
                  </div>
                </div>
                <div className="border-t border-brand-gray">
                  <div className="flex justify-center mt-4 p-2">
                    <div className="bg-brand-gray items-center text-center rounded-sm w-[50%] p-2">
                      <p>
                        ATM PaymentCode: 1880142509194
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-center mt-4 p-2">
                    <p>Please Pay for your ticket within 10 hours to avoid the auto cancellation and bring your payment code to any nearest ATM or ALFA group counter (Alfamart, Alfamidi, Alfaexpress and Lawson) or Indomaret.</p>
                  </div>
                  <div className="flex justify-center items-center text-center mt-4 p-2">
                    <p className="text-red-800 font-semibold">Total amount payable at an Indonesian ATM : IDR  2,516,400</p>
                  </div>
                  <div className="flex justify-center mt-2 p-2">
                    <div className="bg-brand-gray items-center text-center rounded-sm w-[50%] p-2">
                      <p>
                        ATM PaymentCode: 1880142509194
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center text-center mt-4 p-2">
                  <h3 className="font-semibold">We accept payment from the :</h3>
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-4 p-2 mt">
                    <div
                      onClick={dana}
                      // onClick={(e) => setPayment(e.target.value)}
                      className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                    >
                      <img
                        src={bri}
                        style={{
                          width: "70px",
                          height: "70px",
                        }}
                      ></img>
                      <h3 className="p-6 text-black text-bold">BRI</h3>
                    </div>
                    <div
                      onClick={dana}
                      className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                    >
                      <img
                        src={bca}
                        style={{
                          width: "70px",
                          height: "70px",
                        }}
                      ></img>
                      <h3 className="p-6 text-black text-bold">BCA</h3>
                    </div>
                    <div
                      onClick={dana}
                      className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                    >
                      <img
                        src={mandiri}
                        style={{
                          width: "70px",
                          height: "70px",
                        }}
                      ></img>
                      <h3 className="p-6 text-black text-bold">Mandiri</h3>
                    </div>
                    <div
                      onClick={dana}
                      className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                    >
                      <img
                        src={bni}
                        style={{
                          width: "70px",
                          height: "70px",
                        }}
                      ></img>
                      <h3 className="p-6 text-black text-bold">BNI</h3>
                    </div>
                    <div
                      onClick={dana}
                      className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                    >
                      <img
                        src={ovo}
                        style={{
                          width: "70px",
                          height: "70px",
                        }}
                      ></img>
                      <h3 className="p-6 text-black text-bold">OVO</h3>
                    </div>
                    <div
                      onClick={dana}
                      className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                    >
                      <img
                        src={danaa}
                        style={{
                          width: "70px",
                          height: "70px",
                        }}
                      ></img>
                      <h3 className="p-6 text-black text-bold">Dana</h3>
                    </div>
                    <div
                      onClick={dana}
                      className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                    >
                      <img
                        src={linkAja}
                        style={{
                          width: "70px",
                          height: "70px",
                        }}
                      ></img>
                      <h3 className="p-6 text-black text-bold">Link Aja</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-right">
              <div className="w-full">
                <div className="parent-a w-full bg-brand-whiteLight p-6 rounded-md border-2 border-brand-black">
                  <div className="w-full bg-brand-black text-white p-2 mb-4 gap-4 rounded-md">
                    <h3 className="text-[20px] font-semibold mb-2">Penerbangan</h3>
                  </div>
                  <div className="py-2">
                    <div className="flex w-full gap-8 mb-2 p-2 ">
                      <div className="flex w-full gap-4">
                        <h3>Jakarta</h3>
                        <span>
                          <ArrowRightOutlined />
                        </span>
                        <h3>Singapore</h3>
                      </div>
                      <div>
                        <button className="text-blue-600" onClick={showModal}>Detail</button>
                      </div>
                      <Modal
                        title="Flight Detail"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[null]}
                      >
                        <div className="wrap-modal-detail-flight">
                          <div className="title-detail-flight">
                            <p>Jakarta to Singapore</p>
                            <p>Saturday, Nov 26</p>
                          </div>
                          <div className="modal-detail-flight">
                            <div className="airports">
                              <div>
                                <p>Jakarta</p>
                                <p>Soekarno-Hatta International Airports</p>
                              </div>
                              <div>
                                <p>NO PESAWAT</p>
                                <p>Flight by 7-Airways</p>
                              </div>
                              <div>
                                <p>Singapore</p>
                                <p>Changi International Airports</p>
                              </div>
                            </div>

                            <div className="modal-logo">
                              <div className="circle">
                                <BsCircle />
                              </div>
                              <div className="wrap-logo">
                                <img
                                  src={logo}
                                  style={{
                                    width: "90px",
                                    height: "90px",
                                    borderRadius: "100%",
                                    border: "1px solid black",
                                  }}
                                ></img>
                              </div>
                              <div className="circle">
                                <BsCircle />
                              </div>
                            </div>
                            <div className="modal-time">
                              <p>10:30</p>
                              <p>2h 10m</p>
                              <p>14:40</p>
                            </div>
                          </div>
                          <div>
                            <h6>Passenger</h6>
                            <p>Adults, Childs, Infant</p>
                          </div>
                          <div>
                            <h6>Luggage</h6>
                            <p>{bagasi}</p>
                          </div>
                          <div>
                            <h6>Number Seats</h6>
                            <p></p>
                          </div>
                        </div>
                      </Modal>
                    </div>
                    <div className="w-full my-[2rem] border-2 border-brand-gray p-2">
                      <h3 className="text-[20px] text-black mb-4">
                        Kebijakan Tiket
                      </h3>
                      <div className="flex justify-start items-center mb-4 gap-4">
                        <span>
                          <DollarCircleOutlined />
                        </span>
                        <p className="mt-2">Bisa Refund</p>
                      </div>
                      <div className="flex justify-start items-center mb-4 gap-4">
                        <span>
                          <ScheduleOutlined />
                        </span>
                        <p className="mt-2">Bisa Rescedhule</p>
                      </div>
                    </div>
                    <div className="flex justify-end w-full my-[2rem]">
                      <div>
                        <h3 className="text-[16px] text-black mb-4 font-semibold">
                          Total Pembayaran
                        </h3>
                        <span className="w-full">
                          Rp. 0,-
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
