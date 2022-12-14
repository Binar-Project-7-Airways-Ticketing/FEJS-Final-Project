import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Modal, Empty, Pagination } from "antd";
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
import dateFormat, { masks } from "dateformat";
import { loadSeatsIdPlaneCount } from "../Feature/Models/Seat";
import { Depart } from "../Feature/Models/PaginationSlice";
import { DepartReturn } from "../Feature/Models/PaginationReturnSlice";
import { AscendingBooking } from "../Feature/Models/AscendingSlice";

export default function PageAscend() {
    const { AscendingBooking } = useSelector((state) => state.ascending);
    const { pagination } = useSelector((state) => state.pagination);
    const { paginationReturn } = useSelector((state) => state.paginationReturn);
    const { trip } = useParams();
    const { SeatsPlaneCount } = useSelector((state) => state.seatsPlaneCount);
    const { Price } = useSelector((state) => state.getPrice);
    const [passanger, setPassenger] = useState("");
    const [priceEconomyReturn, setPriceEconomyReturn] = useState(0);
    const [priceBusinessReturn, setPriceBusinessReturn] = useState(0);
    const [economy, setEconomy] = useState(false);
    const [business, setBusiness] = useState(false);
    const [detail, setDetail] = useState(false);
    const [modal, setModal] = useState(false);
    const [showReturn, setShowReturn] = useState(false);
    const [departDate, setDepartDate] = useState(undefined);
    const [returnDate, setReturnDate] = useState(undefined);
    const [priceTotal, setPriceTotal] = useState(false);
    const [resultTo, setResultTo] = useState([]);
    const [resultFrom, setResultFrom] = useState([]);
    const [resultFlightReturn, setResultFlightReturn] = useState([]);
    const [resultFlightDepart, setResultFlightDepart] = useState([]);
    const [page, setIsPage] = useState([]);
    const [page1, setIsPage1] = useState([]);
    const [ascends, setAscends] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

   

    const Ascend = () => {
        setAscends(true);
    }

    const handleDepart = (e) => {
        localStorage.setItem("depart", JSON.stringify(e));
        alert("Silahkan pilih penerbangan kepulangan anda");
        setBusiness(false);
        setEconomy(false);
        setShowReturn(true);
        localStorage.removeItem("class");
    };

    const handleReturn = (e) => {
        localStorage.setItem("return", JSON.stringify(e));
        setBusiness(false);
        setEconomy(false);
        setShowReturn(true);
        navigate("/transaction");
    };
    const detailClassEconomy = (e) => {
        let idFlight = e.idFlight;
        let idPlane = e.plane.idPlane;
        let classDepart = {
            class: "ECONOMY",
        };

        if (resultFlightReturn.filter((item) => item.idFlight === idFlight)) {
            setDetail(true);
            setEconomy(idFlight);
        }

        localStorage.setItem("classDepart", JSON.stringify(classDepart));
        setPriceTotal(Price.economy);
        dispatch(loadSeatsIdPlaneCount(idPlane));

        dispatch(loadPrice(idFlight));
    };
    const detailClassBusiness = (e) => {
        let idFlight = e.idFlight;
        let idPlane = e.plane.idPlane;
        let classDepart = {
            class: "BUSINESS",
        };
        if (resultFlightReturn.filter((item) => item.idFlight === e)) {
            setDetail(true);
            setBusiness(idFlight);
        }
        localStorage.setItem("classDepart", JSON.stringify(classDepart));
        dispatch(loadSeatsIdPlaneCount(idPlane));
        setPriceTotal(Price.business);
        dispatch(loadPrice(idFlight));
    };
    const detailClassEconomyReturn = (e) => {
        let idFlight = e.idFlight;
        let idPlane = e.plane.idPlane;
        let classReturn = {
            class: "ECONOMY",
        };

        if (resultFlightReturn.filter((item) => item.idFlight === idFlight)) {
            setDetail(true);
            setEconomy(idFlight);
        }

        dispatch(loadSeatsIdPlaneCount(idPlane));
        dispatch(loadPrice(idFlight));
        setPriceEconomyReturn(Price.economy);
        localStorage.setItem("classReturn", JSON.stringify(classReturn));
    };
    const detailClassBusinessReturn = (e) => {
        let idFlight = e.idFlight;
        let idPlane = e.plane.idPlane;
        let classReturn = {
            class: "BUSINESS",
        };

        if (resultFlightReturn.filter((item) => item.idFlight === idFlight)) {
            setDetail(true);
            setEconomy(idFlight);
        }
   
        dispatch(loadSeatsIdPlaneCount(idPlane));
        dispatch(loadPrice(idFlight));
        setPriceBusinessReturn(Price.business);
        localStorage.setItem("classReturn", JSON.stringify(classReturn));
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
        }
        dispatch(Depart(halaman))
      
    }

    const pagingReturn = (pages1, pageSize1) => {
        const halamanReturn = {
            page: pages1,
            flight: returnDate,
        }
        dispatch(DepartReturn(halamanReturn))
     
    }

    const [pages, setTotalPages] = useState(0);
    const [number, setNumber] = useState(0);
    const [pages1, setTotalPages1] = useState(0);
    const [number1, setNumber1] = useState(0);
    useEffect(() => {
        const countPassenger = JSON.parse(localStorage.getItem("passanger"));
        setPassenger(
            countPassenger.adults + countPassenger.child + countPassenger.infant
        );
        const cityTo = JSON.parse(localStorage.getItem("cityTo"));
        const cityFrom = JSON.parse(localStorage.getItem("cityFrom"));
        const flightDepart = JSON.parse(localStorage.getItem("flightDepart"));
        const flightReturn = JSON.parse(localStorage.getItem("flightReturn"));
        setDepartDate(flightDepart[0]);
        setReturnDate(flightReturn[0]);
        setResultTo(cityTo);
        setResultFrom(cityFrom);
        setResultFlightDepart(flightDepart);
        const pages = {
            page: 1,
            flight: flightDepart[0]
        }
        setTotalPages(localStorage.getItem("page"))
        setNumber(localStorage.getItem("number"))
        dispatch(Depart(pages));
        setIsPage(page);
        setResultFlightReturn(flightReturn);
        const pages1 = {
            page: 1,
            flight: flightReturn[0]
        }
        setTotalPages1(localStorage.getItem("page1"))
        setNumber1(localStorage.getItem("number1"))
        
        dispatch(DepartReturn(pages1));
        setIsPage1(page1)
    }, [dispatch, Price, SeatsPlaneCount]);

    return (
        <>
            <div className="flex flex-col gap-5">
                {AscendingBooking.map((item, i) => (
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
                                                    .filter((item) => item.planeClass === "ECONOMY")
                                                    .map((item, i) => (
                                                        <h4 key={i}>{item.planeClass}</h4>
                                                    ))}
                                                <div className="idr">
                                                    <h5>
                                                        IDR{" "}
                                                        {item.price
                                                            .toString()
                                                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                                                    </h5>
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                                onClick={() => detailClassEconomy(item)}
                                            >
                                                {item.plane.planeClass
                                                    .filter((item) => item.planeClass === "ECONOMY")
                                                    .map((item, i) => (
                                                        <h4 key={i}>{item.planeClass}</h4>
                                                    ))}
                                                <div className="idr">
                                                    <h5>
                                                        IDR{" "}
                                                        {item.price
                                                            .toString()
                                                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
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
                                                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                                                    </h5>
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex flex-col bg-brand-whiteLight cursor-pointer sm:gap-7 text-brand-black rounded-lg w-full md:p-5 sm:p-2 md:h-44 sm:h-fit"
                                                onClick={() => detailClassBusiness(item)}
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
                                                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
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
                                                    Money Back Guarantee If The Delay Exceeds 1 Hour
                                                </p>
                                                <p>Get Snacks During The Trip </p>
                                                <p>Cheapest Price To Your Destination</p>
                                            </div>
                                        </div>
                                        <div className="bg-brand-yellow rounded-md lg:w-1/4 w-1/3 sm:w-full  text-center cursor-pointer py-1.5 px-2.5 ">
                                            {SeatsPlaneCount.filter(
                                                (item) =>
                                                    item.planeDetails.planeClass === "ECONOMY"
                                            ).length === 0 &&
                                                SeatsPlaneCount.filter(
                                                    (item) =>
                                                        item.planeDetails.planeClass === "ECONOMY"
                                                ).length <= passanger ? (
                                                <p>Seats Not Available</p>
                                            ) : (
                                                <p onClick={() => handleDepart(item)}>
                                                    Select Class
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="img-benefit">
                                        <img src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
                                    </div>
                                </div>
                            ) : null}
                            {business === item.idFlight ? (
                                <div className="detail-economy-class md:flex md:flex-row w-full gap-5 sm:grid sm:grid-rows-2">
                                    <div className="benefit  sm:w-full">
                                        <h2>Business Class Flight</h2>
                                        <div className="bg-brand-yellow w-fit p-2 rounded-lg">
                                            <p>
                                                {
                                                    SeatsPlaneCount.filter(
                                                        (item) => item.stateSeat === "AVAILABLE"
                                                    ).filter(
                                                        (item) =>
                                                            item.planeDetails.planeClass === "BUSINESS"
                                                    ).length
                                                }{" "}
                                                Kursi tersisa
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
                                        <div className="bg-brand-yellow rounded-md lg:w-1/4 w-1/3 sm:w-full  text-center cursor-pointer py-1.5 px-2.5 ">
                                            {SeatsPlaneCount.filter(
                                                (item) =>
                                                    item.planeDetails.planeClass === "BUSINESS"
                                            ).length === 0 &&
                                                SeatsPlaneCount.filter(
                                                    (item) =>
                                                        item.planeDetails.planeClass === "BUSINESS"
                                                ).length <= passanger ? (
                                                <p>Seats Not Available</p>
                                            ) : (
                                                <p onClick={() => handleDepart(item)}>
                                                    Select Class
                                                </p>
                                            )}
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
            <div className='flex gap-x-2 mt-6 justify-center'>
                {/* <Pagination onChange={paging} current={number} total={pages * 10} /> */}
            </div>
        </>
    )
}
