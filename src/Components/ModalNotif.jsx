import React from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { BsFillBellFill } from "react-icons/bs";

export default function ModalNotif(props) {
  const { notifDetail } = useSelector((state) => state.detailNotif);

  return (
    <>
      <Modal
        title={props.title}
        open={props.isModalOpen}
        onCancel={props.handleCancel}
        footer={null}
      >
        <div className="flex w-full gap-5">
          <div className="border-2 bg-brand-black rounded-full p-2 ">
            <BsFillBellFill size={40} className="rotate-12" color="#cba052"/>
          </div>
          <div className="w-full">
            <p>{props.message}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
