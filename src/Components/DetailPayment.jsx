import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

import { useEffect } from "react";

export default function DetailPayment(props) {
  const [cityTo, setCityTo] = useState("");
  const [cityFrom, setCityFrom] = useState("");
  useEffect(() => {
    setCityTo(JSON.parse(localStorage.getItem("cityTo")));
    setCityFrom(JSON.parse(localStorage.getItem("cityFrom")));
  }, []);

  return (
    <div className="booking-right">
      <div className="w-full">
        <div className="parent-a w-full bg-brand-whiteLight p-6 rounded-md border-2 border-brand-black">
          <div className="w-full bg-brand-black text-white p-2 mb-4 gap-4 rounded-md">
            <h3 className="text-[20px] font-semibold mb-2">Penerbangan</h3>
          </div>
          <div className="py-2">
            <div className="flex w-full gap-8 mb-2 p-2 ">
              <div className="flex w-full gap-4">
                <h3>{cityFrom.city}</h3>
                <span>
                  <ArrowRightOutlined />
                </span>
                <h3>{cityTo.city}</h3>
              </div>
            </div>
            <div className="flex justify-start w-full my-[2rem] h-fit">
              <div>
                <h3 className="text-[16px] text-black mb-4 font-semibold">
                  Total Pembayaran
                </h3>
                <span className="w-full h-fit">{props.harga}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
