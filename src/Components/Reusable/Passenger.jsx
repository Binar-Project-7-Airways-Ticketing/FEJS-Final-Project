import React, { useEffect, useState } from "react";
import { Input, Radio, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

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
    setAdults(adults + 1);
  };
  const adultDecrement = () => {
    let value = 0;
    if (adults <= value) {
      value = 1;
    } else {
      value = adults;
    }
    setAdults(value - 1);
  };
  const childIncrement = () => {
    setChilds(childs + 1);
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
    setInfants(infants + 1);
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

  const onChange = (e) => {
    setSeats(e.target.value);
  };
  return (
    <>
      {passenger ? (
        <div className="inpt-passenger">
          <p  onClick={handlePassengerClose} style={{ fontSize: "13px" }}>
            Passenger/Class
          </p>
          <p  onClick={handlePassengerClose}>
            Class {seats}, Passenger {adults + childs + infants}
          </p>
          <div>
            <div className="dropdown-passenger">
              <div className="detail-passanger-class">
                <div className="wrap-passenger">
                  <div>
                    <p style={{ fontWeight: "700" }}>Passenger</p>
                  </div>
                  <div className="passenger">
                    <p>Adults</p>
                    <div className="btn-increment-decrement">
                      <button onClick={adultIncrement}>+</button>
                      <button>{adults}</button>
                      <button onClick={adultDecrement}>-</button>
                    </div>
                  </div>
                  <div className="passenger">
                    <p>Child</p>
                    <div className="btn-increment-decrement">
                      <button onClick={childIncrement}>+</button>
                      <button>{childs}</button>
                      <button onClick={childDecrement}>-</button>
                    </div>
                  </div>
                  <div className="passenger">
                    <p>Infants</p>
                    <div className="btn-increment-decrement">
                      <button onClick={infantIncrement}>+</button>
                      <button>{infants}</button>
                      <button onClick={infantDecrement}>-</button>
                    </div>
                  </div>
                </div>
                <div className="wrap-class">
                  <div>
                    <p style={{ fontWeight: "700" }}>Class</p>
                  </div>
                  <Radio.Group onChange={onChange} value={seats}>
                    <Space>
                      <Radio value={"Economy"}>Economy</Radio>
                      <Radio value={"Business"}>Business</Radio>.
                    </Space>
                  </Radio.Group>
                </div>
              <button className="confirm-passenger-class">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handlePassenger}className="inpt-passenger">
          <p >Passenger/Class</p>
          <p style={{ fontSize: "13px" }}>
            Class {seats}, Passenger {adults + childs + infants}
          </p>
        </div>
      )}
    </>
  );
}
