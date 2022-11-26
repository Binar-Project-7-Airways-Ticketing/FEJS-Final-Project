import React, { useEffect, useState } from "react";
import logo from "../logo3.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import "./All.css";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Space, DatePicker, Input } from "antd";
import Prf from "./Reusable/Prf";

export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const srch = () => {
    setSearch(true);
  };
  const srchClose = () => {
    setSearch(false);
  };
  const items = [
    {
      label: "Selamat anda mendapatkan voucher",
      key: "0",
    },
    {
      label: "Hari ini ada promo 50% keseluruh wilayah indonesia",
      key: "1",
    },
    {
      label: "Discount 30% class Business",
      key: "3",
    },
  ];

  // hook handle login
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  return (
    <div className="ffff">
      <div className="container">
        <div className="wrap-navbar">
          <div className="logo">
            <img onClick={()=>navigate("/")} style={{ width: "150px", cursor:"pointer" }} src={logo}></img>
          </div>

          <ul className="menu-navbar">
            <li>Home</li>
            <li>About Us</li>
            <li>Review</li>
            <li>Flight Info</li>
            <li>Contact Us</li>
            {/* <Link to={"/profile"}>
              <button>profile</button>
            </Link> */}
          </ul>

          <div className="search">
            {search ? (
              <Input placeholder="Search Cities or Countries" />
            ) : (
              <Input className="frm" placeholder="Search Cities or Countries" />
            )}
            {search ? (
              <BsSearch onClick={srchClose} />
            ) : (
              <BsSearch onClick={srch} />
            )}

            <div className="notif">
              {isLogin ? (
                <Dropdown placement="bottom" arrow menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <AiOutlineBell style={{ fontSize: "20px" }} />
                      <p>Notifikasi</p>
                    </Space>
                  </a>
                </Dropdown>
              ) : (
                <></>
              )}
            </div>
            <div className="user">
              {isLogin ? (
                <Prf />
              ) : (
                <>
                  <AiOutlineUser style={{ fontSize: "20px" }} />
                  <a href="/login">Login</a>
                  <p>|</p>
                  <a href="/register">Sign up</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
