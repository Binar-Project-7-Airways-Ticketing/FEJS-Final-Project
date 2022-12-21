import React from "react";
import { Button, Checkbox, Form, Input, Modal, Radio } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { MdEventSeat, MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { loadSeats } from "../Feature/Models/SeatsSlice";
import { updateSeats } from "../Feature/Models/SeatUpdate";
import ButtonFindFlight from "../Reusable/ButtonFindFlight";

export default function ModalSeat(props) {
  const { Seats } = useSelector((state) => state.seat);
  const [planeType, setPlaneType] = useState(undefined);
  const [planeNumber, setPlaneNumber] = useState(undefined);
  const [detailSeat, setDetailSeat] = useState("");
  const [detailSea, setDetailSea] = useState(false);
  const [arrowSeat, setArrowSeat] = useState(true);
  const [arrowPassenger, setArrowPassenger] = useState(true);
  const [sortIdSeat, setSortIdSeat] = useState();
  const [numberSeat, setNumberSeat] = useState([]);
  const [resultTo, setResultTo] = useState([]);
  const [resultFrom, setResultFrom] = useState([]);
  const [passenger, setPassenger] = useState("");
  const [arrayPassenger, setArrayPassenger] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [seatPassenger, setSeatPassenger] = useState(0);
  const [adults, setAdults] = useState(1);

  const dispatch = useDispatch();
  const handleSeat = (e) => {
    let seat = e.stateSeat;

    if (seat === "NOT_AVAILABLE") {
      seat = "NOT_AVAILABLE";
    } else {
      if (seat === "AVAILABLE") {
        seat = "BOOKED";
        setNumberSeat(e.numberSeat);
      } else {
        seat = "AVAILABLE";
        setNumberSeat("");
      }
    }
    let updateSeat = {
      id: e.idSeat,
      state: seat,
    };

    dispatch(updateSeats(updateSeat));
  };

  const HandleDetailSeat = (e) => {
    setDetailSeat(e);
    setDetailSea(true);
    return <ShowDetailSeat />;
  };
  const HandleDetailSeatClose = (e) => {
    setDetailSea(false);
  };
  const ShowDetailSeat = () => {
    return detailSea ? (
      <div className="flex w-full flex-col rounded-md bg-brand-whiteLight p-1 gap-1 list-disc">
        <li>{detailSeat.numberSeat}</li>
        <li> {detailSeat.stateSeat}</li>
      </div>
    ) : null;
  };
  const adultIncrement = () => {
    let value = 6;
    if (adults >= value) {
      value = 6;
    } else {
      value = adults;
    }

    setAdults(value + 1);
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
  const [adultsSeat, setAdultSeat] = useState("Coba");
  const onChange = (e) => {
    // let count = e.target.value;
    // let i = passenger.adults + passenger.child + passenger.infant;
    // setPassenger(count.idSeat);
    // console.log(count.idSeat);
    setAdultSeat(e.target.value);
  };
  const coba = (e) => {
    // let value =  passenger.adults + passenger.child + passenger.infant
    // if (seatPassenger >= value) {
    //   value =  passenger.adults + passenger.child + passenger.infant
    // } else {
    //   value = seatPassenger;
    // }

    // setSeatPassenger(value+1)
    let seat = e.stateSeat;

    if (seat === "NOT_AVAILABLE") {
      seat = "NOT_AVAILABLE";
    } else {
      if (seat === "AVAILABLE") {
        seat = "BOOKED";
        setNumberSeat(e.numberSeat);
      } else {
        seat = "AVAILABLE";
        setNumberSeat("");
      }
    }
    let updateSeat = {
      id: e.idSeat,
      state: seat,
    };

    dispatch(updateSeats(updateSeat));
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    const countPassenger = JSON.parse(localStorage.getItem("passanger"));
    setPassenger(countPassenger);
    const cityTo = JSON.parse(localStorage.getItem("cityTo"));
    const cityFrom = JSON.parse(localStorage.getItem("cityFrom"));
    const planeType = JSON.parse(localStorage.getItem("depart"));
    setPlaneType(planeType.plane.planeType);
    setPlaneNumber(planeType.flightNumber);
    setResultTo(cityTo);
    setResultFrom(cityFrom);
    dispatch(loadSeats());
  }, [dispatch, Seats]);

  return (
    <>
      {Seats ? (
        <>
          <Modal
            title={
              <div className="flex items-center gap-5">
                <div className="bg-brand-black w-fit rounded-full">
                  <MdOutlineAirlineSeatReclineExtra className="w-10 h-10 p-2 text-brand-whiteLight" />
                </div>
                <h5>Choose your seat</h5>
              </div>
            }
            open={props.isModalOpen}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            footer={[null]}
            width={"fit-content"}
          >
            <div className="h-screen sm:overflow-scroll">
              <div className="flex w-full">
                <div className="flex sm:flex-col w-full gap-10">
                  <div className="flex md:w-fit flex-col gap-5 sm:w-full">
                    <div className="flex md:w-60 sm:w-full flex-col rounded-md bg-brand-whiteLight text-brand-whiteLight h-fit">
                      <div className="flex gap-2 items-center  bg-brand-black h-fit p-2 justify-between rounded-md">
                        <div className="flex gap-2 items-center">
                          <h6>{resultFrom.city}</h6>
                          <BsArrowRightCircle />
                          <h6>{resultTo.city}</h6>
                        </div>
                        {arrowPassenger ? (
                          <CaretUpOutlined
                            onClick={() => setArrowPassenger(false)}
                            className="w-10 flex justify-end items-center"
                          />
                        ) : (
                          <CaretDownOutlined
                            onClick={() => setArrowPassenger(true)}
                            className="w-10 flex justify-end items-center"
                          />
                        )}
                      </div>

                      {arrowPassenger ? (
                        <div className="flex text-brand-black">
                          <div className="w-full">
                            <div className=" p-2 ">
                              <h6>Passenger</h6>
                              <div className="flex gap-1 justify-between">
                                
                              <p>{props.penumpang}</p>
                              <Form
                                name="basic"
                                labelCol={{
                                  span: 8,
                                }}
                                wrapperCol={{
                                  span: 16,
                                }}
                                initialValues={{
                                  remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                              >
                                {Seats.filter(
                                  (item) => item.stateSeat === "BOOKED"
                                )
                                  .slice(
                                    0,
                                    passenger.adults +
                                      passenger.child +
                                      passenger.infant
                                  )
                                  .map((item, i) => (
                                    <Form.Item
                                      name={item.idSeat}
                                      rules={[
                                        {
                                          required: true,
                                          message: "Cannot Empty",
                                        },
                                      ]}
                                    >
                                      <Radio.Group
                                        onChange={onChange}
                                        value={adultsSeat}
                                      >
                                        <Radio.Button
                                          onClick={() => coba(item)}
                                          value={item}
                                        >
                                          Number seat {item.numberSeat}
                                        </Radio.Button>
                                      </Radio.Group>
                                    </Form.Item>
                                  ))}
                                <Button
                                  htmlType="submit"
                                  className="confirm-passenger-class"
                                >
                                  Confirm
                                </Button>
                              </Form>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-3  bg-brand-whiteLight rounded-md text-brand-whiteLight h-fit">
                      <div className="flex gap-2 items-center rounded-md bg-brand-black h-fit p-2 justify-between">
                        <h6>Seat Description</h6>
                        {arrowSeat ? (
                          <CaretUpOutlined
                            onClick={() => setArrowSeat(false)}
                            className="w-10 flex justify-end items-center"
                          />
                        ) : (
                          <CaretDownOutlined
                            onClick={() => setArrowSeat(true)}
                            className="w-10 flex justify-end items-center"
                          />
                        )}
                      </div>
                      {arrowSeat ? (
                        <div className="text-brand-black p-2 ">
                          <div className="flex w-full gap-3">
                            <div className="flex flex-col justify-around">
                              <MdEventSeat fontSize={25} color="#cba052" />
                              <MdEventSeat fontSize={25} color="#f5cf89" />
                              <MdEventSeat fontSize={25} color="grey" />
                            </div>
                            <div className="flex flex-col justify-between align-middle ">
                              <p>Kursi dipilih</p>
                              <p>Kursi kosong</p>
                              <p>Kursi tidak tersedia</p>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <h5>
                      {planeNumber}, {planeType}
                    </h5>

                    <div className="flex w-fit gap-2">
                      <div className="flex w-fit gap-2">
                        <div className="flex items-center relative gap-1 flex-col">
                          <h6 style={{ paddingLeft: "20px" }}>A</h6>

                          {[...Seats]
                            .sort((a, b) => a.idSeat - b.idSeat)
                            .slice(0, 15)
                            .map((item) => (
                              <div className="flex justify-between h-full items-center">
                                <p style={{ width: "20px" }}>{item.idSeat}</p>
                                <MdEventSeat
                                  className="cursor-pointer "
                                  onClick={() => handleSeat(item)}
                                  onMouseEnter={() => HandleDetailSeat(item)}
                                  onMouseLeave={() => HandleDetailSeatClose()}
                                  color={
                                    item.stateSeat === "NOT_AVAILABLE"
                                      ? "grey"
                                      : item.stateSeat === "AVAILABLE"
                                      ? "#f5cf89"
                                      : "#cba052"
                                  }
                                  size={"30"}
                                ></MdEventSeat>
                              </div>
                            ))}
                        </div>
                        <div className="flex items-center relative gap-1 flex-col">
                          <h6>B</h6>
                          {[...Seats]
                            .sort((a, b) => a.idSeat - b.idSeat)
                            .slice(15, 30)
                            .map((item) => (
                              <div className="flex justify-between h-full items-center">
                                <MdEventSeat
                                  className="cursor-pointer "
                                  onClick={() => handleSeat(item)}
                                  onMouseEnter={() => HandleDetailSeat(item)}
                                  onMouseLeave={() => HandleDetailSeatClose()}
                                  color={
                                    item.stateSeat === "NOT_AVAILABLE"
                                      ? "grey"
                                      : item.stateSeat === "AVAILABLE"
                                      ? "#f5cf89"
                                      : "#cba052"
                                  }
                                  size={"30"}
                                ></MdEventSeat>
                              </div>
                            ))}
                        </div>
                        <div className="flex items-center relative gap-1 flex-col">
                          <h6>C</h6>
                          {[...Seats]
                            .sort((a, b) => a.idSeat - b.idSeat)
                            .slice(30, 45)
                            .map((item) => (
                              <div className="flex justify-between h-full items-center">
                                <MdEventSeat
                                  className="cursor-pointer "
                                  onClick={() => handleSeat(item)}
                                  onMouseEnter={() => HandleDetailSeat(item)}
                                  onMouseLeave={() => HandleDetailSeatClose()}
                                  color={
                                    item.stateSeat === "NOT_AVAILABLE"
                                      ? "grey"
                                      : item.stateSeat === "AVAILABLE"
                                      ? "#f5cf89"
                                      : "#cba052"
                                  }
                                  size={"30"}
                                ></MdEventSeat>
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className="w-24 h-full flex items-start">
                        <ShowDetailSeat />
                      </div>
                      <div className="flex w-fit gap-2">
                        <div className="flex items-center relative gap-1 flex-col">
                          <h6>D</h6>
                          {[...Seats]
                            .sort((a, b) => a.idSeat - b.idSeat)
                            .slice(45, 60)
                            .map((item) => (
                              <div className="flex justify-between h-full items-center">
                                <MdEventSeat
                                  className="cursor-pointer "
                                  onClick={() => handleSeat(item)}
                                  onMouseEnter={() => HandleDetailSeat(item)}
                                  onMouseLeave={() => HandleDetailSeatClose()}
                                  color={
                                    item.stateSeat === "NOT_AVAILABLE"
                                      ? "grey"
                                      : item.stateSeat === "AVAILABLE"
                                      ? "#f5cf89"
                                      : "#cba052"
                                  }
                                  size={"30"}
                                ></MdEventSeat>
                              </div>
                            ))}
                        </div>
                        <div className="flex items-center relative gap-1 flex-col">
                          <h6>E</h6>
                          {[...Seats]
                            .sort((a, b) => a.idSeat - b.idSeat)
                            .slice(76, 91)
                            .map((item) => (
                              <div className="flex justify-between h-full items-center">
                                <MdEventSeat
                                  className="cursor-pointer "
                                  onClick={() => handleSeat(item)}
                                  onMouseEnter={() => HandleDetailSeat(item)}
                                  onMouseLeave={() => HandleDetailSeatClose()}
                                  color={
                                    item.stateSeat === "NOT_AVAILABLE"
                                      ? "grey"
                                      : item.stateSeat === "AVAILABLE"
                                      ? "#f5cf89"
                                      : "#cba052"
                                  }
                                  size={"30"}
                                ></MdEventSeat>
                              </div>
                            ))}
                        </div>
                        <div className="flex items-center relative gap-1 flex-col">
                          <h6>F</h6>
                          {[...Seats]
                            .sort((a, b) => a.idSeat - b.idSeat)
                            .slice(61, 76)
                            .map((item) => (
                              <div className="flex justify-between h-full items-center">
                                <MdEventSeat
                                  className="cursor-pointer "
                                  onClick={() => handleSeat(item)}
                                  onMouseEnter={() => HandleDetailSeat(item)}
                                  onMouseLeave={() => HandleDetailSeatClose()}
                                  color={
                                    item.stateSeat === "NOT_AVAILABLE"
                                      ? "grey"
                                      : item.stateSeat === "AVAILABLE"
                                      ? "#f5cf89"
                                      : "#cba052"
                                  }
                                  size={"30"}
                                ></MdEventSeat>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="w-6/12">
            <h5>hallo</h5>
          </div> */}
              </div>
            </div>
          </Modal>
        </>
      ) : null}
    </>
  );
}
