import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Dropdown, Space, Input } from "antd";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../logo3.png";
import Prf from "./Reusable/Prf";
import "./All.css";

export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const [show, setShow] = useState(false);
  const navRef = useRef();
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
  const showBar = () => {
    console.log("halalo");
    setShow(true);
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  return (
    <nav>
      <div className="container">
        <div className="wrap-navbar text-brand-whiteLight relative">
          <div className="logo">
            <img
              onClick={() => navigate("/")}
              style={{ width: "130px", cursor: "pointer" }}
              src={logo}
            ></img>
          </div>
          {show ? (
            <div className="search">
              {search ? (
                <Input
                  className="md:w-full"
                  placeholder="Search Cities or Countries"
                />
              ) : (
                <Input
                  className="md:w-full hidden"
                  placeholder="Search Cities or Countries"
                />
              )}
              {search ? (
                <BsSearch
                  style={{
                    fontSize: "29px",
                    paddingTop: "5px",
                    width:"fit-content"
                   
                  }}
                  onClick={srchClose}
                />
              ) : (
                <BsSearch
                  style={{
                    fontSize: "25px",
                    paddingTop: "5px",
                    width:"fit-content"
                   
                  }}
                  onClick={srch}
                />
              )}

              <div className="notif">
                {isLogin ? (
                  <Dropdown
                    onMouseEnter={() => setOpenNotif(true)}
                    placement="bottom"
                    arrow
                    menu={{ items }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space className="space">
                        {openNotif ? (
                          <div></div>
                        ) : (
                          <div className="notif-read">
                            <p>{items.length}</p>
                          </div>
                        )}
                        <AiOutlineBell style={{ fontSize: "30px" }} />
                      </Space>
                    </a>
                  </Dropdown>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <div
              ref={navRef}
              className="nav-respon flex w-full items-center justify-center"
            >
              <ul className="menu-navbar">
                <li>Home</li>
                <li>About Us</li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("review")}
                >
                  Review
                </li>
              </ul>

              <div className="search">
                {search ? (
                  <Input placeholder="Search Cities or Countries" />
                ) : (
                  <Input
                    className="frm"
                    placeholder="Search Cities or Countries"
                  />
                )}
                {search ? (
                  <BsSearch
                    style={{ fontSize: "25px", paddingTop: "5px" }}
                    onClick={srchClose}
                  />
                ) : (
                  <BsSearch
                    style={{ fontSize: "25px", paddingTop: "5px" }}
                    onClick={srch}
                  />
                )}

                <div className="notif">
                  {isLogin ? (
                    <Dropdown
                      onMouseEnter={() => setOpenNotif(true)}
                      placement="bottom"
                      arrow
                      menu={{ items }}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="space">
                          {openNotif ? (
                            <div></div>
                          ) : (
                            <div className="notif-read">
                              <p>{items.length}</p>
                            </div>
                          )}
                          <AiOutlineBell style={{ fontSize: "30px" }} />
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
          )}
          {show ? null : (
            <button
              className="xl:hidden lg:hidden md:flex sm:h-full sm:visible sm:items-center sm:opacity-100 xl:opacity-0 xl:cursor-none"
              onClick={showBar}
            >
              <FaBars />
            </button>
          )}
        </div>
      </div>
      <div className="text-brand-black w-full bg-brand-whiteLight ">
        {show ? (
          <div className="container">
            <div className="flex flex-col w-full h-fit py-5">
              <div className="flex w-full">
                {isLogin ? (
                  <div className="flex w-full justify-between items-start ">
                    <Prf />

                    <button
                      className="flex h-full visible opacity-100"
                      onClick={() => setShow(false)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <>
                    <AiOutlineUser style={{ fontSize: "20px" }} />
                    <a href="/login">Login</a>
                    <p>|</p>
                    <a href="/register">Sign up</a>
                  </>
                )}
              </div>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("review")}
                >
                  Review
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
