import React from "react";
import { Button, Modal } from "antd";
import { MdEventSeat } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadSeats } from "../Feature/Models/SeatsSlice";

export default function ModalSeat(props) {
  const { seats, setSeats } = useSelector((state) => state.seat);

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
  // const Number = () => {
  // for (let i = 1; i <= seats.slice(0, 10).length; i++) {
  //   let a = [i];
  //   //  let x = []
  //   //  x.push(a)
  //   //  return(a.toString());
  //   //  return (<p>{x.toString()}</p>)
  // }
  // setNumber()
  // }
  const submit = (e) => {
    console.log({ status: "" });
  };
  useEffect(() => {
    dispatch(loadSeats());
  }, [seats]);

  return (
    <Modal
      title="Choose your seat"
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={[null]}
      width={1200}
    >
      <div className="modal-seat">
        <div className="flex w-full">
          <div className="flex w-full">
            <div className="flex w-1/2 flex-col gap-5">
              <h5>List Passenger</h5>
              <p>Kursi 23A, IDR 0</p>
              <h5>Seat Description</h5>
              <div className="flex w-full gap-3">
                <div className="flex flex-col justify-around">
                  <MdEventSeat color="#cba052" />
                  <MdEventSeat color="#f5cf89" />
                  <MdEventSeat color="grey" />
                </div>
                <div className="flex flex-col justify-between align-middle ">
                  <p>Kursi dipilih</p>
                  <p>Kursi kosong</p>
                  <p>Kursi tidak tersedia</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <h5>G40 AIRBUS 200</h5>
              <div className="flex w-full gap-2">
                <div className="flex flex-col">
                  {seats.slice(0, 10).map((item) => (
                    <div className="flex justify-between h-full items-center">
                     
                    </div>
                  ))}
                </div>
                <div className="flex items-center flex-col">
                  <h6 style={{paddingLeft:"20px"}}>A</h6>
                  {seats.slice(0, 10).map((item) => (
                    <div className="flex items-center">
                       <p style={{width:"20px"}}>{item.idSeat}</p>
                      <MdEventSeat
                        onClick={() => handleSeat(item)}
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
                <div className="flex items-center flex-col">
                  <h6>B</h6>
                  {seats.slice(10, 20).map((item) => (
                    <div className="flex items-center">
                      <MdEventSeat
                        onClick={() => handleSeat(item)}
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
                <div className="flex items-center flex-col">
                  <h6>C</h6>
                  {seats.slice(20, 30).map((item) => (
                    <div className="flex items-center">
                      <MdEventSeat
                        onClick={() => handleSeat(item)}
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
                <div className="flex items-center flex-col">
                  <h6>D</h6>
                  {seats.slice(30, 40).map((item) => (
                    <div className="flex items-center">
                      <MdEventSeat
                        onClick={() => handleSeat(item)}
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
            <div className="w-6/12">
              <h5>hallo</h5>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
