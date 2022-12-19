import React from "react";
import { Radio, Form} from "antd";

export default function Trip(props) {
  return (
    <div className="inpt-trip">
      <Form.Item
        name="trip"
        rules={[
          {
            required: true,
            message: "Cannot Empty",
          },
        ]}
      >
        <Radio.Group onChange={props.change} value={"Return"}>
          <Radio value={"Return"}>Return</Radio>
          <Radio value={"Oneway"}>One Way</Radio>
        </Radio.Group>
      </Form.Item>
    </div>
  );
}
