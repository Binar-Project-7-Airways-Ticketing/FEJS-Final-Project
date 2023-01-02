import React, { useEffect } from "react";
import { Select, Form } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { loadAirports } from "../Feature/Models/AirportSlice";

export default function FormToFrom(props) {
  const { airport } = useSelector((state) => state.airport);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAirports());
  }, []);

  return (
    <div className="flex xl:gap-3 gap-2 lg:px-0 sm:h-24  lg:border-y-transparent  lg:border-l-transparent lg:rounded-none sm:rounded-lg sm:border sm:border-brand-yellow sm:p-2">
      <div className="flex flex-col gap-2">
        <h6 className="w-8 sm:text-sm">{props.label}</h6>
        {props.iconFlight}
      </div>
      <div className="flex xl:w-48 sm:pt-7 lg:w-40 sm:w-3/4">
      
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
          dropdownStyle={{width:"100%"}}
          placeholder="Select flight..."
            showSearch
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
