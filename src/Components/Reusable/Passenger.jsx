import React, { useEffect, useState } from "react";
import { Form, Input, Radio, Space, Button, InputNumber } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Passenger() {
  const [passenger, setPasenger] = useState(false);
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);
  const [countPassenger, setCountPassenger] = useState();
  const [seats, setSeats] = useState("Economy");

  const handlePassenger = () => {
    setPasenger(true);
  };
  const handlePassengerClose = () => {
    setPasenger(false);
  };
  const adultIncrement = () => {
    let value = 8;
    if (adults >= value) {
      value = 8;
    } else {
      value = adults;
    }
    setAdults(value + 1);
    let valueChild = 1;
    if (childs <= valueChild) {
      valueChild = 1;
    } else {
      valueChild = childs;
    }

    setChilds(valueChild - 1);
  };
  const adultDecrement = () => {
    let value = 1;
    if (adults <= value) {
      value = 2;
    } else {
      value = adults;
    }
    setAdults(value - 1);
  };

  const childIncrement = () => {
    let value = 9 - adults;
    if (childs < value) {
      value = childs 
    } 
    else {
      // let value = childs + adults;
      // if (value <= 9) {
      //   value = 9-adults;
      // }else{
      //   // value=childs
      //   console.log("hallo");
      // }
      console.log("hallo");
      value= childs -1
    }
    setChilds(value + 1);
  };
  const childDecrement = () => {
    let value = 0;
    if (childs <= value) {
      value = 1;
    } else {
      value = childs;
    }
    setChilds(value - 1);
  };
  const infantIncrement = () => {
    let value = adults;
    if (infants >= value) {
      value = adults - 1;
    } else {
      value = infants;
    }
    setInfants(value + 1);
  };
  const infantDecrement = () => {
    let value = 0;
    if (infants <= value) {
      value = 1;
    } else {
      value = infants;
    }
    setInfants(value - 1);
  };
  const handleAdults = (e) => {
    setAdults(e.target.value);
  };
  const handleChild = (e) => {
    setChilds(e.target.value);
  };
  const handleInfant = (e) => {
    setInfants(e.target.value);
  };

  const onChange = (e) => {
    setSeats(e.target.value);
  };

  return (
    <>
      {passenger ? (
        <div className="inpt-passenger">
          <p onClick={handlePassengerClose}>Class {seats}</p>
          {adults + childs + infants === 10 ? (
            <p onClick={handlePassengerClose}>
              Adults {adults}, Childs {childs}, Infants {infants}
            </p>
          ) : (
            <p onClick={handlePassengerClose}>
              Adults {adults}, Childs {childs}, Infants {infants}
            </p>
          )}

          <div>
            <div className="dropdown-passenger">
              <div className="detail-passanger-class">
                <div className="wrap-passenger">
                  <div>
                    <p style={{ fontWeight: "700" }}>Passenger</p>
                  </div>

                  <div className="passenger">
                    <p>Adults</p>

                    <Form.Item style={{ width: "100%", margin: "0" }}>
                      <div className="btn-increment-decrement">
                        <Button onClick={adultDecrement}>-</Button>
                        <Input
                          name={"name"}
                          onChange={handleAdults}
                          style={{ color: "black" }}
                          value={adults}
                        />
                        <Button onClick={adultIncrement}>+</Button>
                      </div>
                    </Form.Item>
                  </div>
                  <div className="passenger">
                    <p>Childs</p>

                    <Form.Item style={{ width: "100%", margin: "0" }}>
                      <div className="btn-increment-decrement">
                        <Button onClick={childDecrement}>-</Button>
                        <Input
                          name={"name"}
                          onChange={handleChild}
                          style={{ color: "black" }}
                          value={childs}
                        />
                        <Button onClick={childIncrement}>+</Button>
                      </div>
                    </Form.Item>
                  </div>
                  <div className="passenger">
                    <p>Infants</p>

                    <Form.Item style={{ width: "100%", margin: "0" }}>
                      <div className="btn-increment-decrement">
                        <Button onClick={infantDecrement}>-</Button>
                        <Input
                          name={"name"}
                          onChange={handleInfant}
                          style={{ color: "black" }}
                          value={infants}
                        />
                        <Button onClick={infantIncrement}>+</Button>
                      </div>
                    </Form.Item>
                  </div>
                </div>
                <div className="wrap-class">
                  <div>
                    <p style={{ fontWeight: "700" }}>Class</p>
                  </div>
                  <Form.Item
                    name="Class"
                    rules={[
                      {
                        required: true,
                        message: "Please Input your username!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChange} value={seats}>
                      <Space>
                        <Radio value={"Economy"}>Economy</Radio>
                        <Radio value={"Business"}>Business</Radio>.
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <button className="confirm-passenger-class">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handlePassenger} className="inpt-passenger">
          <p>Passenger/Class</p>
          <p style={{ fontSize: "13px" }}>
            Class {seats}, Passenger {adults + childs + infants}
          </p>
        </div>
      )}
    </>
  );
}
