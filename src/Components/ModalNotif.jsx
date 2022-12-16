import React from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";

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
          <div className="border-2 border-brand-black rounded-full w-fit ">
            <img className="rounded-full w-28" src={notifDetail.pictureUrl} />
          </div>
          <div className="w-full">
            <p>{props.message}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
