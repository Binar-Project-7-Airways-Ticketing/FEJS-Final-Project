import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import Passenger from "./Reusable/Passenger";
import { useNavigate } from "react-router-dom";

function CardHistory() {
  const navigate = useNavigate();
  const items = [
    {
      label: <a href="#">Return</a>,
      key: "0",
    },
    {
      label: <a href="#">One Way</a>,
      key: "1",
    },
    {
      label: "Multiple cities or countries",
      key: "3",
    },
  ];

  return (
    <>
      <div className="wrap-detail-booking">
        <div className="wrap-detail-title">
          <div className="detail-title">
            <h2>Get Flight Route</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, error.</p>
          </div>
        </div>
        <div className="detail-booking">
          <div className="wrap-input">
            <div className="input">
              <div className="inpt-passenger">
                <p style={{ fontSize: "13px" }}>From</p>
              </div>
              <div className="inpt-passenger">
                <p style={{ fontSize: "13px" }}>To</p>
              </div>
            </div>

            {/* <Passenger /> */}
            <div className="inpt-passenger">
              <p style={{ fontSize: "13px" }}>Passenger/Class</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHistory;
