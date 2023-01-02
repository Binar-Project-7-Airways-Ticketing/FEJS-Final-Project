import React from "react";
import { Radio, Form} from "antd";

export default function Trip(props) {
  return (
    <div className="sm:h-14 lg:h-14">
      <Form.Item
        name="trip"
        rules={[
          {
            required: true,
            message: "Cannot Empty",
          },
        ]}
      >
        <Radio.Group onChange={props.change} value={"Return"} >
          <Radio value={"Round trip"} ><h6 className="text-brand-black sm:text-sm">Round trip</h6></Radio>
          <Radio value={"One way"}><h6 className="text-brand-black sm:text-sm">One way</h6></Radio>
        </Radio.Group>
      </Form.Item>
    </div>
  );
}
