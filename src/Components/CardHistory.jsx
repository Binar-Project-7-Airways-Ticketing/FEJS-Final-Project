import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import Passenger from "./Bookking/Passenger";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { BsCircle } from "react-icons/bs";
import { Button, Modal } from "antd";

function CardHistory({ histories }) {
  console.log(histories);
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
      {histories.map((item) => {
        console.log(item);
        item.map((data) => {
          console.log(data);
        });
      })}
      {/* <div className="wrap-history">
        <div className="wrap-detail-title">
          <div className="detail-title">
            <h2>Your Travel History</h2>
          </div>
        </div>
        {histories.map((item) => (
          <div key={item.idBooking}>
            <p>{console.log(item)}</p>
            {item?.bookingDetails.map((data) => (
              <div className="detail-booking">
                <div className="wrap-input">
                  <div className="input">
                    <div className="history">
                      <p style={{ fontSize: "18px" }}>Depature From</p>
                      <p style={{ fontSize: "18px" }}>{data.flight.departureCode}</p>
                    </div>
                    <div className="history">
                      <p style={{ fontSize: "18px" }}>Destination To</p>
                      <p style={{ fontSize: "18px" }}>{data.flight.arrivalCode}</p>
                    </div>
                  </div>

                  <Modal title="Flight Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[null]}>
                    <div className="wrap-modal-detail-flight">
                      <div className="title-detail-flight">
                        <p>{data.flight.departureDate}</p>
                      </div>
                      <div className="modal-detail-flight">
                        <div className="airports">
                          <div>
                            <p>Depature Code</p>
                            <p>{data.flight.departureCode}</p>
                          </div>
                          <div>
                            <p>NO. PESAWAT</p>
                            <p>{data.flight.flightNumber}</p>
                          </div>
                          <div>
                            <p>Arrival Code</p>
                            <p>{data.flight.arrivalCode}</p>
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
                          <p>{data.flight.arrivalTime}</p>

                          <p>{data.flight.departureTime}</p>
                        </div>
                      </div>
                    </div>
                  </Modal>

                  <div className="history">
                    <p style={{ fontSize: "18px" }}>Class</p>

                    <div>
                      {data.flight.plane.planeClass.map((kelas) => (
                        <>
                          <p style={{ fontSize: "18px" }}>{kelas.planeClass}</p>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button onClick={showModal} className="btn-detail-history">
              History Detail
            </button>

            <button className="btn-detail-flight">Delete History</button>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default CardHistory;
