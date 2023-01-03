import React, { useEffect } from "react";
import { Dropdown, Space, DatePicker, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { WindowsFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import axios from "axios";
import { authConfig } from "../Feature/Config";
import { useState } from "react";

export default function Prf(setIsLogin, props) {
  const { login } = useSelector((state) => state.authLogin);
  const navigate = useNavigate();
  let userId = localStorage.getItem("id");
  const [imageUser, setImageUser] = useState("");
  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setTimeout(function () {
      window.location.reload(1);
    }, 500);
    navigate("/");
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
  useEffect(() => {
    axios
      .get(authConfig.baseUrl + "/api/user/" + userId)
      .then((res) => {
        setImageUser(res.data.pictureUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Dropdown placement={props.place} arrow menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <img className="rounded-full h-10 w-10" src={imageUser}></img>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
