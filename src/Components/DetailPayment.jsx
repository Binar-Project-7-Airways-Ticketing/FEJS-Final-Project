import React, { useState, useMemo } from "react";
import {
  ArrowRightOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

import countryList from "react-select-country-list";
import logo from "../logo.png";

import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

export default function DetailPayment(props) {
  const { luggagesPlane } = useSelector((state) => state.luggagePlane);
  const { payment } = useSelector((state) => state.payment);
  const { category } = useSelector((state) => state.category);
  const { user } = useSelector((state) => state.getUser);
  const { Price } = useSelector((state) => state.getPrice);

  const navigate = useNavigate();

  const [passenger, setPassenger] = useState("");




  const [bagasi1, setBagasi1] = useState("");
  const [bagasi2, setBagasi2] = useState("");
  const [bagasi3, setBagasi3] = useState("");
  const [bagasi4, setBagasi4] = useState("");
  const [bagasi5, setBagasi5] = useState("");
  const [bagasi6, setBagasi6] = useState("");
  const [bagasi7, setBagasi7] = useState("");
  const [bagasi, setBagasi] = useState("");



  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalBayarOpen, setIsModalBayarOpen] = useState(false);



  return (
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
                <button className="text-blue-600" onClick={props.showModal}>
                  Detail
                </button>
              </div>
              <Modal
                title="Flight Detail"
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
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
              <h3 className="text-[20px] text-black mb-4">Kebijakan Tiket</h3>
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
                 {props.harga}
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
