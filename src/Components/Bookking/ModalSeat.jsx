import React from "react";
import { Button, Modal } from "antd";
import { MdEventSeat } from "react-icons/md";
import { useState } from "react";

export default function ModalSeat(props) {
  const [seats, setSeats] = useState({
    seat: [
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
      {
        id: 1,
        status: true,
      },
    ],
  });

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
            <div className="flex w-full flex-col gap-5">
              <h5>List Passenger</h5>
              <p>Kursi 23A, IDR 0</p>
              <h5>Seat Description</h5>
              <div className="flex w-full gap-3">
                <div className="flex flex-col justify-between">
                  <MdEventSeat />
                  <MdEventSeat />
                  <MdEventSeat />
                </div>
                <div className="flex flex-col justify-between align-middle ">
                  <p>Kursi dipilih</p>
                  <p>Kursi kosong</p>
                  <p>Kursi tidak tersedia</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-5">
              <h5>G40 AIRBUS 200</h5>
              <div className="flex w-full gap-8">
                <div className="grid w-fit h-fit  grid-cols-3">
                  {seats.seat.slice(0, 25).map((item) => (
                    <MdEventSeat size={"30"}/>
                  ))}
                </div>
                <div className="grid w-fit h-fit grid-cols-3">
                  {seats.seat.slice(25, 50).map((item) => (
                    <MdEventSeat size={"30"}/>
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
