import React, { useState } from "react";
import { Space, DatePicker, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Passenger from "./Reusable/Passenger";
import FormToFrom from "./FormToFrom";
import Trip from "./Trip";

export default function Book() {
  const { RangePicker } = DatePicker;
  const [date, setDate] = useState(null)
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    setDate(value)
  };
  const handleFindFlight = () => {};
  const onFinish = (values, value) => {
    console.log("Success:", {values,name:date});
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="wrap-detail-booking">
        <div className="wrap-detail-title">
          <div className="detail-title">
            <h2>Get Flight Route</h2>
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
          <div className="detail-booking">
            <div className="wrap-input">
              <div className="input">
                <FormToFrom />
              </div>
              <div style={{ width: "50%" }}>
                <Trip />
              </div>
            </div>
            <div className="input">
              <div style={{ width: "100%" }}>
                <Form.Item
                  // name="dateTime"
                  rules={[
                    {
                      required: true,
                      message: "Cannot empty",
                    },
                  ]}
                >
                  <div className="inpt-date">
                    <Space direction="vertical" size={5}>
                      <div className="wrap-date">
                        <p>Departure</p>
                        <p></p>
                        <div className="date">
                          
                            <RangePicker
                              showTime={{
                                format: "HH:mm",
                              }}
                              style={{color:"black"}}
                              format="YYYY-MM-DD HH:mm"
                              onChange={onChange}
                              onOk={onOk}
                            />
                           
                      
                        </div>
                      </div>
                    </Space>
                  </div>
                </Form.Item>
              </div>
              <Passenger />
            </div>
          </div>
          <div className="find">
            <button onClick={handleFindFlight} className="btn-flight">
              <h5>Find flight</h5>
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
