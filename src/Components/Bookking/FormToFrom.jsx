import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { AiOutlineSwap } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loadAirports } from "../Feature/Models/AirpostSlice";
import axios from "axios";

export default function FormToFrom() {
  const { airport } = useSelector((state) => state.airport);
  const [city, setCity] = useState([]);
  const [searchTerm, setSearchTerm] = useState(false);
  const handleChange = async (e) => {
    try {
      const res = await axios.get(
        `https://bej-ticketing-production.up.railway.app/api/airport/city/${e}`
      );

      setCity(res.data);
      setSearchTerm(e);
    } catch (error) {
      console.error(error);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    // handleChange();
    dispatch(loadAirports());
  });

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
          <div className="flex w-full items-center gap-2 ">
            <MdFlightTakeoff size={"25"} color="#cba052" />
            <div className="relative">
            {searchTerm ? (
              <Input
                onClick={() => setSearchTerm(false)}
                onChange={(e) => handleChange(e.target.value)}
              />):(
                <Input
                  onClick={() => setSearchTerm(true)}
                  onChange={(e) => handleChange(e.target.value)}
                />)}
              <div>
                {searchTerm ? (
                  <div className="result-city ">
                    {airport.map((item) => (
                      <>
                        <h6>{item.city}</h6>
                        <div className="flex justify-between">
                          <p>{item.airportName}</p>
                          <p>{item.airportCode}</p>
                        </div>
                        <h6>{item.city}</h6>
                        <div className="flex justify-between">
                          <p>{item.airportName}</p>
                          <p>{item.airportCode}</p>
                        </div>
                        <h6>{item.city}</h6>
                        <div className="flex justify-between">
                          <p>{item.airportName}</p>
                          <p>{item.airportCode}</p>
                        </div>
                        <h6>{item.city}</h6>
                        <div className="flex justify-between">
                          <p>{item.airportName}</p>
                          <p>{item.airportCode}</p>
                        </div>
                      </>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
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
        >
          <div className="flex w-full items-center gap-2">
            <MdFlightLand size={"25"} color="#cba052" />
            <Input />
          </div>
        </Form.Item>
      </div>
      <div className="swap">
        <AiOutlineSwap />
      </div>
      {/* {airport.map((item) => console.log(item))} */}
    </>
  );
}
