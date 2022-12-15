import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import Passenger from "./Passenger";
import FormToFrom from "./FormToFrom";
import Trip from "./Trip";
import ButtonFindFlight from "../Reusable/ButtonFindFlight";
import Date from "./Date";
import dayjs from "dayjs";

import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { AiOutlineSwap } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loadAirports } from "../Feature/Models/AirpostSlice";
import FlightSlice, { loadFlight } from "../Feature/Models/FlightSlice";
import { loadCitiesFrom } from "../Feature/Models/AirportFromSlice";
import { loadCitiesTo } from "../Feature/Models/AirportToSlice";

export default function Book() {
  const { airport } = useSelector((state) => state.airport);

  const [from, setFrom] = useState("");
  const [fromCode, setFromCode] = useState("");
  const [to, setTo] = useState("");
  const [toCode, setToCode] = useState("");
  const [date, setDate] = useState(null);
  const [trip, setTrip] = useState("Return");
  const [airportFrom, setAirportFrom] = useState("");
  const [airportTo, setAirportTo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeFrom = (e, values) => {
    setFromCode(e);
    setFrom(values.city);
    setAirportFrom(values.airport);
  };
  const handleChangeTo = (e, values) => {
    setToCode(e);
    setTo(values.city);
    setAirportTo(values.airport);
    console.log(values);
  };
  const handleDate = (date, dateString) => {
    setDate(dateString);
    console.log(dateString);
  };
  const handleFindFlight = () => {
    let x = {
      from: fromCode,
      to: toCode,
      date: date,
    };
    dispatch(loadFlight(x));
    dispatch(loadCitiesFrom(airportFrom));
    dispatch(loadCitiesTo(airportTo));
    navigate(`/booking/`);
  };
  const onFinish = (values) => {
    console.log({ values });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeTrip = (e) => {
    setTrip(e.target.value);
  };
  useEffect(() => {
    dispatch(loadAirports());
  }, [dispatch]);

  return (
    <>
      <div className="wrap-detail-booking">
        <div className="wrap-detail-title">
          <div className="detail-title">
            <h5>Get Flight Route</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              error.
            </p>
          </div>
        </div>
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
          <div className="flex w-full h-fit mb-5 gap-2 text-brand-black">
            <div className="wrap-input">
              <FormToFrom
                name="flightFrom"
                label="From"
                handleChange={handleChangeFrom}
                value={from}
                iconFlight={<MdFlightTakeoff size={30} color="#CBA052" />}
              />
              <div className="swap">
                <AiOutlineSwap />
              </div>
              <FormToFrom
                name="flightTo"
                label="To"
                handleChange={handleChangeTo}
                value={to}
                iconFlight={<MdFlightLand size={30} color="#CBA052" />}
              />
            </div>
            <div className="input">
              
              <Date
                status={date === null ? "error" : null}
                handleDate={handleDate}
                trip={trip}
              />

              <Passenger />
            </div>
          </div>
          <ButtonFindFlight handle={handleFindFlight} value={"Find Flight"} />
        </Form>
      </div>
    </>
  );
}
