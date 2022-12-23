import React from "react";

import { Modal } from "antd";

import bri from "../image/bri.jpg";
import bca from "../image/bca.jpg";
import mandiri from "../image/mandiri.jpg";
import bni from "../image/bni.jpg";
import ovo from "../image/ovo.jpg";
import danaa from "../image/dana.jpg";


export default function ModalMethodPayment(props) {
  return (
    <div className="parent-d w-full mt-6 flex sm:justify-center md:justify-start lg:justify-end p-4 mb-4">
      <button
        className="block rounded-lg cursor-pointer justify-center h-[60px] w-[50%] bg-brand-green text-[#f9f9f9] border-0 font-[600] tracking-[2px]"
        type="submit"
        onClick={props.showModalBayar}
      >
        LANJUT PEMBAYARAN
      </button>
      <Modal
        title="Select Payment Method"
        open={props.isModalBayarOpen}
        onOk={props.handleBayarOk}
        onCancel={props.handleBayarCancel}
        footer={[null]}
      >
        <div className="p-2 mt-4">
          <div
            onClick={props.dana}
            className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
          >
            <img
              src={bri}
              style={{
                width: "70px",
                height: "70px",
              }}
            ></img>
            <h3 className="p-6 text-black text-bold">BRI</h3>
          </div>
          <div
            onClick={props.dana}
            className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
          >
            <img
              src={bca}
              style={{
                width: "70px",
                height: "70px",
              }}
            ></img>
            <h3 className="p-6 text-black text-bold">BCA</h3>
          </div>
          <div
            onClick={props.dana}
            className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
          >
            <img
              src={mandiri}
              style={{
                width: "70px",
                height: "70px",
              }}
            ></img>
            <h3 className="p-6 text-black text-bold">Mandiri</h3>
          </div>
          <div
            onClick={props.dana}
            className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
          >
            <img
              src={bni}
              style={{
                width: "70px",
                height: "70px",
              }}
            ></img>
            <h3 className="p-6 text-black text-bold">BNI</h3>
          </div>
          <div
            onClick={props.dana}
            className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
          >
            <img
              src={ovo}
              style={{
                width: "70px",
                height: "70px",
              }}
            ></img>
            <h3 className="p-6 text-black text-bold">OVO</h3>
          </div>
          <div
            onClick={props.dana}
            className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
          >
            <img
              src={danaa}
              style={{
                width: "70px",
                height: "70px",
              }}
            ></img>
            <h3 className="p-6 text-black text-bold">Dana</h3>
          </div>
        </div>
      </Modal>
    </div>
  );
}
