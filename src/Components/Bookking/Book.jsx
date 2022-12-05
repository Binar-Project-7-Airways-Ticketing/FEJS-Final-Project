import React, { useState } from "react";
import { Space, DatePicker, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Passenger from "./Passenger";
import FormToFrom from "./FormToFrom";
import Trip from "./Trip";
import ButtonFlindFilght from "../Reusable/ButtonFlindFilght";
import Date from "./Date";
import dayjs from 'dayjs';


export default function Book() {
 
  const [date, setDate] = useState();
  const [trip, setTrip] = useState("Return");

  const navigate = useNavigate();

  const onOk = (value) => {
    setDate(value);
  };
  const handleDate = (date, dateString) => {
    
    console.log(dateString);
    setDate(dateString);
  };
  const handleFindFlight = () => {
    navigate("/booking");
  };
  const onFinish = (values, value) => {
    console.log("Success:", { values, date});
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeTrip = (e) => {
    setTrip(e.target.value);
  };
  const dateFormat = 'YYYY/MM/DD';

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
          <Trip change={handleChangeTrip} value={trip} />
          <div className="detail-booking">
            <div className="wrap-input">
              <div className="input">
                <FormToFrom />
              </div>
              {/* <div style={{ width: "50%" }}>
                
              </div> */}
            </div>
            <div className="input">
             <Date handleDate={handleDate} trip={trip} date={[dayjs(),dayjs().add(7,'d')]}/>
            </div>
            <div className="input">
              <Passenger />
            </div>
          </div>
          {/* <div className="find">
            <button onClick={handleFindFlight} className="btn-flight">
              <h5>Find flight</h5>
            </button>
          </div> */}
          <ButtonFlindFilght handle={handleFindFlight} value={"Find Flight"} />
        </Form>
      </div>
    </>
  );
}
