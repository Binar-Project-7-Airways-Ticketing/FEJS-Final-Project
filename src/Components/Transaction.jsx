import React, { useState, useMemo } from "react";
import {
  ContactsOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
  ArrowRightOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Button, Empty, Modal } from "antd";
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
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ModalSeat from "./Bookking/ModalSeat";
import { loadLuggages } from "./Feature/Models/LuggageSlice";
import { loadPayment } from "./Feature/Models/PaymentSlice";
import { createPayment } from "./Feature/Models/PaymentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ButtonFindFlight from "./Reusable/ButtonFindFlight";
import { loadUser } from "./Feature/Models/GetUser";

import { unwrapResult } from "@reduxjs/toolkit";
import { createPassenger } from "./Feature/Models/CreatePassenger";
import ComponentFormTransaction from "./ComponentFormTransaction";
import { createCategories } from "./Feature/Models/CreateCategory";
import { loadPrice } from "./Feature/Models/GetPrice";
import TransactionBusiness from "./TransactionBusiness";
import TransactionEconomy from "./TransactionEconomy";

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
  const [classFlight, setClassFlight] = useState("");

  useEffect(() => {
    const Class = JSON.parse(localStorage.getItem("class"));

    setClassFlight(Class);
  }, []);

  return (
    <React.Fragment>
      {classFlight.class === "BUSINESS" ? <TransactionBusiness /> : null}
      {classFlight.class === "ECONOMY" ? <TransactionEconomy /> : null}
    </React.Fragment>
  );
}
