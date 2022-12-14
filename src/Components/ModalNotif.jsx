import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadNotifDetail } from "./Feature/Models/NotificationDetail";

export default function ModalNotif(props) {
  const { notifDetail } = useSelector((state) => state.detailNotif);
  const dispacth= useDispatch()
//   useEffect(()=>{
//     dispacth(loadNotifDetail())
//   },[dispacth])
  return (
    <>
      <Modal
        title={notifDetail.title}
        open={props.isModalOpen}
        onCancel={props.handleCancel}
        footer={null}
      >
        <div className="flex w-full gap-5">
          <div className="border-2 border-brand-black rounded-full w-fit ">
            <img className="rounded-full w-28" src={notifDetail.user.pictureUrl} />
          </div>
          <div className="w-full">
            <p>{notifDetail.message}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
