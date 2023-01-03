import React from "react";
import { DatePicker, Form } from "antd";

import "dayjs/locale/zh-cn";

export default function Date(props) {
  const dateFormat = "MM/DD/YYYY";

  return (
    <div className="lg:pt-1 sm:h-12">
      <Form.Item
        name={props.date}
        rules={[
          {
            required: true,
            message: "Cannot Empty",
          },
        ]}
      >
        <DatePicker
          disabled={props.disabled}
          status={props.status}
          onChange={props.handleDate}
          format={dateFormat}
        />
      </Form.Item>
    </div>
  );
}
