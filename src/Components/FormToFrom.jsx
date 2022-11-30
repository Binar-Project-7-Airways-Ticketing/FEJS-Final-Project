import React from "react";
import { Dropdown, Space, DatePicker, Form, Input, Button, Radio } from "antd";
import { AiOutlineSwap } from "react-icons/ai";

export default function FormToFrom() {
  return (
    <>
      <Form.Item
        name="from"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <div className="inpt-book">
          <Input />
        </div>
      </Form.Item>

      <Form.Item
        name="to"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <div className="inpt-book">
          <Input />
        </div>
      </Form.Item>
      <div className="swap">
        <AiOutlineSwap />
      </div>
    </>
  );
}
