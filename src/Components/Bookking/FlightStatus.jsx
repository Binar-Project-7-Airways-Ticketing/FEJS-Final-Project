import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonFlindFilght from "../Reusable/ButtonFlindFilght";

import { Space, DatePicker, Form, Input, Button } from "antd";

import Passenger from "./Passenger";
import FormToFrom from "./FormToFrom";
import Trip from "./Trip";

import Date from "./Date";
import dayjs from "dayjs";

export default function FlightStatus() {
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const handleFindStatusFlight = () => {
    navigate("/flight status");
  };
  const handleDate = (date, dateString) => {
    console.log(dateString);
    setDate(dateString);
  };
  const handleFindFlight = () => {
    navigate("/booking");
  };
  const onFinish = (values, value) => {
    console.log("Success:", { values });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const handleChangeTrip = (e) => {
  //   setTrip(e.target.value);
  // };

  return (
    <div className="wrap-detail-booking">
      <Form
        layout="vertical"
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
        <div className="detail-booking">
          <div className="wrap-input">
            <FormToFrom />
          </div>
          <div className="input">
            <Date
              handleDate={handleDate}
              date={[dayjs(), dayjs().add(7, "d")]}
            />
          </div>
        </div>
        <ButtonFlindFilght handle={handleFindFlight} value={"Find Flight"} />
      </Form>
    </div>
  );
}
