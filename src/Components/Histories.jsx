import React, { useState } from "react";
import logo from "../image/logo.png";
import { BsCircle } from "react-icons/bs";
import { Modal } from "antd";

function Histories({ histories }) {
  console.log(histories);
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
    <div className="wrap-history">
      <div className="wrap-detail-title">
        <div className="detail-title">
          <h2>Your Travel History</h2>
        </div>
      </div>

      {histories.map((item) => (
        <div key={item.idBooking}>
          <p>{console.log(item)}</p>
          {item.map((data) => (
            <>
              <p>{console.log(data)}</p>
              {data.bookingDetails.map((details) => (
                <>
                  <p>{console.log(details)}</p>
                  <div className="detail-booking">
                    <div className="wrap-input">
                      <div className="input">
                        <div className="history">
                          <p style={{ fontSize: "18px" }}>Depature From</p>
                          <p style={{ fontSize: "18px" }}>{details.flight.departureCode}</p>
                        </div>
                        <div className="history">
                          <p style={{ fontSize: "18px" }}>Destination To</p>
                          <p style={{ fontSize: "18px" }}>{details.flight.arrivalCode}</p>
                        </div>
                      </div>

                      <Modal title="Flight Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[null]}>
                        <div className="name">
                          <h6>
                            {details.passenger.titleUser} {details.passenger.firstName}
                          </h6>
                        </div>

                        <div className="wrap-modal-detail-flight">
                          <div className="title-detail-flight">
                            <p>{details.flight.departureDate}</p>
                          </div>
                          <div className="modal-detail-flight">
                            <div className="airports">
                              <div>
                                <p>Depature Code</p>
                                <p>{details.flight.departureCode}</p>
                              </div>
                              <div>
                                <p>Flight Number</p>
                                <p>{details.flight.flightNumber}</p>
                              </div>
                              <div>
                                <p>Arrival Code</p>
                                <p>{details.flight.arrivalCode}</p>
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
                              <p>{details.flight.departureTime}</p>

                              <p>{details.flight.arrivalTime}</p>
                            </div>
                          </div>
                          <div></div>
                          <div></div>
                          <div>
                            <p>Total Price</p>
                            <p>{details.flight.price}</p>
                          </div>
                        </div>
                      </Modal>

                      <div className="history">
                        <p style={{ fontSize: "18px" }}>Plane Type</p>

                        <div>
                          <p style={{ fontSize: "18px" }}>{details.flight.plane.planeType}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button onClick={showModal} className="btn-detail-history">
                    History Detail
                  </button>
                </>
              ))}
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Histories;
