import React, { useState } from "react";
import { Space, DatePicker, Form, Input, Button } from "antd";
import axios from "axios";
import { useEffect } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
// import locale from 'antd/es/date-picker/locale/';
import enUS from 'antd/locale/en_US'

export default function Date(props) {
  const { RangePicker } = DatePicker;
  const [flight, setFlight] = useState("");
  const loadFlight = async () => {
    try {
      const res = await axios.get(
        "https://bej-ticketing-production.up.railway.app/api/user"
      );
      console.log(res.data);
      //   setFlight(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadFlight();
  });

  return (
    
    <Form.Item
      // name="dateTime"
      rules={[
        {
          required: true,
          message: "Cannot empty",
        },
      ]}
      style={{ width: "100%" }}
    >
      <div className="inpt-book">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "30px",
          }}
        >
          {props.trip === "Return" ? (
            <>
              <p>Departure Date</p>
              <p>Return Date</p>
            </>
          ) : (
            <p>Departure Date</p>
          )}
        </div>
    
        <Space direction="vertical" size={5}>
          <div className="wrap-date">
            {props.trip === "Return" ? (
              <div className="date">
                
                <RangePicker onChange={props.handleDate} value={props.date}/>
              </div>
            ) : (
              <div className="date">
                <DatePicker onChange={props.handleDate} defaultValue={dayjs}/>
              </div>
            )}
          </div>
        </Space>
      </div>
    </Form.Item>
  );
}
