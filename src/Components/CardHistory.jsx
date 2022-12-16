import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import Passenger from "./Bookking/Passenger";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { BsCircle } from "react-icons/bs";
import { Button, Modal } from "antd";

function CardHistory({ histories }) {
  const navigate = useNavigate();
  const items = [
    {
      label: <a href="#">Return</a>,
      key: "0",
    },
    {
      label: <a href="#">One Way</a>,
      key: "1",
    },
    {
      label: "Multiple cities or countries",
      key: "3",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="wrap-history">
        <div className="wrap-detail-title">
          <div className="detail-title">
            <h2>Your Travel History</h2>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, error.</p> */}
          </div>
        </div>
        {histories.map((item) => (
          <div>
            <Modal
              title="Flight Details"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[null]}
            >
              <div className="wrap-modal-detail-flight">
                <div className="title-detail-flight">
                  <p>Bali to Dubai</p>
                  <p>Monday, Des 12</p>
                </div>
                <div className="modal-detail-flight">
                  <div className="airports">
                    <div>
                      <p>Bali</p>
                      <p>Ngurah Rai Airports</p>
                    </div>
                    <div>
                      <p>NO. PESAWAT</p>
                      <p>Flight by 7-Airways</p>
                    </div>
                    <div>
                      <p>Dubai</p>
                      <p>Bandara Internasional Dubais</p>
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
                    <p>01:45</p>
                    <p>9h 20m</p>
                    <p>11:05</p>
                  </div>
                </div>
              </div>

              <div className="wrap-modal-detail-flight">
                <div className="title-detail-flight">
                  <p>Manchester to Doha </p>
                  <p>Saturday, Apr 26</p>
                </div>
                <div className="modal-detail-flight">
                  <div className="airports">
                    <div>
                      <p>Manchester</p>
                      <p>Manchester Airport</p>
                    </div>
                    <div>
                      <p>NO. PESAWAT</p>
                      <p>Flight by 7-Airways</p>
                    </div>
                    <div>
                      <p>Doha</p>
                      <p>Doha Internasional Airport </p>
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
                    <p>03:00</p>
                    <p>17h 40m</p>
                    <p>20:40</p>
                  </div>
                </div>
              </div>
            </Modal>

            <div className="detail-booking">
              <div className="wrap-input">
                <div className="input">
                  <div className="history">
                    <p style={{ fontSize: "13px" }}>From</p>
                    <p>{item?.bookingDetails?.flight?.departureCode}</p>
                  </div>
                  <div className="history">
                    <p style={{ fontSize: "13px" }}>To</p>
                    <p>{item?.bookingDetails?.flight?.arrivalCode}</p>
                  </div>
                </div>

                {/* <Passenger /> */}
                <div className="history">
                  <p style={{ fontSize: "13px" }}>Passenger/Class</p>
                  <div>
                    <p>
                      {item?.bookingDetails?.passenger?.firstName}/
                      {item?.flight?.class}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={showModal} className="btn-detail-flight">
              History Detail
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardHistory;
