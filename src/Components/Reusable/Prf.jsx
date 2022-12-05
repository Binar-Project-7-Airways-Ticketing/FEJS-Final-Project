import React from "react";
import { Dropdown, Space, DatePicker, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { WindowsFilled } from "@ant-design/icons";

export default function Prf(setIsLogin) {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("auth");
    setTimeout(function () {
        window.location.reload(1);
      }, 500);
      navigate("/")
    return setIsLogin(false);
  };
  const items = [
    {
      label: <a onClick={() => navigate("/profile")}>Akun Saya</a>,
      key: "0",
    },
    {
      label: (
        <a
          onClick={() => {
            logOutHandler();
          }}
        >
          Logout
        </a>
      ),
      key: "1",
    },
  ];
  return (
    <div>
      <Dropdown placement="bottomRight" arrow menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <img style={{borderRadius:"30px"}} src="http://res.cloudinary.com/dwncupcal/image/upload/be781f4f-99d1-4dc4-925d-58072f4de335"></img>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
