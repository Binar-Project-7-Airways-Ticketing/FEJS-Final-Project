import React, { useState, useEffect } from "react";
import { Form, Space } from "antd";
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
import { loadFlightReturn } from "../Feature/Models/FlightSliceReturn";
import { loadCitiesFrom } from "../Feature/Models/AirportFromSlice";
import { loadCitiesTo } from "../Feature/Models/AirportToSlice";
import { loadFlightDepart } from "../Feature/Models/FlightSliceDepart";

export default function Book() {
  const { airport } = useSelector((state) => state.airport);

  const [from, setFrom] = useState("");
  const [fromCode, setFromCode] = useState("");
  const [to, setTo] = useState("");
  const [toCode, setToCode] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [trip, setTrip] = useState("Return");
  const [airportFrom, setAirportFrom] = useState("");
  const [airportTo, setAirportTo] = useState("");
  const [btn, setBtn] = useState(false)
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
  const handleDateFrom = (date, dateString) => {
    setDateFrom(dateString);
  };
  const handleDateTo = (date, dateString) => {
    setDateTo(dateString);
  };
  const handleFindFlight = () => {
    // let x = {
    //   from: fromCode,
    //   to: toCode,
    //   date: date,
    // };
    // dispatch(loadFlight(x));
    // dispatch(loadCitiesFrom(airportFrom));
    // dispatch(loadCitiesTo(airportTo));
    // navigate(`/booking/`);
  };
  const onFinish = (values) => {
    let x = {
      from: values.flightFrom,
      to: values.flightTo,
      datefrom: dateFrom,
      dateto: dateTo,
    };

    dispatch(loadFlightDepart(x));
    dispatch(loadFlightReturn(x));
    dispatch(loadCitiesFrom(airportFrom));
    dispatch(loadCitiesTo(airportTo));
   
    navigate(`/booking/${trip}`);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeTrip = (e) => {
    setTrip(e.target.value);
  };
  useEffect(() => {
    // if (btn===true){
    //   navigate(`/booking/${trip}`)
    // }else{
    //   navigate('/')
    // }
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
              <div className="flex flex-col  rounded-lg h-24 w-full py-1.5 pr-5 pl-6 border-brand-gray border gap-3">
                <div className="flex justify-start w-full h-fit gap-2">
                  <div className="flex flex-col w-full gap-2">
                    <p>Departure Date</p>
                    <Date
                      date="dateDeparture"
                      handleDate={handleDateFrom}
                    
                    />
                  </div>
                  {trip === "Return" ? (
                    <div className="flex flex-col w-full gap-2">
                      <p>Return Date</p>
                      <Date
                        date="dateReturn"
                        handleDate={handleDateTo}
                      
                      />
                    </div>
                  ) : (
                    null
                  )}
                </div>
              </div>

              <Passenger />
            </div>
          </div>
          <ButtonFindFlight value={"Find Flight"} />
        </Form>
      </div>
    </>
  );
}
