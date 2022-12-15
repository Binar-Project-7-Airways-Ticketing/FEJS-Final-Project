import React from "react";
import { Space, DatePicker, Form,} from "antd";

import "dayjs/locale/zh-cn";


export default function Date(props) {
  const { RangePicker } = DatePicker;

  const dateFormat = "MM/DD/YYYY";

  return (
    // <div className="flex flex-col  rounded-lg h-24 w-full py-1.5 pr-5 pl-6 border-brand-gray border gap-3">
    //   <div className="flex justify-between w-full h-fit">
    //     {props.trip === "Return" ? (
    //       <>
    //         <p>Departure Date</p>
    //         <p>Return Date</p>
    //       </>
    //     ) : (
    //       <p>Departure Date</p>
    //     )}
    //   </div>

    //   <Space direction="vertical" size={5}>
    //     <div className="wrap-date">
    //       {/* {props.trip === "Return" ? ( */}
    //         <div className="flex w-full justify-between gap-2">
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
              // {/* <Form.Item
              //   name="dateTo"
              //   rules={[
              //     {
              //       required: true,
              //       message: "Cannot Empty",
              //     },
              //   ]}
              // >
              //   <DatePicker
              //     status={props.status}
              //     onChange={props.handleDateTo}
              //     format={dateFormat}
              //   />
              // </Form.Item> */}
            // </div>
          // {/* ) : (
          //   <div className="date">
          //     <DatePicker
          //       status={props.status}
          //       onChange={props.handleDate}
          //       // defaultValue={dayjs}
          //       format={dateFormat}
          //     />
          //   </div>
          // )} */}
    //     </div>
    //   </Space>
    // </div>
  );
}
