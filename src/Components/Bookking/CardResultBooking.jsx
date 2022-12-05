import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Button, Modal } from "antd";
import logo from "../../logo.png";
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CardResultBooking() {
  const [economy, setEconomy] = useState(false);
  const [business, setBusiness] = useState(false);
  const navigate = useNavigate()

  const economyDetail = () => {
    setBusiness(false);
    setEconomy(true);
  };
  const economyDetailClose = () => {
    setEconomy(false);
  };
  const businessDetail = () => {
    setBusiness(true);
    setEconomy(false);
  };
  const businessDetailClose = () => {
    setBusiness(false);
  };
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
    <section className="main-result-booking">
      <div className="container">
        <div className="wrap-result-booking">
          <div className="title-result-booking">
            <h1>Select your departure flight from Jakarta to Singapore</h1>
          </div>
          <div className="card-result-booking">
            <div className="wrap-card-result-booking">
              <div className="card-booking">
                <div className="result-booking">
                  {economy ? (
                    <div className="card-class" onClick={economyDetailClose}>
                      <h4>Economy</h4>
                      <div className="idr">
                        <h6>IDR 4.300.000,00</h6>
                      </div>
                    </div>
                  ) : (
                    <div className="card-class" onClick={economyDetail}>
                      <h4>Economy</h4>
                      <div className="idr">
                        <h6>IDR 4.300.000,00</h6>
                      </div>
                    </div>
                  )}
                  {business ? (
                    <div className="card-class" onClick={businessDetailClose}>
                      <h4>Business</h4>
                      <div className="idr">
                        <h6>IDR 7.300.000,00</h6>
                      </div>
                    </div>
                  ) : (
                    <div className="card-class" onClick={businessDetail}>
                      <h4>Business</h4>
                      <div className="idr">
                        <h6>IDR 7.300.000,00</h6>
                      </div>
                    </div>
                  )}
                </div>
                <div className="card-detail">
                  <button onClick={showModal} className="btn-detail-flight">
                    Flight Detail
                  </button>
                  <div className="times">
                    <div className="time">
                      <p>10:30</p>
                      <h6>Jakarta</h6>
                    </div>
                    <div className="time-logo">
                      <img
                        style={{ width: "70px", height: "70px" }}
                        src={logo}
                      ></img>
                    </div>
                    <div className="time">
                      <p>14:40</p>
                      <h6>Singapore</h6>
                    </div>
                  </div>
                  <Modal
                    title="Flight Details"
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
                    </div>
                  </Modal>
                </div>
              </div>
              {economy ? (
                <div className="detail-economy-class">
                  <div className="benefit">
                    <h2>Economy Class Flight</h2>
                    <p>The benefits you get in economy class</p>
                    <div className="benefit-detail">
                      <div className="icon-benefit">
                        <AiOutlineCheck />
                        <AiOutlineCheck />
                        <AiOutlineCheck />
                        <AiOutlineCheck />
                        <AiOutlineCheck />
                      </div>
                      <div className="text-benefit">
                        <p>Cancel anytime without fees</p>
                        <p>Cancel anytime without fees</p>
                        <p>Cancel anytime without fees</p>
                        <p>Cancel anytime without fees</p>
                        <p>Cancel anytime without fees</p>
                      </div>
                    </div>
                    <div className="btn-select-class">
                    <p onClick={()=> navigate('/transaction')}>Select Class</p>
                    </div>
                  </div>
                  <div className="img-benefit">
                    <img src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {business ? (
                <div className="detail-economy-class">
                  <div className="benefit">
                    <h2>Business Class Flight</h2>
                    <p>The benefits you get in economy class</p>
                    <div className="benefit-detail">
                      <div className="icon-benefit">
                        <AiOutlineCheck />
                        <AiOutlineCheck />
                        <AiOutlineCheck />
                        <AiOutlineCheck />
                        <AiOutlineCheck />
                      </div>
                      <div className="text-benefit">
                        <p>Cancel anytime without fees</p>
                        <p>Cancel anytime without fees</p>
                        <p>Cancel anytime without fees</p>
                        <p>Cancel anytime without fees</p>
                        <p>Cancel anytime without fees</p>
                      </div>
                    </div>
                    <div className="btn-select-class">
                      <p onClick={()=> navigate('/transaction')}>Select Class</p>
                    </div>
                  </div>
                  <div className="img-benefit">
                    <img src="https://media.istockphoto.com/id/903718466/id/foto/pria-dengan-pesawat-jet-pribadi.jpg?s=612x612&w=0&k=20&c=alq9cAHoN6wZwyHq7UlH8Gueh_2wYwrZx6TkHYN-AEw="></img>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
