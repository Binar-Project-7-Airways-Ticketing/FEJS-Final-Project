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
    if (resultFlightReturn.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setEconomy(e);
    }
  };
  const detailClassBusiness = (e) => {
    if (resultFlightReturn.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setBusiness(e);
    }
    // localStorage.setItem()
  };
  const detailClassEconomyOneWay = (e) => {
    dispatch(loadPrice(e));
    if (resultFlightDepart.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setEconomy(e);
    }
    let x = {
      class: "Economy",
    };
    setPriceEconomy(Price.economy.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."))
    localStorage.setItem("class", JSON.stringify(x));
  };
  const detailClassBusinessOneWay = (e) => {
    dispatch(loadPrice(e));
    if (resultFlightDepart.filter((item) => item.idFlight === e)) {
      setDetail(true);
      setBusiness(e);
    }

    let x = {
      class: "Business",
    };

    setPriceBusiness(
      Price.business.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    );

    localStorage.setItem("class", JSON.stringify(x));
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
          <>
            {resultFlightDepart.length && resultFlightReturn.length !== 0 ? (
              <>
                <div className="pt-14">
                  <div className="text-brand-black 2xl:w-3/5 xl:w-3/4 mb-5">
                    <h6>{new Date().toLocaleDateString()}</h6>
                    <h2 className="mb-5 mt-5">
                      Select your departure flight from{" "}
                      <b className="text-brand-yellow">{resultFrom.city}</b> to{" "}
                      <b className="text-brand-yellow">{resultTo.city}</b>
                    </h2>
                    <div className="flex justify-between">
                      <h6>
                        Result {resultFlightDepart.length} Flight for you{" "}
                      </h6>
                      <h6>
                        Result {resultFlightDepart.length} Flight for you{" "}
                      </h6>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    {resultFlightDepart.map((item, i) => (
                      <div key={i} className="card-result-booking">
                        <div className="wrap-card-result-booking">
                          <div className="flex w-full lg:flex-row gap-5 sm:flex-col-reverse">
                            <div className="flex sm:grid sm:grid-cols-2 gap-5 w-full">
                              <>
                                {detail ? (
                                  <div
                                    className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                    onClick={() =>
                                      detailClassClose(item.idPlaneClass)
                                    }
                                  >
                                    {item.plane.planeClass
                                      .filter(
                                        (item) => item.planeClass === "ECONOMY"
                                      )
                                      .map((item, i) => (
                                        <h4 key={i}>{item.planeClass}</h4>
                                      ))}
                                    <div className="idr">
                                      <h5>
                                        IDR{" "}
                                        {item.price
                                          .toString()
                                          .replace(
                                            /(\d)(?=(\d\d\d)+(?!\d))/g,
                                            "$1."
                                          )}
                                      </h5>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                    onClick={() =>
                                      detailClassEconomy(item.idFlight)
                                    }
                                  >
                                    {item.plane.planeClass
                                      .filter(
                                        (item) => item.planeClass === "ECONOMY"
                                      )
                                      .map((item, i) => (
                                        <h4 key={i}>{item.planeClass}</h4>
                                      ))}
                                    <div className="idr">
                                      <h5>
                                        IDR{" "}
                                        {item.price
                                          .toString()
                                          .replace(
                                            /(\d)(?=(\d\d\d)+(?!\d))/g,
                                            "$1."
                                          )}
                                      </h5>
                                    </div>
                                  </div>
                                )}
                              </>

                              <>
                                {detail ? (
                                  <div
                                    className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                    onClick={() =>
                                      detailClassClose(item.idPlaneClass)
                                    }
                                  >
                                    {item.plane.planeClass
                                      .filter(
                                        (item) => item.planeClass === "BUSINESS"
                                      )
                                      .map((item, i) => (
                                        <h4 key={i}>{item.planeClass}</h4>
                                      ))}
                                    <div className="idr">
                                      <h5>
                                        IDR{" "}
                                        {(
                                          Number(item.price) +
                                          Number(
                                            item.plane.planeClass
                                              .filter(
                                                (item) =>
                                                  item.planeClass === "BUSINESS"
                                              )
                                              .map((item) => item.price)
                                          )
                                        )
                                          .toString()
                                          .replace(
                                            /(\d)(?=(\d\d\d)+(?!\d))/g,
                                            "$1."
                                          )}
                                      </h5>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                    onClick={() =>
                                      detailClassBusiness(item.idFlight)
                                    }
                                  >
                                    {item.plane.planeClass
                                      .filter((item) => item.idPlaneClass === 2)
                                      .map((item, i) => (
                                        <h4 key={i}>{item.planeClass}</h4>
                                      ))}
                                    <div className="idr">
                                      <h5>
                                        IDR{" "}
                                        {(
                                          Number(item.price) +
                                          Number(
                                            item.plane.planeClass
                                              .filter(
                                                (item) =>
                                                  item.idPlaneClass === 2
                                              )
                                              .map((item) => item.price)
                                          )
                                        )
                                          .toString()
                                          .replace(
                                            /(\d)(?=(\d\d\d)+(?!\d))/g,
                                            "$1."
                                          )}
                                      </h5>
                                    </div>
                                  </div>
                                )}
                              </>
                            </div>
                            <div className="flex flex-col p-5 bg-brand-whiteLight items-end rounded-lg w-full h-44 text-brand-black">
                              <button
                                onClick={() => showModal(item.idFlight)}
                                className="btn-detail-flight"
                              >
                                Flight Detail
                              </button>
                              <div className="times">
                                <div className="flex flex-col items-center justify-center w-3/5">
                                  <h4>{item.departureTime}</h4>
                                  <h6>{resultFrom.city}</h6>
                                </div>
                                <div className="time-logo">
                                  <img
                                    className="xl:w-36 xl:h-36 lg:w-28 lg:h-28 sm:w-16 smh-20"
                                    src={logo}
                                  ></img>
                                </div>
                                <div className="flex flex-col items-center justify-center w-3/5">
                                  <h4>{item.arrivalTime}</h4>
                                  <h6>{resultTo.city}</h6>
                                </div>
                              </div>
                              {modal === item.idFlight
                                ? resultFlightDepart
                                    .filter((item) => item.idFlight === modal)
                                    .map((item) => (
                                      <Modal
                                        title="Flight Details"
                                        open={isModalOpen}
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                        footer={[null]}
                                      >
                                        <div className="wrap-modal-detail-flight">
                                          <div className="title-detail-flight">
                                            <p>
                                              {resultFrom.city} to{" "}
                                              {resultTo.city}
                                            </p>
                                            <p>Saturday, Nov 26</p>
                                          </div>
                                          <div className="flex w-full gap-7 ">
                                            <div className="flex w-full flex-col justify-between gap-5">
                                              <div>
                                                <p>{resultFrom.city}</p>
                                                <p>{resultFrom.airportName}</p>
                                              </div>
                                              <div>
                                                <p>
                                                  {item.flightNumber}{" "}
                                                  {item.plane.planeType}
                                                </p>
                                                <p>Flight by 7-Airways</p>
                                              </div>
                                              <div>
                                                <p>{resultTo.city}</p>
                                                <p>{resultTo.airportName}</p>
                                              </div>
                                            </div>

                                            <div className="flex flex-col items-center w-full">
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
                                            <div className="flex flex-col justify-between w-full">
                                              <p>{item.departureTime} WIB</p>

                                              <p>{item.arrivalTime} WIB</p>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal>
                                    ))
                                : null}
                            </div>
                          </div>
                          {economy === item.idFlight ? (
                            <div className="detail-economy-class flex w-full gap-5 sm:grid sm:grid-rows-2">
                              <div className="benefit sm:w-full">
                                <h2>Economy Class Flight</h2>
                                <p>The benefits you get in economy class</p>
                                <div className="benefit-detail">
                                  <div className="icon-benefit">
                                    <AiOutlineCheck />
                                    <BsCreditCard2Back />
                                    <MdFastfood />
                                    <AiOutlineDollar />
                                  </div>
                                  <div className="text-benefit">
                                    <p>Cancel anytime without fees</p>
                                    <p>
                                      Money Back Guarantee If The Delay Exceeds
                                      1 Hour
                                    </p>
                                    <p>Get Snacks During The Trip </p>
                                    <p>Cheapest Price To Your Destination</p>
                                  </div>
                                </div>
                                <div className="bg-brand-yellow rounded-md lg:w-1/4 w-1/3 sm:w-full  text-center cursor-pointer py-1.5 px-2.5 ">
                                  <p onClick={() => handleDepart(item)}>
                                    Select Class
                                  </p>
                                </div>
                              </div>
                              <div className="img-benefit">
                                <img src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
                              </div>
                            </div>
                          ) : null}
                          {business === item.idFlight ? (
                            <div className="detail-economy-class flex w-full gap-5 sm:grid sm:grid-rows-2">
                              <div className="benefit  sm:w-full">
                                <h2>Business Class Flight</h2>
                                <p>The benefits you get in economy class</p>
                                <div className="benefit-detail">
                                  <div className="icon-benefit">
                                    <AiOutlineCheck />
                                    <GiNightSleep />
                                    <VscVm />
                                    <AiOutlineDollar />
                                    <MdFastfood />
                                  </div>
                                  <div className="text-benefit">
                                    <p>Cancel anytime without fees</p>
                                    <p>
                                      Sleep Well Because It Is Equipped With a
                                      Comfortable Bed
                                    </p>
                                    <p>
                                      Many Entertainment Options That You Can
                                      Enjoy
                                    </p>
                                    <p>
                                      Money Back Guarantee If The Delay Exceeds
                                      15 Minutes
                                    </p>
                                    <p>Get Anything Food You Want</p>
                                  </div>
                                </div>
                                <div className="bg-brand-yellow rounded-md lg:w-1/4 w-1/3 sm:w-full  text-center cursor-pointer py-1.5 px-2.5 ">
                                  <p onClick={() => handleDepart(item)}>
                                    Select Class
                                  </p>
                                </div>
                              </div>
                              <div className="img-benefit ">
                                <img src="https://media.istockphoto.com/id/903718466/id/foto/pria-dengan-pesawat-jet-pribadi.jpg?s=612x612&w=0&k=20&c=alq9cAHoN6wZwyHq7UlH8Gueh_2wYwrZx6TkHYN-AEw="></img>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-14">
                  {showReturn ? (
                    <>
                      <div className="text-brand-black 2xl:w-3/5 xl:w-3/4 mb-5">
                        <h6>{new Date().toLocaleDateString()}</h6>
                        <h2 className="mb-5 mt-5">
                          Select your Return flight from{" "}
                          <b className="text-brand-yellow">{resultTo.city}</b>{" "}
                          to{" "}
                          <b className="text-brand-yellow">{resultFrom.city}</b>
                        </h2>
                        <h6>
                          Result {resultFlightReturn.length} Flight for you{" "}
                        </h6>
                      </div>
                      <div className="flex flex-col gap-5">
                        {resultFlightReturn.map((item, i) => (
                          <div key={i} className="card-result-booking">
                            <div className="wrap-card-result-booking">
                              <div className="flex w-full lg:flex-row gap-5 sm:flex-col-reverse">
                                <div className="flex sm:grid sm:grid-cols-2 gap-5 w-full">
                                  <>
                                    {detail ? (
                                      <div
                                        className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                        onClick={() =>
                                          detailClassClose(item.idPlaneClass)
                                        }
                                      >
                                        {item.plane.planeClass
                                          .filter(
                                            (item) =>
                                              item.planeClass === "ECONOMY"
                                          )
                                          .map((item, i) => (
                                            <h4 key={i}>{item.planeClass}</h4>
                                          ))}
                                        <div className="idr">
                                          <h5>
                                            IDR{" "}
                                            {item.price
                                              .toString()
                                              .replace(
                                                /(\d)(?=(\d\d\d)+(?!\d))/g,
                                                "$1."
                                              )}
                                          </h5>
                                        </div>
                                      </div>
                                    ) : (
                                      <div
                                        className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                        onClick={() =>
                                          detailClassEconomy(item.idFlight)
                                        }
                                      >
                                        {item.plane.planeClass
                                          .filter(
                                            (item) =>
                                              item.planeClass === "ECONOMY"
                                          )
                                          .map((item, i) => (
                                            <h4 key={i}>{item.planeClass}</h4>
                                          ))}
                                        <div className="idr">
                                          <h5>
                                            IDR{" "}
                                            {item.price
                                              .toString()
                                              .replace(
                                                /(\d)(?=(\d\d\d)+(?!\d))/g,
                                                "$1."
                                              )}
                                          </h5>
                                        </div>
                                      </div>
                                    )}
                                  </>

                                  <>
                                    {detail ? (
                                      <div
                                        className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                        onClick={() =>
                                          detailClassClose(item.idPlaneClass)
                                        }
                                      >
                                        {item.plane.planeClass
                                          .filter(
                                            (item) =>
                                              item.planeClass === "BUSINESS"
                                          )
                                          .map((item, i) => (
                                            <h4 key={i}>{item.planeClass}</h4>
                                          ))}
                                        <div className="idr">
                                          <h5>
                                            IDR{" "}
                                            {(
                                              Number(item.price) +
                                              Number(
                                                item.plane.planeClass
                                                  .filter(
                                                    (item) =>
                                                      item.planeClass ===
                                                      "BUSINESS"
                                                  )
                                                  .map((item) => item.price)
                                              )
                                            )
                                              .toString()
                                              .replace(
                                                /(\d)(?=(\d\d\d)+(?!\d))/g,
                                                "$1."
                                              )}
                                          </h5>
                                        </div>
                                      </div>
                                    ) : (
                                      <div
                                        className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                        onClick={() =>
                                          detailClassBusiness(item.idFlight)
                                        }
                                      >
                                        {item.plane.planeClass
                                          .filter(
                                            (item) => item.idPlaneClass === 2
                                          )
                                          .map((item, i) => (
                                            <h4 key={i}>{item.planeClass}</h4>
                                          ))}
                                        <div className="idr">
                                          <h5>
                                            IDR{" "}
                                            {(
                                              Number(item.price) +
                                              Number(
                                                item.plane.planeClass
                                                  .filter(
                                                    (item) =>
                                                      item.idPlaneClass === 2
                                                  )
                                                  .map((item) => item.price)
                                              )
                                            )
                                              .toString()
                                              .replace(
                                                /(\d)(?=(\d\d\d)+(?!\d))/g,
                                                "$1."
                                              )}
                                          </h5>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                </div>
                                <div className="flex flex-col p-5 bg-brand-whiteLight items-end rounded-lg w-full h-44 text-brand-black">
                                  <button
                                    onClick={() => showModal(item.idFlight)}
                                    className="btn-detail-flight"
                                  >
                                    Flight Detail
                                  </button>
                                  <div className="times">
                                    <div className="flex flex-col items-center justify-center w-3/5">
                                      <h4>{item.departureTime}</h4>
                                      <h6>{resultTo.city}</h6>
                                    </div>
                                    <div className="time-logo">
                                      <img
                                        className="xl:w-36 xl:h-36 lg:w-28 lg:h-28 sm:w-16 smh-20"
                                        src={logo}
                                      ></img>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-3/5">
                                      <h4>{item.arrivalTime}</h4>
                                      <h6>{resultFrom.city}</h6>
                                    </div>
                                  </div>
                                  {modal === item.idFlight
                                    ? resultFlightReturn
                                        .filter(
                                          (item) => item.idFlight === modal
                                        )
                                        .map((item) => (
                                          <Modal
                                            title="Flight Details"
                                            open={isModalOpen}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                            footer={[null]}
                                          >
                                            <div className="wrap-modal-detail-flight">
                                              <div className="title-detail-flight">
                                                <p>
                                                  {resultFrom.city} to{" "}
                                                  {resultTo.city}
                                                </p>
                                                <p>Saturday, Nov 26</p>
                                              </div>
                                              <div className="flex w-full gap-7 ">
                                                <div className="flex w-full flex-col justify-between gap-5">
                                                  <div>
                                                    <p>{resultTo.city}</p>
                                                    <p>
                                                      {resultTo.airportName}
                                                    </p>
                                                  </div>
                                                  <div>
                                                    <p>
                                                      {item.flightNumber}{" "}
                                                      {item.plane.planeType}
                                                    </p>
                                                    <p>Flight by 7-Airways</p>
                                                  </div>
                                                  <div>
                                                    <p>{resultFrom.city}</p>
                                                    <p>
                                                      {resultFrom.airportName}
                                                    </p>
                                                  </div>
                                                </div>

                                                <div className="flex flex-col items-center w-full">
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
                                                        border:
                                                          "1px solid black",
                                                      }}
                                                    ></img>
                                                  </div>
                                                  <div className="circle">
                                                    <BsCircle />
                                                  </div>
                                                </div>
                                                <div className="flex flex-col justify-between w-full">
                                                  <p>
                                                    {item.departureTime} WIB
                                                  </p>

                                                  <p>{item.arrivalTime} WIB</p>
                                                </div>
                                              </div>
                                            </div>
                                          </Modal>
                                        ))
                                    : null}
                                </div>
                              </div>
                              {economy === item.idFlight ? (
                                <div className="detail-economy-class flex w-full gap-5 sm:grid sm:grid-rows-2">
                                  <div className="benefit sm:w-full">
                                    <h2>Economy Class Flight</h2>
                                    <p>The benefits you get in economy class</p>
                                    <div className="benefit-detail">
                                      <div className="icon-benefit">
                                        <AiOutlineCheck />
                                        <BsCreditCard2Back />
                                        <MdFastfood />
                                        <AiOutlineDollar />
                                      </div>
                                      <div className="text-benefit">
                                        <p>Cancel anytime without fees</p>
                                        <p>
                                          Money Back Guarantee If The Delay
                                          Exceeds 1 Hour
                                        </p>
                                        <p>Get Snacks During The Trip </p>
                                        <p>
                                          Cheapest Price To Your Destination
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bg-brand-yellow rounded-md lg:w-1/4 w-1/3 sm:w-full text-center cursor-pointer py-1.5 px-2.5 ">
                                      <p onClick={() => handleReturn(item)}>
                                        Select Class
                                      </p>
                                    </div>
                                  </div>
                                  <div className="img-benefit">
                                    <img src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
                                  </div>
                                </div>
                              ) : null}
                              {business === item.idFlight ? (
                                <div className="detail-economy-class flex w-full gap-5 sm:grid sm:grid-rows-2">
                                  <div className="benefit sm:w-full">
                                    <h2>Business Class Flight</h2>
                                    <p>The benefits you get in economy class</p>
                                    <div className="benefit-detail">
                                      <div className="flex flex-col justify-around gap-2">
                                        <AiOutlineCheck />
                                        <GiNightSleep />
                                        <VscVm />
                                        <AiOutlineDollar />
                                        <MdFastfood />
                                      </div>
                                      <div className="text-benefit">
                                        <p>Cancel anytime without fees</p>
                                        <p>
                                          Sleep Well Because It Is Equipped With
                                          a Comfortable Bed
                                        </p>
                                        <p>
                                          Many Entertainment Options That You
                                          Can Enjoy
                                        </p>
                                        <p>
                                          Money Back Guarantee If The Delay
                                          Exceeds 15 Minutes
                                        </p>
                                        <p>Get Anything Food You Want</p>
                                      </div>
                                    </div>
                                    <div className="bg-brand-yellow rounded-md lg:w-1/4 w-1/3 sm:w-full text-center cursor-pointer py-1.5 px-2.5 ">
                                      {item.plane.planeClass
                                        .filter(
                                          (item) => item.idPlaneClass === 2
                                        )
                                        .map((item) => (
                                          <p onClick={() => handleReturn(item)}>
                                            Select Class
                                          </p>
                                        ))}
                                    </div>
                                  </div>
                                  <div className="img-benefit">
                                    <img src="https://media.istockphoto.com/id/903718466/id/foto/pria-dengan-pesawat-jet-pribadi.jpg?s=612x612&w=0&k=20&c=alq9cAHoN6wZwyHq7UlH8Gueh_2wYwrZx6TkHYN-AEw="></img>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </>
            ) : (
              <div className="pt-14 h-screen">
                <div className="card-result-booking">
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {resultFlightDepart.length !== 0 ? (
              <div className="pt-14">
                <div className="text-brand-black 2xl:w-3/5 xl:w-3/4 mb-5">
                  <h6>{new Date().toLocaleDateString()}</h6>
                  <h2 className="mb-5 mt-5">
                    Select your departure flight from{" "}
                    <b className="text-brand-yellow">{resultFrom.city}</b> to{" "}
                    <b className="text-brand-yellow">{resultTo.city}</b>
                  </h2>
                  <div className="flex justify-between">
                    <h6>Result {resultFlightDepart.length} Flight for you </h6>
                    <div className="bg-brand-yellow p-2 rounded-lg text-brand-whiteLight w-40 h-8">
                      {resultFlightDepart.map((item, i) => (
                        <>
                          {economy === item.idFlight ||
                          business === item.idFlight
                            ? null
                            : null}
                          {economy === item.idFlight ? (
                            <h6>
                              Total Harga Rp.
                              {priceEconomy}
                            </h6>
                          ) : null}
                          {business === item.idFlight ? (
                            <h6>
                              Total Harga Rp.
                              {
                                priceBusiness
                                // .toString()
                                // .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
                              }
                            </h6>
                          ) : null}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  {resultFlightDepart.map((item, i) => (
                    <div key={i} className="card-result-booking">
                      <div className="wrap-card-result-booking">
                        <div className="flex w-full lg:flex-row gap-5 sm:flex-col-reverse">
                          <div className="flex sm:grid sm:grid-cols-2 gap-5 w-full">
                            <>
                              {detail ? (
                                <div
                                  className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                  onClick={() =>
                                    detailClassClose(item.idPlaneClass)
                                  }
                                >
                                  {item.plane.planeClass
                                    .filter(
                                      (item) => item.planeClass === "ECONOMY"
                                    )
                                    .map((item, i) => (
                                      <h4 key={i}>{item.planeClass}</h4>
                                    ))}
                                  <div className="idr">
                                    <h5>
                                      IDR{" "}
                                      {item.price
                                        .toString()
                                        .replace(
                                          /(\d)(?=(\d\d\d)+(?!\d))/g,
                                          "$1."
                                        )}
                                    </h5>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                  onClick={() =>
                                    detailClassEconomyOneWay(item.idFlight)
                                  }
                                >
                                  {item.plane.planeClass
                                    .filter(
                                      (item) => item.planeClass === "ECONOMY"
                                    )
                                    .map((item, i) => (
                                      <h4 key={i}>{item.planeClass}</h4>
                                    ))}
                                  <div className="idr">
                                    <h5>
                                      IDR{" "}
                                      {item.price
                                        .toString()
                                        .replace(
                                          /(\d)(?=(\d\d\d)+(?!\d))/g,
                                          "$1."
                                        )}
                                    </h5>
                                  </div>
                                </div>
                              )}
                            </>

                            <>
                              {detail ? (
                                <div
                                  className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                  onClick={() =>
                                    detailClassClose(item.idPlaneClass)
                                  }
                                >
                                  {item.plane.planeClass
                                    .filter(
                                      (item) => item.planeClass === "BUSINESS"
                                    )
                                    .map((item, i) => (
                                      <h4 key={i}>{item.planeClass}</h4>
                                    ))}
                                  <div className="idr">
                                    <h5>
                                      IDR{" "}
                                      {(
                                        Number(item.price) +
                                        Number(
                                          item.plane.planeClass
                                            .filter(
                                              (item) =>
                                                item.planeClass === "BUSINESS"
                                            )
                                            .map((item) => item.price)
                                        )
                                      )
                                        .toString()
                                        .replace(
                                          /(\d)(?=(\d\d\d)+(?!\d))/g,
                                          "$1."
                                        )}
                                    </h5>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                  onClick={() =>
                                    detailClassBusinessOneWay(item.idFlight)
                                  }
                                >
                                  {item.plane.planeClass
                                    .filter((item) => item.idPlaneClass === 2)
                                    .map((item, i) => (
                                      <h4 key={i}>{item.planeClass}</h4>
                                    ))}
                                  <div className="idr">
                                    <h5>
                                      IDR{" "}
                                      {(
                                        Number(item.price) +
                                        Number(
                                          item.plane.planeClass
                                            .filter(
                                              (item) => item.idPlaneClass === 2
                                            )
                                            .map((item) => item.price)
                                        )
                                      )
                                        .toString()
                                        .replace(
                                          /(\d)(?=(\d\d\d)+(?!\d))/g,
                                          "$1."
                                        )}
                                    </h5>
                                  </div>
                                </div>
                              )}
                            </>
                          </div>
                          <div className="flex flex-col p-5 bg-brand-whiteLight items-end rounded-lg w-full h-44 text-brand-black">
                            <button
                              onClick={() => showModalOneWay(item.idFlight)}
                              className="btn-detail-flight"
                            >
                              Flight Detail
                            </button>
                            <div className="times">
                              <div className="flex flex-col items-center justify-center w-3/5">
                                <h4>{item.departureTime}</h4>
                                <h6>{resultFrom.city}</h6>
                              </div>
                              <div className="time-logo">
                                <img
                                  className="xl:w-36 xl:h-36 lg:w-28 lg:h-28 sm:w-16 smh-20"
                                  src={logo}
                                ></img>
                              </div>
                              <div className="flex flex-col items-center justify-center w-3/5">
                                <h4>{item.arrivalTime}</h4>
                                <h6>{resultTo.city}</h6>
                              </div>
                            </div>
                            {modal === item.idFlight
                              ? resultFlightDepart
                                  .filter((item) => item.idFlight === modal)
                                  .map((item) => (
                                    <Modal
                                      title="Flight Details"
                                      open={isModalOpen}
                                      onOk={handleOk}
                                      onCancel={handleCancel}
                                      footer={[null]}
                                    >
                                      <div className="wrap-modal-detail-flight">
                                        <div className="title-detail-flight">
                                          <p>
                                            {resultFrom.city} to {resultTo.city}
                                          </p>
                                          <p>Saturday, Nov 26</p>
                                        </div>
                                        <div className="flex w-full gap-7 ">
                                          <div className="flex w-full flex-col justify-between gap-5">
                                            <div>
                                              <p>{resultFrom.city}</p>
                                              <p>{resultFrom.airportName}</p>
                                            </div>
                                            <div>
                                              <p>
                                                {item.flightNumber}{" "}
                                                {item.plane.planeType}
                                              </p>
                                              <p>Flight by 7-Airways</p>
                                            </div>
                                            <div>
                                              <p>{resultTo.city}</p>
                                              <p>{resultTo.airportName}</p>
                                            </div>
                                          </div>

                                          <div className="flex flex-col items-center w-full">
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
                                          <div className="flex flex-col justify-between w-full">
                                            <p>{item.departureTime} WIB</p>

                                            <p>{item.arrivalTime} WIB</p>
                                          </div>
                                        </div>
                                      </div>
                                    </Modal>
                                  ))
                              : null}
                          </div>
                        </div>
                        {economy === item.idFlight ? (
                          <div className="detail-economy-class md:flex md:flex-row w-full gap-5 sm:grid sm:grid-rows-2">
                            <div className="benefit sm:w-full">
                              <h2>Economy Class Flight</h2>
                              <p>The benefits you get in economy class</p>
                              <div className="benefit-detail">
                                <div className="icon-benefit">
                                  <AiOutlineCheck />
                                  <BsCreditCard2Back />
                                  <MdFastfood />
                                  <AiOutlineDollar />
                                </div>
                                <div className="text-benefit">
                                  <p>Cancel anytime without fees</p>
                                  <p>
                                    Money Back Guarantee If The Delay Exceeds 1
                                    Hour
                                  </p>
                                  <p>Get Snacks During The Trip </p>
                                  <p>Cheapest Price To Your Destination</p>
                                </div>
                              </div>
                              <div className="bg-brand-yellow rounded-md lg:w-1/4 w-1/3 sm:w-full  text-center cursor-pointer py-1.5 px-2.5 ">
                                <p onClick={() => handleDepartOneWay(item)}>
                                  Select Class
                                </p>
                              </div>
                            </div>
                            <div className="img-benefit">
                              <img src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
                            </div>
                          </div>
                        ) : null}
                        {business === item.idFlight ? (
                          <div className="detail-economy-class flex w-full gap-5 sm:grid sm:grid-rows-2">
                            <div className="benefit  sm:w-full">
                              <h2>Business Class Flight</h2>
                              <p>The benefits you get in economy class</p>
                              <div className="benefit-detail">
                                <div className="icon-benefit">
                                  <AiOutlineCheck />
                                  <GiNightSleep />
                                  <VscVm />
                                  <AiOutlineDollar />
                                  <MdFastfood />
                                </div>
                                <div className="text-benefit">
                                  <p>Cancel anytime without fees</p>
                                  <p>
                                    Sleep Well Because It Is Equipped With a
                                    Comfortable Bed
                                  </p>
                                  <p>
                                    Many Entertainment Options That You Can
                                    Enjoy
                                  </p>
                                  <p>
                                    Money Back Guarantee If The Delay Exceeds 15
                                    Minutes
                                  </p>
                                  <p>Get Anything Food You Want</p>
                                </div>
                              </div>
                              <div className="bg-brand-yellow rounded-md lg:w-1/4 w-1/3 sm:w-full  text-center cursor-pointer py-1.5 px-2.5 ">
                                {/* {item.plane.planeClass
                                    .filter((item) => item.idPlaneClass === 2)
                                    .map((item) => ( */}
                                <p onClick={() => handleDepartOneWay(item)}>
                                  Select Class
                                </p>
                                {/* // ))} */}
                              </div>
                            </div>
                            <div className="img-benefit ">
                              <img src="https://media.istockphoto.com/id/903718466/id/foto/pria-dengan-pesawat-jet-pribadi.jpg?s=612x612&w=0&k=20&c=alq9cAHoN6wZwyHq7UlH8Gueh_2wYwrZx6TkHYN-AEw="></img>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pt-14 h-fit">
                <div className="card-result-booking">
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                  <div className="wrap-card-result-booking">
                    <Empty />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
