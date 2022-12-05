import React from "react";
import { Form, Input } from "antd";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
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
          <div className="flex w-full items-center gap-2">
            <MdFlightTakeoff size={"25"} color="#cba052" />
            <Input />
          </div>
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
        > <div className="flex w-full items-center gap-2">
        <MdFlightLand size={"25"} color="#cba052" />
        <Input /></div>
        </Form.Item>
      </div>
      <div className="swap">
        <AiOutlineSwap />
      </div>
    </>
  );
}
