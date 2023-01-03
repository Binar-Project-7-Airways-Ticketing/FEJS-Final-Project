import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import Passenger from "./Passenger";
import FormToFrom from "./FormToFrom";
import { SlPlane } from "react-icons/sl";
import Trip from "./Trip";
import ButtonFindFlight from "../Reusable/ButtonFindFlight";
import Date from "./Date";
import { MdOutlineSwapVert, MdSwapHoriz } from "react-icons/md";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { useDispatch} from "react-redux";
import { loadAirports } from "../Feature/Models/AirportSlice";
import {
  loadFlightReturn,
  loadFlightDepart,
} from "../Feature/Models/FlightSliceReturn";

export default function Book() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [trip, setTrip] = useState("Round trip");
  const [airportFrom, setAirportFrom] = useState("");
  const [airportTo, setAirportTo] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeFrom = (e, values) => {
    setFrom(values.city);
    setAirportFrom(values.airport);
  };
  const handleChangeTo = (e, values) => {
    setTo(values.city);
    setAirportTo(values.airport);
  };
  const handleDateFrom = (date, dateString) => {
    setDateFrom(dateString);
  };
  const handleDateTo = (date, dateString) => {
    setDateTo(dateString);
  };

  const onFinish = (values) => {
    if (trip === "Round trip") {
      let flight = {
        from: values.flightFrom,
        to: values.flightTo,
        datefrom: dateFrom,
        dateto: dateTo,
      };
      dispatch(loadFlightReturn(flight));
      dispatch(loadFlightDepart(flight));

      navigate(`/booking/${trip}/${airportFrom}/${airportTo}`);
    } else {
      let flight = {
        from: values.flightFrom,
        to: values.flightTo,
        datefrom: dateFrom,
      };
      dispatch(loadFlightDepart(flight));

      navigate(`/booking/${trip}/${airportFrom}/${airportTo}`);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeTrip = (e) => {
    setTrip(e.target.value);
  };
  useEffect(() => {
    dispatch(loadAirports());
  }, []);

  return (
    <>
      <div className="shadow-xl w-fit ">
        <div className="w-full h-20 rounded-t-2xl">
          <div className="flex items-center w-full h-full justify-start bg-brand-yellow rounded-t-3xl gap-3.5 text-brand-whiteLight px-3 text-xl py-2">
            <SlPlane size={35} />
            <h5 className="sm:text-base sm:font-bold">
              Cari tiket murah...? buruan cek disini...!
            </h5>
          </div>
        </div>
      </div>
      <div className="2xl:w-3/4 sm:w-full sm:p-4 bg-brand-whiteLight h-fit md:rounded-r-3xl rounded-b-3xl drop-shadow-xl text-brand-yellow border-brand-yellow border ">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Trip change={handleChangeTrip} value={trip} />
          <div className="lg:flex lg:flex-row sm:w-full h-fit mb-5 lg:gap-0 sm:flex sm:gap-1 text-brand-black md:grid md:grid-cols-3 sm:flex-col relative  lg:border-y lg:border-brand-yellow">
            <div className="w-full ">
              <FormToFrom
                name="flightFrom"
                label="From"
                handleChange={handleChangeFrom}
                value={from}
                iconFlight={<MdFlightTakeoff size={30} color="#CBA052" />}
              />
            </div>
            <div className="swap">
              <MdSwapHoriz className="sm:hidden md:block xl:text-3xl text-xl" />
              <MdOutlineSwapVert className="md:hidden" size={25} />
            </div>
            <div className="w-full lg:pl-4 ">
              <FormToFrom
                name="flightTo"
                label="To"
                handleChange={handleChangeTo}
                value={to}
                iconFlight={<MdFlightLand size={30} color="#CBA052" />}
              />
            </div>

            <div className="w-full flex gap-3 pl-2 sm:p-2  lg:border-y-transparent  lg:border-l-transparent lg:rounded-none  sm:border sm:rounded-lg sm:border-brand-yellow">
              <div className="flex flex-col w-full gap-2">
                <h6 className="sm:text-sm">Departure</h6>
                <Date date="dateDeparture" handleDate={handleDateFrom} />
              </div>
              {trip === "Round trip" ? (
                <>
                  <div className="flex flex-col w-full gap-2 ">
                    <h6 className="sm:text-sm">Return </h6>
                    <Date date="dateReturn" handleDate={handleDateTo} />
                  </div>
                  <div></div>
                </>
              ) : null}
            </div>

            <div className="w-full relative lg:border-transparent sm:border sm:rounded-lg sm:border-brand-yellow">
              <Passenger />
            </div>
          </div>

          <div className="find md:w-1/5 sm:w-full">
            <ButtonFindFlight value={"Find Flight"} />
          </div>
        </Form>
      </div>
    </>
  );
}
