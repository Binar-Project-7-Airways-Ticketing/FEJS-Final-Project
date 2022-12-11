import React, { useState, useMemo } from "react";
import {
  ContactsOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
  ArrowRightOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Countdown from "react-countdown";
import Select from "react-select";
import countryList from "react-select-country-list";
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
import ModalSeat from "./Bookking/ModalSeat";
import { loadLuggages } from "./Feature/Models/LuggageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {hours}
        </span>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {minutes}
        </span>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {seconds}
        </span>
      </>
    );
  }
};

export default function Transaction() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [bagasi, setBagasi] = useState("");
  const [value1, setValue1] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const changeHandler1 = (value1) => {
    setValue1(value1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSeatOpen, setIsModalSeatOpen] = useState(false);
  const { luggages } = useSelector((state) => state.luggage);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalSeat = () => {
    setIsModalSeatOpen(true);
  };
  const handleCancelSeat = () => {
    setIsModalSeatOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalBayarOpen, setIsModalBayarOpen] = useState(false);

  const showModalBayar = () => {
    setIsModalBayarOpen(true);
  };

  const handleBayarOk = () => {
    setIsModalBayarOpen(false);
  };

  const handleBayarCancel = () => {
    setIsModalBayarOpen(false);
  };


  // method payment
  const dana = () => {
    // navigate('/payment')
    alert("Transasi akan diproses");
    setIsModalBayarOpen(false);
    navigate("/");
  };
  useEffect(() => {
    dispatch(loadLuggages());
  }, [luggages]);

  return (
    <>
      <div className="bg-brand-yellow">
        <Navbar />
        <div className="flex justify-center items-center pt-[80px] bg-brand-nude">
          <div className="flex my-2 gap-2 items-center">
            <h3 className="text-brand-black">
              Mohon selesaikan pesanan anda dalam{" "}
            </h3>
            <Countdown date={Date.now() + 900000} renderer={renderer} />
          </div>
        </div>
        <div className="booking-container">
          <div className="booking-left">
            <div className="parent-a w-full bg-brand-nude p-6 rounded-md border-2 border-brand-black">
              <div className="left-header">
                <span>
                  <ContactsOutlined />
                </span>
                <h3>Detail Pemesan</h3>
              </div>
              <div className="flex justify-start items-center gap-4 bg-brand-nude rounded-sm border-2 border-brand-gray p-2">
                <select className="bg-brand-nude" onClick={(e) => setBagasi(e.target.value)}>
                  <option >Select Extra Baggage</option>
                  {luggages.map((item) => (
                    <option>
                      +{item.capacity}kg ({item.price})
                    </option>
                  ))}
                  {/* <option>+5Kg x 2 (350000IDR)</option>
                    <option>+5Kg x 3 (525000IDR)</option>
                    <option>+5Kg x 4 (700000IDR)</option>
                    <option>+5Kg x 5 (875000IDR)</option>
                    <option>+5Kg x 6 (1050000IDR)</option> */}
                </select>
              </div>
              <div className="left-content">
                <div className="flex w-full gap-8 mb-2 ">
                  <select
                    className="border-brand-gray pr-4 border-2 rounded-md"
                    type="text"
                  >
                    <option value="Tuan">Tuan</option>
                    <option value="Nyonya">Nyonya</option>
                    <option value="Nona">Nona</option>
                  </select>
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                </div>
                <div className="flex mb-2 w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex mb-2 w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <Select
                      options={options}
                      value={value}
                      onChange={changeHandler}
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div className="flex mb-2 w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                      type="text"
                      placeholder="No Telepon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="parent-b w-full bg-brand-nude p-6 mt-6 rounded-md border-2 border-brand-black">
              <div className="left-header">
                <span>
                  <ContactsOutlined />
                </span>
                <h3>Detail Penumpang</h3>
              </div>
              <div className="left-content">
                <div className="flex w-full gap-8 mb-2 ">
                  <select
                    className="border-brand-gray p-2 border-2 rounded-md"
                    type="text"
                  >
                    <option value="Tuan">Tuan</option>
                    <option value="Nyonya">Nyonya</option>
                    <option value="Nona">Nona</option>
                  </select>
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                </div>
                <div className="flex mb-2 w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex mb-2 w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <Select
                      className="placeholder:text-black"
                      options={options}
                      value1={value1}
                      onChange={changeHandler1}
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                      type="text"
                      placeholder="No Telepon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="parent-c w-full bg-brand-nude p-6 mt-6 rounded-md border-2 border-brand-black">
              <div className="left-header">
                <span>
                  <UnorderedListOutlined />
                </span>
                <h3>Extra Fasilitas</h3>
              </div>
              <div className="flex justify-between items-center mb-4 gap-4">
                <div className="flex justify-start items-center mb-4 gap-4">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <h3 className="text-[20px] mt-2">Bagasi</h3>
                </div>
                <div className="flex justify-start items-center gap-4 bg-brand-nude rounded-sm border-2 border-brand-gray p-2">
                  <select onClick={(e) => setBagasi(e.target.value)}>
                    <option>Select Extra Baggage</option>
                    {luggages.map((item) => (
                      <option>
                        +{item.capacity}kg ({item.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-start items-center mb-4 gap-4">
                <span>
                  <ShoppingOutlined />
                </span>
                <h3
                  onClick={showModalSeat}
                  className="text-[20px] mt-2 cursor-pointer"
                >
                  Seats
                </h3>
                <ModalSeat
                  isModalOpen={isModalSeatOpen}
                  handleCancel={handleCancelSeat}
                />
              </div>
              <div className="parent-d w-full mt-6 flex justify-end">
                <button
                  className="block rounded-lg cursor-pointer justify-center h-[60px] w-[50%] bg-brand-yellow text-[#f9f9f9] border-0 font-[600] tracking-[2px]"
                  type="submit"
                  onClick={showModalBayar}
                >
                  LANJUT PEMBAYARAN
                </button>
                <Modal
                  title="Select Payment Method"
                  open={isModalBayarOpen}
                  onOk={handleBayarOk}
                  onCancel={handleBayarCancel}
                  footer={[null]}
                >
                  <div className="p-2 mt-4">
                    <div
                      onClick={dana}
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
                </Modal>
              </div>
            </div>
            <div className="parent-d w-full mt-6 flex justify-end">
              <button
                className="block rounded-lg cursor-pointer justify-center h-[60px] w-[50%] bg-brand-green text-[#f9f9f9] border-0 font-[600] tracking-[2px]"
                type="submit"
                onClick={showModalBayar}
              >
                LANJUT PEMBAYARAN
              </button>
              <Modal
                title="Select Payment Method"
                open={isModalBayarOpen}
                onOk={handleBayarOk}
                onCancel={handleBayarCancel}
                footer={[null]}
              >
                <div className="p-2 mt-4">
                  <div
                    onClick={dana}
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
              </Modal>
            </div>
          </div>

          <div className="booking-right">
            <div className="w-full">
              <div className="parent-a w-full bg-brand-whiteLight p-6 rounded-md border-2 border-brand-black">
                <div className="w-full bg-blue-300 p-2 mb-4 gap-4 rounded-md">
                  <h3 className="text-[20px] text-black font-semibold mb-2">
                    Penerbangan
                  </h3>
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
                      <button className="text-blue-600" onClick={showModal}>
                        Detail
                      </button>
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
                </div>
                <div className="w-full my-[2rem]">
                  <h3 className="text-[20px] text-black mb-4">
                    Kebijakan Tiket
                  </h3>
                  <div className="flex justify-start items-center mb-4 gap-4">
                    <span>
                      <DollarCircleOutlined />
                    </span>
                    <p className="mt-2">Bisa Refund</p>
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
                      <span className="w-full">Rp. 0,-</span>
                    </div>
                  </div>
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
      <Footer />
    </div>
    </>
  );
}
