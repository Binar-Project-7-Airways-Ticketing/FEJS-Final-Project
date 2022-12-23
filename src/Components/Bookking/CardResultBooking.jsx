import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Modal, Empty } from "antd";
import logo from "../../logo.png";
import { BsCircle } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";
import { VscVm } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadPrice } from "../Feature/Models/GetPrice";
import { loadPagination } from "../Feature/Models/PaginationSlice";
import CardResultBookingOneWay from "./CardResultBookingOneWay";
import CardResultBookingReturn from "./CardResultBookingReturn";

export default function CardResultBooking() {
  // const { flight } = useSelector((state) => state.flight);
  // const { cityFrom } = useSelector((state) => state.cityFrom);
  // const { cityTo } = useSelector((state) => state.cityTo);
  const { trip } = useParams();

  const { Price } = useSelector((state) => state.getPrice);
  const [priceEconomy, setPriceEconomy] = useState("");
  const [priceBusiness, setPriceBusiness] = useState("");
  const [economy, setEconomy] = useState(false);
  const [business, setBusiness] = useState(false);
  const [detail, setDetail] = useState(false);
  const [modal, setModal] = useState(false);
  const [showReturn, setShowReturn] = useState(false);

  const [resultTo, setResultTo] = useState([]);
  const [resultFrom, setResultFrom] = useState([]);
  const [resultFlightReturn, setResultFlightReturn] = useState([]);
  const [resultFlightDepart, setResultFlightDepart] = useState([]);

  const [aktifPage, setAktifPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDepart = (e) => {
    localStorage.setItem("depart", JSON.stringify(e));
    alert("Silahkan pilih penerbangan kepulangan anda");
    setBusiness(false);
    setEconomy(false);
    setShowReturn(true);
  };
  const handleDepartOneWay = (e) => {
    localStorage.setItem("depart", JSON.stringify(e));
    setBusiness(false);
    setEconomy(false);
    setShowReturn(true);
    navigate("/transaction");
  };
  const handleReturn = (e) => {
    localStorage.setItem("return", JSON.stringify(e));
    setBusiness(false);
    setEconomy(false);
    setShowReturn(true);
    navigate("/transaction");
  };
  const detailClassEconomy = (e) => {
    dispatch(loadPrice(e));
    if (resultFlightReturn.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setEconomy(e);
    }
    let Class = {
      class: "Economy",
    };
    setPriceEconomy(
      Price.economy.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    );
    console.log(e);
    localStorage.setItem("class", JSON.stringify(Class));
    localStorage.setItem("priceDepart", JSON.stringify(Price.economy));
  };
  const detailClassBusiness = (e) => {
    if (resultFlightReturn.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setBusiness(e);
    }
    let Class = {
      class: "Economy",
    };
    setPriceBusiness(
      Price.business.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    );
    localStorage.setItem("class", JSON.stringify(Class));
    localStorage.setItem("priceDepart", JSON.stringify(Price.business));
  };
  const detailClassEconomyReturn = (e) => {
    dispatch(loadPrice(e));
    if (resultFlightReturn.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setEconomy(e);
    }
    let Class = {
      class: "Economy",
    };
    setPriceEconomy(
      Price.economy.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    );
    console.log(e);
    localStorage.setItem("class", JSON.stringify(Class));
    localStorage.setItem("priceReturn", JSON.stringify(Price.economy));
  };
  const detailClassBusinessReturn = (e) => {
    if (resultFlightReturn.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setBusiness(e);
    }
    let Class = {
      class: "Economy",
    };
    setPriceBusiness(
      Price.business.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    );
    localStorage.setItem("class", JSON.stringify(Class));
    localStorage.setItem("priceReturn", JSON.stringify(Price.business));
  };
  const detailClassEconomyOneWay = (e) => {
    dispatch(loadPrice(e));
    if (resultFlightDepart.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setEconomy(e);
    }
    let Class = {
      class: "Economy",
    };
    setPriceEconomy(
      Price.economy.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    );
    localStorage.setItem("class", JSON.stringify(Class));
  };
  const detailClassBusinessOneWay = (e) => {
    dispatch(loadPrice(e));
    if (resultFlightDepart.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setBusiness(e);
    }

    let Class = {
      class: "Business",
    };

    setPriceBusiness(
      Price.business.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    );

    localStorage.setItem("class", JSON.stringify(Class));
  };
  const detailClassClose = (e) => {
    if (e === 2) {
      setEconomy(false);
      setBusiness(false);
      setDetail(false);
    } else {
      setEconomy(false);
      setDetail(false);
      setBusiness(false);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (e) => {
    if (resultFlightReturn.filter((item) => item.idFlight === e)) {
      setIsModalOpen(true);
      setModal(e);
    }
  };
  const showModalOneWay = (e) => {
    console.log(e);
    if (resultFlightDepart.filter((item) => item.idFlight === e)) {
      setIsModalOpen(true);
      setModal(e);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const cityTo = JSON.parse(localStorage.getItem("cityTo"));
    const cityFrom = JSON.parse(localStorage.getItem("cityFrom"));
    const flightDepart = JSON.parse(localStorage.getItem("flightDepart"));
    const flightReturn = JSON.parse(localStorage.getItem("flightReturn"));

    setResultTo(cityTo);
    setResultFrom(cityFrom);
    setResultFlightDepart(flightDepart);
    setResultFlightReturn(flightReturn);
  }, [Price]);

  return (
    <section className="main-result-booking">
      <div className="container">
        {trip === "Return" ? (
          <CardResultBookingReturn />
        ) : (
          <CardResultBookingOneWay />
        )}
      </div>
    </section>
  );
}
