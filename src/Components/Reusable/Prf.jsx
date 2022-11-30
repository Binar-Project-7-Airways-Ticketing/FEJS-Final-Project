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
            <img src="https://th.bing.com/th/id/R.9d32bec8058bd3595a63a08a8cc12ade?rik=9cCTin36GLU%2f5w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_87237.png&ehk=hVpH%2bC7rwlA1j2KqxGpMs1sp9l0RgM0jjRJsJsvDoPc%3d&risl=&pid=ImgRaw&r=0"></img>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
