import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, DatePicker } from "antd";

const items = [
  {
    label: <a href="#">Return</a>,
    key: "0",
  },
  {
    label: <a href="#">One Way</a>,
    key: "1",
  },
  {
    label: "Multiple cities or countries",
    key: "3",
  },
];

const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};
export default function Book() {
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
        <div className="detail-booking">
          <div className="wrap-input">
            <div className="input">
              <input className="inpt-book" placeholder="From"></input>
              <div className="swap">
                <AiOutlineSwap />
              </div>
              <input className="inpt-book" placeholder="To"></input>
            </div>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              className="inpt-trip"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Trip
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <Space className="inpt-date" direction="vertical" size={5}>
              <div className="wrap-date">
                <p>Departure</p>
                <div className="date">
                  <RangePicker
                    showTime={{
                      format: "HH:mm",
                    }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                  />
                </div>
              </div>
            </Space>
            <div className="inpt-book">
              <p>Passenger/Class</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
