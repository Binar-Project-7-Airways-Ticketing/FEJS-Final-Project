import React, { useState, useMemo } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Countdown from "react-countdown";
import Select from "react-select";
import countryList from "react-select-country-list";
import { AiOutlineCheck } from "react-icons/ai";
import { MdEventSeat } from "react-icons/md";
import { Button, Modal, Checkbox } from "antd";
import {
  ContactsOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
  ArrowRightOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

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
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState({
    seat1: [
      {
        id: 1,
        status: true,
        price: "317.000",
      },
      {
        id: 2,
        status: null,
        price: "317.000",
      },
      {
        id: 3,
        status: null,
        price: "317.000",
      },
      {
        id: 4,
        status: true,
        price: "317.000",
      },
      {
        id: 5,
        status: true,
        price: "317.000",
      },
    ],
    seat2: [
      {
        id: 6,
        status: null,
        price: "317.000",
      },
      {
        id: 7,
        status: null,
        price: "317.000",
      },
      {
        id: 8,
        status: true,
        price: "317.000",
      },
      {
        id: 9,
        status: true,
        price: "317.000",
      },
      {
        id: 10,
        status: null,
        price: "317.000",
      },
    ],
    seat3: [
      {
        id: 11,
        status: null,
        price: "317.000",
      },
      {
        id: 12,
        status: true,
        price: "317.000",
      },
      {
        id: 13,
        status: true,
        price: "317.000",
      },
      {
        id: 14,
        status: null,
        price: "317.000",
      },
      {
        id: 15,
        status: null,
        price: "317.000",
      },
    ],
  });
  console.log(seats);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (e) => {
    if (e.status === null) {
      e.status = false;
    } else {
      if (e.status === true) {
        e.status = true;
      } else {
        e.status = false;
      }
    }
    setSeats({ ...seats, [e.status.value]: [e.status.name] });
    setPrice(e.price);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <>
      <div className="bg-gray-200">
        <Navbar />
        <div className="flex justify-center items-center pt-[80px] bg-brand-black">
          <div className="flex my-2 gap-2 items-center">
            <h3 className="text-brand-nude">
              Mohon selesaikan pesanan anda dalam{" "}
            </h3>
            <Countdown date={Date.now() + 900000} renderer={renderer} />
          </div>
        </div>
        <div className="booking-container">
          <div className="booking-left">
            <div className="parent-a w-full bg-white p-6">
              <div className="left-header">
                <span>
                  <ContactsOutlined />
                </span>
                <h3>Detail Pemesan</h3>
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
                      className="w-full p-2 focus:outline-none text-black placeholder:text-black"
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                </div>
                <div className="flex mb-2 w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-black"
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
                    />
                    <Select
                      options={options}
                      value={value}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="flex mb-2 w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-black"
                      type="text"
                      placeholder="No Telepon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="parent-b w-full bg-white p-6 mt-6">
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
                      className="w-full p-2 focus:outline-none text-black placeholder:text-black"
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                </div>
                <div className="flex mb-2 w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-black"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                    <input
                      className="w-full p-2 focus:outline-none text-black placeholder:text-black"
                      type="text"
                      placeholder="No Telepon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="parent-c w-full bg-white p-6 mt-6">
              <div className="left-header">
                <span>
                  <UnorderedListOutlined />
                </span>
                <h3>Extra Fasilitas</h3>
              </div>
              <div className="left-content">
                <span className="p-2">
                  <ShoppingOutlined />
                </span>
                <h3>Bagasi</h3>
                <h3 style={{ cursor: "pointer" }} onClick={showModal}>
                  Seats
                </h3>
                <p></p>
              </div>
            </div>
            <button
              className="flex cursor-pointer justify-center h-[60px] w-[50%] p-4 bg-brand-yellow text-[#f9f9f9] border-0 font-[600] tracking-[2px] m-4"
              type="submit"
            >
              LANJUT PEMBAYARAN
            </button>
            <div className="flex justify-start items-center mb-4 gap-4">
              <span>
                <ShoppingOutlined />
              </span>
              <h3 className="text-[20px] mt-2">Bagasi</h3>
            </div>
          </div>
          <div className="parent-d w-full mt-6 flex justify-end">
            <button
              className="block rounded-lg cursor-pointer justify-center h-[60px] w-[50%] bg-brand-yellow text-[#f9f9f9] border-0 font-[600] tracking-[2px]"
              type="submit"
            >
              LANJUT PEMBAYARAN
            </button>
          </div>
        </div>

        <div className="booking-right">
          <div className="w-full bg-white">
            <div className="parent-a w-full bg-white p-6">
              <div className="flex justify-start items-center mb-4 gap-4">
                <h3 className="text-[20px] text-black mb-2">Penerbangan</h3>
              </div>
              <div className="py-2">
                <div className="flex w-full gap-8 mb-2 ">
                  <div className="flex w-full gap-4">
                    <h3>Jakarta</h3>
                    <span>
                      <ArrowRightOutlined />
                    </span>
                    <h3>Makassar</h3>
                  </div>
                  <div>
                    <a href="">Detail</a>
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
                  <div className="flex justify-start items-center mb-4 gap-4">
                    <span>
                      <ScheduleOutlined />
                    </span>
                    <p className="mt-2">Bisa Rescedhule</p>
                  </div>
                </div>
                <div className="flex w-full my-[2rem]">
                  <div>
                    <h3 className="text-[20px] text-black mb-4">
                      Total Pembayaran
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-right"></div>
      </div>

      <Footer />
      <Modal
        title="Choose your seats"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[null]}
        width={1250}
        className="modal"
      >
        <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
          Jakarta ---- Singapore
        </h1>
        <div className="wrap-detail-seats">
          <div className="detail-seats">
            <div className="status-seats">
              <div>
                <div>
                  <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Passenger List
                  </h1>
                  <p>Harga kursi IDR {price}</p>
                </div>
                <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Description seat
                </h1>
              </div>
              <div className="status">
                <div className="icon-status">
                  <MdEventSeat style={{ color: "#cba052" }} />
                  <MdEventSeat style={{ color: "black" }} />
                  <MdEventSeat style={{ color: "red" }} />
                </div>
                <div className="icon-mean">
                  <p>Kursi dipilih</p>
                  <p>Kursi tersedia</p>
                  <p>Kursi tidak tersedia</p>
                </div>
              </div>
            </div>
            <div className="plane">
              <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
                GAU 405 AIRBUS{" "}
              </h1>

              <div className="seats">
                <div className="seats1">
                  {seats.seat1.map((item) => (
                    <MdEventSeat
                      onClick={(e) => onChange(item)}
                      color={
                        item.status === true
                          ? "red"
                          : item.status === false
                          ? "black"
                          : item.status === null
                          ? "white"
                          : "white"
                      }
                    />
                  ))}
                </div>
                <div className="seats2">
                  {seats.seat2.map((item) => (
                    <MdEventSeat
                      onClick={(e) => onChange(item)}
                      style={item.status ? { color: "red" } : null}
                    />
                  ))}
                </div>
                <div className="seats1">
                  {seats.seat3.map((item) => (
                    <MdEventSeat
                      onClick={(e) => onChange(item)}
                      style={item.status ? { color: "red" } : null}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="detail-service">
            <h1>haloooo</h1>
          </div>
        </div>
      </Modal>
    </>
  );
}
