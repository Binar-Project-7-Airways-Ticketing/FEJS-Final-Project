import React, { useEffect } from "react";
import { Select, Form } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { loadAirports } from "../Feature/Models/AirpostSlice";

export default function FormToFrom(props) {
  const { airport } = useSelector((state) => state.airport);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAirports());
  }, [dispatch]);

  return (
    <div className="flex rounded-lg h-24 w-full lg:py-1.5 lg:pr-5 lg:pl-6 sm:p-3 border-brand-gray border gap-3">
      <div className="flex flex-col gap-2">
        <p>{props.label}</p>
        {props.iconFlight}
      </div>
      <div className="flex w-4/5 pt-7">
      
        <Form.Item
          name={props.name}
          rules={[
            {
              required: true,
              message: "Cannot Empty",
            },
          ]}
          className="w-full"
        >
          <Select
            showSearch
            // className="w-3/4"
            value={<p>{props.value}</p>}
            showArrow={false}
            filterOption={(input, option) =>
              (option?.city ?? "").toLowerCase().includes(input.toLowerCase())
            }
            onChange={props.handleChange}
            options={airport.map((item, key) => ({
              value: item.airportCode,
              city: item.city,
              airport: item.airportName,
              key: item.idAirport,
              label: (
                <div className="flex flex-col">
                  <div className="flex h-full justify-between">
                    <h6>{item.city}, {item.airportCode}</h6>
                    {/* <h6>{item.airportCode}</h6> */}
                  </div>
                  <p>{item.airportName}</p>
                </div>
              ),
            }))}
          ></Select>
        </Form.Item>
        {/* </div> */}
      </div>
    </div>
  );
}
