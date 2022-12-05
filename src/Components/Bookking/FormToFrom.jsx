import React from "react";
import { Dropdown, Space, DatePicker, Form, Input, Button, Radio } from "antd";
import { AiOutlineSwap } from "react-icons/ai";

export default function FormToFrom() {
  return (
    <>
      <div className="inpt-book">
    
        <Form.Item
          name="from"
          label="From"
          rules={[
            {
              required: true,
              message: "Cannot Empty",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>

      <div className="inpt-book">
    
        <Form.Item
          label="To"
          name="to"
          rules={[
            {
              required: true,
              message: "Cannot Empty",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className="swap">
        <AiOutlineSwap />
      </div>
    </>
  );
}
