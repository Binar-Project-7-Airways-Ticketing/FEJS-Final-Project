import React from "react";
import { Modal } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { MdEventSeat, MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { loadSeats } from "../Feature/Models/SeatsSlice";

export default function ModalSeat(props) {
  const { seats } = useSelector((state) => state.seat);
  const [detailSeat, setDetailSeat] = useState("");
  const [detailSea, setDetailSea] = useState(false);
  const [arrowSeat, setArrowSeat] = useState(true);
  const [arrowPassenger, setArrowPassenger] = useState(true);

  const dispatch = useDispatch();
  const handleSeat = (e) => {
    console.log(e);
    let x = seats
      .filter((item) => item.idSeat === e.idSeat)
      .map((item) => {
        return item;
      });

    if (x.stateSeat === "READY") {
      x.stateSeat = "READY";
    } else {
      if (x.stateSeat === "AVAILABLE") {
        x.stateSeat = "CHOOSE";
      } else {
        x.stateSeat = "AVAILABLE";
      }
    }
    // let y = { id: x[0].id, status: x[0].status };

    // let z = seats.seat.push(y);
  };

  const HandleDetailSeat = (e) => {
    console.log(e);
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
  const submit = (e) => {
    console.log({ status: "" });
  };
  useEffect(() => {
    dispatch(loadSeats());
  }, [seats]);

  return (
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
      <div className="modal-seat">
        <div className="flex w-full">
          <div className="flex w-full gap-10">
            <div className="flex w-fit flex-col gap-5">
              <div className="flex flex-col gap-3 rounded-md bg-brand-whiteLight text-brand-whiteLight h-fit">
                <div className="flex gap-2 items-center bg-brand-black h-fit p-2 rounded-md">
                  <h6>Jakarta</h6>
                  <BsArrowRightCircle />
                  <h6>Singapura</h6>
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
                  <div className="text-brand-black p-2 flex justify-between">
                    <p>Jhon Dhe</p>
                    <p>seat 23A</p>
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
              <h5>G40 AIRBUS 200</h5>
              <div className="flex w-fit gap-2">
                <div className="flex w-fit gap-2">
                  <div className="flex items-center relative gap-1 flex-col">
                    <h6 style={{ paddingLeft: "20px" }}>A</h6>

                    {seats.slice(0, 10).map((item) => (
                      <div className="flex justify-between h-full items-center">
                        <p style={{ width: "20px" }}>{item.idSeat}</p>
                        <MdEventSeat
                          className="cursor-pointer "
                          onClick={() => handleSeat(item)}
                          onMouseEnter={() => HandleDetailSeat(item)}
                          onMouseLeave={() => HandleDetailSeatClose()}
                          color={
                            item.stateSeat === "READY"
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
                  <div className="flex items-center gap-1 flex-col">
                    <h6>B</h6>
                    {seats.slice(10, 20).map((item) => (
                      <div className="flex items-center">
                        <MdEventSeat
                          onClick={() => handleSeat(item)}
                          onMouseEnter={() => HandleDetailSeat(item)}
                          onMouseLeave={() => HandleDetailSeatClose()}
                          color={
                            item.stateSeat === "READY"
                              ? "grey"
                              : item.stateSeat === "AVAILABLE"
                              ? "#f5cf89"
                              : "#cba052"
                          }
                          size={"30"}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 flex-col">
                    <h6>C</h6>
                    {seats.slice(20, 30).map((item) => (
                      <div className="flex items-center">
                        <MdEventSeat
                          onClick={() => handleSeat(item)}
                          onMouseEnter={() => HandleDetailSeat(item)}
                          onMouseLeave={() => HandleDetailSeatClose()}
                          color={
                            item.stateSeat === "READY"
                              ? "grey"
                              : item.stateSeat === "AVAILABLE"
                              ? "#f5cf89"
                              : "#cba052"
                          }
                          size={"30"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-24 h-full flex items-center">
                  <ShowDetailSeat />
                </div>
                <div className="flex w-fit gap-2">
                  <div className="flex items-center gap-1 flex-col">
                    <h6>D</h6>
                    {seats.slice(30, 40).map((item) => (
                      <div className="flex items-center">
                        <MdEventSeat
                          onClick={() => handleSeat(item)}
                          onMouseEnter={() => HandleDetailSeat(item)}
                          onMouseLeave={() => HandleDetailSeatClose()}
                          color={
                            item.stateSeat === "READY"
                              ? "grey"
                              : item.stateSeat === "AVAILABLE"
                              ? "#f5cf89"
                              : "#cba052"
                          }
                          size={"30"}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 flex-col">
                    <h6>E</h6>
                    {seats.slice(40, 50).map((item) => (
                      <div className="flex items-center">
                        <MdEventSeat
                          onClick={() => handleSeat(item)}
                          onMouseEnter={() => HandleDetailSeat(item)}
                          onMouseLeave={() => HandleDetailSeatClose()}
                          color={
                            item.stateSeat === "READY"
                              ? "grey"
                              : item.stateSeat === "AVAILABLE"
                              ? "#f5cf89"
                              : "#cba052"
                          }
                          size={"30"}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 flex-col">
                    <h6>F</h6>
                    {seats.slice(50, 60).map((item) => (
                      <div className="flex items-center">
                        <MdEventSeat
                          onClick={() => handleSeat(item)}
                          onMouseEnter={() => HandleDetailSeat(item)}
                          onMouseLeave={() => HandleDetailSeatClose()}
                          color={
                            item.stateSeat === "READY"
                              ? "grey"
                              : item.stateSeat === "AVAILABLE"
                              ? "#f5cf89"
                              : "#cba052"
                          }
                          size={"30"}
                        />
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
  );
}
