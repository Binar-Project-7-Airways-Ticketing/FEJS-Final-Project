import React from "react";
import { Dropdown, Space, DatePicker, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { WindowsFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function Prf(setIsLogin, props) {
  const {login}=useSelector((state)=>state.authLogin)
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
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
      <Dropdown placement={props.place} arrow menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <img className="rounded-full h-14 w-14" src="http://res.cloudinary.com/dwncupcal/image/upload/be781f4f-99d1-4dc4-925d-58072f4de335"></img>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
