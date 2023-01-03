import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Modal, Empty, Pagination } from "antd";
import logo from "../../image/logo.png";
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
import dateFormat from "dateformat";
import { loadSeatsIdPlaneCount } from "../Feature/Models/Seat";
import { Depart } from "../Feature/Models/PaginationSlice";
import { loadCitiesFrom, loadCitiesTo } from "../Feature/Models/AirportSlice";

export default function CardResultBookingOneWay() {
  const { SeatsPlaneCount } = useSelector((state) => state.seatsPlaneCount);
  const { pagination } = useSelector((state) => state.pagination);
  const { Price } = useSelector((state) => state.getPrice);

  const { cityTo } = useParams();
  const { cityFrom } = useParams();


  const [go, setGo] = useState(() => {
    const gos = localStorage.getItem("go");
    return gos;
  });
  const [departure, setDeparture] = useState(true);
  const [passanger, setPassenger] = useState("");
  const [economy, setEconomy] = useState(false);
  const [business, setBusiness] = useState(false);
  const [detail, setDetail] = useState(false);
  const [modal, setModal] = useState(false);
  const [departDate, setDepartDate] = useState();
  const [priceTotal, setPricTotal] = useState(false);
  const [resultTo, setResultTo] = useState(() => {
    const cityTo = JSON.parse(localStorage.getItem("cityTo"));
    return cityTo;
  });
  const [resultFrom, setResultFrom] = useState(() => {
    const cityFrom = JSON.parse(localStorage.getItem("cityFrom"));
    return cityFrom;
  });
  const [resultFlightDepart, setResultFlightDepart] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDepartOneWay = (e) => {
    localStorage.setItem("depart", JSON.stringify(e));
    setBusiness(false);
    setEconomy(false);
    navigate("/transaction");
  };
  const detailClassEconomyOneWay = (e) => {
    let idFlight = e.idFlight;
    let idPlane = e.plane.idPlane;
    let Class = {
      class: "ECONOMY",
    };

    if (resultFlightDepart.filter((item) => item.idFlight === idFlight)) {
      setDetail(true);
      setEconomy(idFlight);
    }

    localStorage.setItem("class", JSON.stringify(Class));
    setPricTotal(true);
    dispatch(loadSeatsIdPlaneCount(idPlane));

    dispatch(loadPrice(idFlight));
  };
  const detailClassBusinessOneWay = (e) => {
    let idFlight = e.idFlight;
    let idPlane = e.plane.idPlane;
    let Class = {
      class: "BUSINESS",
    };
    if (resultFlightDepart.filter((item) => item.idFlight === idFlight)) {
      setDetail(true);
      setBusiness(idFlight);
    }
    localStorage.setItem("class", JSON.stringify(Class));
    dispatch(loadSeatsIdPlaneCount(idPlane));
    setPricTotal(true);
    dispatch(loadPrice(idFlight));
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
    setPricTotal(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModalOneWay = (e) => {
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

  const paging = (pages, pageSize) => {
    const halaman = {
      page: pages,
      flight: departDate,
    };
    dispatch(Depart(halaman));
  };

  const [pages, setTotalPages] = useState(0);
  const [number, setNumber] = useState(0);
  const [showDepart, setShowDepart] = useState(false);

  useEffect(() => {
    const flightDepart = JSON.parse(localStorage.getItem("flightDepart"));

    setResultFlightDepart(JSON.parse(localStorage.getItem("flightDepart")));
    if (go === null) {
      dispatch(loadCitiesFrom(cityFrom));
      dispatch(loadCitiesTo(cityTo));
      setTimeout(function () {
        window.location.reload(1);
      }, 200);
    }
    if (flightDepart.length !== 0) {
      const countPassenger = JSON.parse(localStorage.getItem("passanger"));
      setDepartDate(JSON.parse(localStorage.getItem("flightDepart")));
      setTotalPages(localStorage.getItem("page"));
      setNumber(localStorage.getItem("number"));
      setPassenger(
        countPassenger.adults + countPassenger.child + countPassenger.infant
      );
      dispatch(loadCitiesFrom(cityFrom));
      dispatch(loadCitiesTo(cityTo));
      setShowDepart(true);
      setDeparture(false);
      const pages = {
        page: 1,
        flight: flightDepart,
      };
      dispatch(Depart(pages));
    } else {
      setDeparture(true);
    }

    localStorage.setItem("go", "back");
  }, [dispatch]);

  return (
    <>
      {departure ? (
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
      ) : (
        <>
          {showDepart ? (
            <div className="pt-5">
              <div className="text-brand-black 2xl:w-3/5 xl:w-3/4 mb-5">
                <h6>
                  {dateFormat(
                    new Date(departDate[0].departureDate),
                    "mmmm dS, yyyy"
                  )}
                </h6>

                <h2 className="mb-5 mt-5 sm:text-lg lg:text-5xl">
                  Pilih penerbangan keberangkatan kamu dari{" "}
                  <b className="text-brand-yellow">{resultFrom.city}</b> ke{" "}
                  <b className="text-brand-yellow">{resultTo.city}</b>
                </h2>
              </div>
              <div className="flex sm:flex-col lg:flex-row lg:justify-between w-full pb-2">
                <h6 className="py-2">
                  {resultFlightDepart.length} hasil pencarian penerbangan untuk
                  kamu{" "}
                </h6>
                <div className="block justify-center bg-brand-yellow p-2 rounded-lg text-brand-whiteLight sm:w-full lg:w-1/2 ">
                  {priceTotal ? (
                    <>
                      {pagination.map((item, i) => (
                        <>
                          {economy === item.idFlight ? (
                            <>
                              <h6>Total harga Rp. {Price.economy}</h6>
                              <p>Harga untuk setiap wisatawan sekali jalan</p>
                            </>
                          ) : null}
                          {business === item.idFlight ? (
                            <>
                              <h6>Total harga Rp. {Price.business}</h6>
                              <p>Harga untuk setiap wisatawan sekali jalan</p>
                            </>
                          ) : null}
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      <h6>Total harga Rp.</h6>

                      <p>Harga untuk setiap wisatawan sekali jalan</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {pagination.map((item, i) => (
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
                                onClick={() => detailClassEconomyOneWay(item)}
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
                                onClick={() => detailClassBusinessOneWay(item)}
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
                            Detail Penerbangan
                          </button>
                          <div className="times">
                            <div className="flex flex-col items-center justify-center w-3/5">
                              <h4>{item.departureTime}</h4>
                              <h6>{resultFrom.city}</h6>
                            </div>
                            <div className="time-logo">
                              <img
                              alt=""
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
                            ? pagination
                                .filter((item) => item.idFlight === modal)
                                .map((item) => (
                                  <Modal
                                    title="Detail Penerbangan"
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    footer={[null]}
                                  >
                                    <div className="wrap-modal-detail-flight">
                                      <div className="title-detail-flight">
                                        <h6 className="sm:text-sm">
                                          {resultFrom.city} ke {resultTo.city}
                                        </h6>
                                        <p>
                                          {dateFormat(
                                            new Date(item.departureDate),
                                            "mmmm dS, yyyy"
                                          )}
                                        </p>
                                      </div>
                                      <div className="flex w-full gap-7 ">
                                        <div className="flex w-full flex-col justify-between gap-5">
                                          <div>
                                            <h6 className="sm:text-sm">
                                              {resultFrom.city}
                                            </h6>
                                            <p>{resultFrom.airportName}</p>
                                          </div>
                                          <div>
                                            <h6 className="sm:text-sm">
                                              {item.flightNumber}{" "}
                                              {item.plane.planeType}
                                            </h6>
                                            <p>Maskapai 7-Airways</p>
                                          </div>
                                          <div>
                                            <h6 className="sm:text-sm">
                                              {resultTo.city}
                                            </h6>
                                            <p>{resultTo.airportName}</p>
                                          </div>
                                        </div>

                                        <div className="flex flex-col gap-0 justify-between items-center w-full ">
                                          <div className="circle">
                                            <BsCircle size={25} />
                                          </div>
                                          <div className="wrap-logo">
                                            <img
                                            alt=""
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
                                            <BsCircle size={25} />
                                          </div>
                                        </div>
                                        <div className="flex flex-col justify-between w-full">
                                          <h6 className="sm:text-sm">
                                            {item.departureTime} WIB
                                          </h6>

                                          <h6 className="sm:text-sm">
                                            {item.arrivalTime} WIB
                                          </h6>
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
                            <h2 className="leading-none">
                              Economy Class Flight
                            </h2>
                            <div className="bg-brand-yellow w-fit p-2 rounded-lg">
                              <p>
                                {
                                  SeatsPlaneCount.filter(
                                    (item) => item.stateSeat === "AVAILABLE"
                                  ).filter(
                                    (item) =>
                                      item.planeDetails.planeClass === "ECONOMY"
                                  ).length
                                }{" "}
                                Kursi tersisa
                              </p>
                            </div>
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
                            <div className="bg-brand-yellow rounded-md lg:w-2/5 w-1/3 sm:w-full  text-center cursor-pointer py-1.5 px-2.5 ">
                              {SeatsPlaneCount.filter(
                                (item) =>
                                  item.planeDetails.planeClass === "ECONOMY"
                              ).length === 0 &&
                              SeatsPlaneCount.filter(
                                (item) =>
                                  item.planeDetails.planeClass === "ECONOMY"
                              ).length <= passanger ? (
                                <p>Kursi tidak tersedia</p>
                              ) : (
                                <p onClick={() => handleDepartOneWay(item)}>
                                  Pilih kelas
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="img-benefit">
                            <img
                            alt="" src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
                          </div>
                        </div>
                      ) : null}
                      {business === item.idFlight ? (
                        <div className="detail-economy-class md:flex md:flex-row w-full gap-5 sm:grid sm:grid-rows-2">
                          <div className="benefit sm:w-full">
                            <h2 className="leading-none">
                              Business Class Flight
                            </h2>
                            <div className="bg-brand-yellow w-fit p-2 rounded-lg">
                              <p>
                                {
                                  SeatsPlaneCount.filter(
                                    (item) => item.stateSeat === "AVAILABLE"
                                  ).filter(
                                    (item) =>
                                      item.planeDetails.planeClass ===
                                      "BUSINESS"
                                  ).length
                                }{" "}
                                kursi tersedia
                              </p>
                            </div>
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
                                  Many Entertainment Options That You Can Enjoy
                                </p>
                                <p>
                                  Money Back Guarantee If The Delay Exceeds 15
                                  Minutes
                                </p>
                                <p>Get Anything Food You Want</p>
                              </div>
                            </div>
                            <div className="bg-brand-yellow rounded-md lg:w-2/5 w-1/3 sm:w-full  text-center cursor-pointer py-1.5 px-2.5 ">
                              {SeatsPlaneCount.filter(
                                (item) =>
                                  item.planeDetails.planeClass === "BUSINESS"
                              ).length === 0 &&
                              SeatsPlaneCount.filter(
                                (item) =>
                                  item.planeDetails.planeClass === "BUSINESS"
                              ).length <= passanger ? (
                                <p>Kursi tidak tersedia</p>
                              ) : (
                                <p onClick={() => handleDepartOneWay(item)}>
                                  Pilih kelas
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="img-benefit ">
                            <img
                            alt="" src="https://media.istockphoto.com/id/903718466/id/foto/pria-dengan-pesawat-jet-pribadi.jpg?s=612x612&w=0&k=20&c=alq9cAHoN6wZwyHq7UlH8Gueh_2wYwrZx6TkHYN-AEw="></img>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-x-2 mt-6 justify-center">
                <Pagination
                  onChange={paging}
                  current={number}
                  total={pages * 10}
                />
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
