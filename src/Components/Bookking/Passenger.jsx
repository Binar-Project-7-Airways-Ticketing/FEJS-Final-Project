import React, { useEffect, useState } from "react";
import { Input, Radio, Space, Button } from "antd";
import { BsFillPersonPlusFill } from "react-icons/bs";

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
  const handlePassengerClass = () => {
    let passangers = {
      adults: adults,
      child: childs,
      infant: infants,
    };
    let classes = {
      class: seats,
    };
    localStorage.setItem("passanger", JSON.stringify(passangers));
    localStorage.setItem("class", JSON.stringify(classes));
    setPasenger(false);
  };
  useEffect(() => {
    let passangers = {
      adults: adults,
      child: childs,
      infant: infants,
    };
    let classes = {
      class: seats,
    };
    localStorage.setItem("passanger", JSON.stringify(passangers));
    localStorage.setItem("class", JSON.stringify(classes));
  }, []);

  return (
    <>
      {passenger ? (
        <>
          <div
            onClick={handlePassengerClose}
            className="flex flex-col rounded-lg h-14 w-full gap-2 p-2"
          >
            <h6 style={{ fontSize: "15px" }} onClick={handlePassengerClose}>
              Class {seats}
            </h6>
            <div className="flex gap-4 items-center">
              <BsFillPersonPlusFill size={28} color="#CBA052" />
              <div>
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
            </div>
          </div>
          <div className="dropdown-passenger">
            <div className="detail-passanger-class">
              <div className="wrap-passenger">
                <div>
                  <p style={{ fontWeight: "700" }}>Passenger</p>
                </div>

                <div className="flex w-full justify-between">
                  <div className="flex flex-col w-full justify-around">
                    <p>Adults</p>
                    <p>Childs</p>
                    <p>Infants</p>
                  </div>
                  <div className="flex flex-col w-full justify-around gap-2">
                    <div className="flex gap-2 w-full">
                      <div
                        className="bg-brand-whiteLight w-full flex  text-brand-black items-center justify-center rounded-lg"
                        onClick={adultDecrement}
                      >
                        -
                      </div>
                      <Input
                        name={"name"}
                        readOnly
                        className="lg:w-14 md:w-9"
                        onChange={() => handleAdults()}
                        style={{ color: "black" }}
                        value={adults}
                      />
                      <div
                        className="bg-brand-whiteLight w-full flex  text-brand-black items-center justify-center rounded-lg"
                        onClick={adultIncrement}
                      >
                        +
                      </div>
                    </div>

                    <div className="flex gap-2 w-full">
                      <div
                        className="bg-brand-whiteLight w-full flex  text-brand-black items-center justify-center rounded-lg"
                        onClick={childDecrement}
                      >
                        -
                      </div>
                      <Input
                        name={"name"}
                        readOnly
                        className="lg:w-14 md:w-9"
                        onChange={handleChild}
                        style={{ color: "black" }}
                        value={childs}
                      />
                      <div
                        className="bg-brand-whiteLight w-full flex  text-brand-black items-center justify-center rounded-lg"
                        onClick={childIncrement}
                      >
                        +
                      </div>
                    </div>

                    <div className="flex gap-2 w-full">
                      <div
                        className="bg-brand-whiteLight w-full flex  text-brand-black items-center justify-center rounded-lg"
                        onClick={infantDecrement}
                      >
                        -
                      </div>

                      <Input
                        name={"name"}
                        readOnly
                        className="lg:w-14 md:w-9"
                        onChange={handleInfant}
                        style={{ color: "black" }}
                        value={infants}
                      />
                      <div
                        className="bg-brand-whiteLight w-full flex text-brand-black items-center justify-center rounded-lg"
                        onClick={infantIncrement}
                      >
                        +
                      </div>
                    </div>
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
              <Button
                onClick={() => handlePassengerClass()}
                className="confirm-passenger-class"
              >
                Confirm
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div
          onClick={handlePassenger}
          className="flex flex-col relative rounded-lg h-fit w-full gap-3 pl-3 sm:p-2"
        >
          <h6 className="sm:text-sm">Passenger/Class</h6>
          <div className="flex gap-4 items-center ">
            <BsFillPersonPlusFill size={28} color="#CBA052" />
            <p>
              Passenger {adults + childs + infants}, Class {seats}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
