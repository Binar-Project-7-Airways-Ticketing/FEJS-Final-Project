import React from "react";
import { Form, Radio } from "antd";

export default function Trip(props) {
  return (
    <div className="inpt-trip">
      <Form.Item
        name="trip"
        rules={[
          {
            required: true,
            message: "Cannot empty",
          },
        ]}
      >
        <Radio.Group onChange={props.change} value={props.value}>
          <Radio value={"Return"}>Return</Radio>
          <Radio value={"OneWay"}>One Way</Radio>
        </Radio.Group>
      </Form.Item>
    </div>
  );
}
