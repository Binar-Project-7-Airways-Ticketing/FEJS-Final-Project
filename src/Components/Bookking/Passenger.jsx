import React, { useEffect, useState } from "react";
import { Form, Input, Radio, Space, Button } from "antd";

export default function Passenger() {
  const [passenger, setPasenger] = useState(false);
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);

  const [seats, setSeats] = useState("Economy");

  const handlePassenger = () => {
    setPasenger(true);
  };
  const handlePassengerClose = () => {
    setPasenger(false);
  };
  const adultIncrement = () => {
    let value = 6;
    if (adults >= value) {
      value = 6;
    } else {
      value = adults;
    }
    setAdults(value + 1);
    let valueChild = 6;
    if (childs + adults <= valueChild) {
      valueChild = childs;
    } else {
      if (childs === 0) {
        valueChild = childs;
      } else {
        valueChild = childs - 1;
      }
    }
    setChilds(valueChild);
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
    let value = 7 - adults;
    if (childs < value) {
      value = childs;
    } else {
      value = childs - 1;
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
    let value = 2;
    if (infants >= value) {
      value = infants - 1;
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
        <>
          <div onClick={handlePassengerClose} className="inpt-passenger">
            <p style={{fontSize:"15px"}} onClick={handlePassengerClose}>Class {seats}</p>
            {adults + childs + infants === 10 ? (
              <p>
                Adults {adults}, Childs {childs}, Infants {infants}
              </p>
            ) : (
              <p>
                Adults {adults}, Childs {childs}, Infants {infants}
              </p>
            )}
          </div>
          <div onClick={handlePassenger} className="dropdown-passenger">
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
          {/* </div> */}
        </>
      ) : (
        <div onClick={handlePassenger} className="inpt-passenger">
          <p style={{fontSize:"15px"}}>Passenger/Class</p>
          <p>
          Passenger {adults + childs + infants}, Class {seats} 
          </p>
        </div>
      )}
    </>
  );
}
