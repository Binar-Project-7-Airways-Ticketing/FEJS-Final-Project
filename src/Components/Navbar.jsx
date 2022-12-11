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
          <div className="flex justify-start h-16 ">
            <img
              onClick={() => navigate("/")}
              className="flex cursor-pointer xl:w-36 md:w-44 "
              src={logo}
            ></img>
          </div>
          {show ? (
            <div className="flex w-full justify-end items-center gap-4 text-brand-whiteLight">
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
                <FaTimes
                  size={33.5}
                  className="flex w-fit items-center"
                  onClick={srchClose}
                />
              ) : (
                <BsSearch
                  size={20}
                  className="flex w-fit items-center"
                  onClick={srch}
                />
              )}

              {isLogin ? (
                <>
                  <div className="notif">
                    <Dropdown
                      onMouseEnter={() => setOpenNotif(true)}
                      placement="bottom"
                      arrow
                      menu={{ items }}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="space">
                          <div className="relative">
                            <AiOutlineBell size={30} />
                            {openNotif ? null : (
                              <div className="text-brand-whiteLight bg-brand-yellow rounded-full absolute top-0 w-5 h-5 text-center">
                                <p>{items.length}</p>
                              </div>
                            )}
                          </div>
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                  <Prf />
                </>
              ) : (
                <div className="flex w-fit h-14 items-center text-brand-whiteLight relative">
                  <div className="border-solid border-2 bg-brand-black text-brand-whiteLight border-brand-whiteLight w-12 h-12 rounded-full flex items-center absolute justify-center ">
                    <AiOutlineUser size={25} />
                  </div>
                  <div className="flex gap-1 h-7 bg-brand-whiteLight text-brand-black items-center px-3 rounded-md w-40 justify-end ml-2">
                    <a className="text-sm" href="/login">
                      Login
                    </a>
                    <p>|</p>
                    <a className="text-sm" href="/register">
                      Sign up
                    </a>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div
              ref={navRef}
              className="nav-respon flex w-full items-center justify-center"
            >
              <ul className="flex w-full justify-start text-brand-whiteLight">
                <li className="hover:bg-brand-whiteLight hover:text-brand-black w-fit py-1 px-4 rounded-md">
                  Home
                </li>
                <li className="hover:bg-brand-whiteLight hover:text-brand-black w-fit py-1 px-4 rounded-md">
                  About Us
                </li>
                <li
                  className="hover:bg-brand-whiteLight hover:text-brand-black w-fit py-1 px-4 rounded-md cursor-pointer"
                  onClick={() => navigate("review")}
                >
                  Review
                </li>
              </ul>

              <div className="flex items-center justify-end w-full gap-3.5">
                {search ? (
                  <Input
                    className="w-full"
                    placeholder="Search Cities or Countries"
                  />
                ) : (
                  <Input
                    className="hidden"
                    placeholder="Search Cities or Countries"
                  />
                )}
                {search ? (
                  <FaTimes
                    size={20}
                    className="flex items-center"
                    onClick={srchClose}
                  />
                ) : (
                  <BsSearch
                    size={20}
                    className="flex items-center"
                    onClick={srch}
                  />
                )}

                <div className="flex items-center cursor-pointer w-fit">
                  {isLogin ? (
                    <Dropdown
                      onMouseEnter={() => setOpenNotif(true)}
                      placement="bottom"
                      arrow
                      menu={{ items }}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="space">
                          <div className="relative">
                            <AiOutlineBell size={30} />
                            {openNotif ? null : (
                              <div className="text-brand-whiteLight bg-brand-yellow rounded-full absolute top-0 w-5 h-5 text-center">
                                <p>{items.length}</p>
                              </div>
                            )}
                          </div>
                        </Space>
                      </a>
                    </Dropdown>
                  ) : null}
                </div>
                <div className="user">
                  {isLogin ? (
                    <Prf />
                  ) : (
                    <>
                      <div className="flex w-fit h-14 items-center text-brand-whiteLight relative">
                        <div className="border-solid border-2 bg-brand-black text-brand-whiteLight border-brand-whiteLight w-12 h-12 rounded-full flex items-center absolute justify-center ">
                          <AiOutlineUser size={25} />
                        </div>
                        <div className="flex gap-1 h-7 bg-brand-whiteLight text-brand-black items-center px-3 rounded-md w-40 justify-end ml-2">
                          <a className="text-sm" href="/login">
                            Login
                          </a>
                          <p>|</p>
                          <a className="text-sm" href="/register">
                            Sign up
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {show ? null : (
            <button
              className="xl:hidden lg:hidden md:flex sm:h-full sm:visible sm:items-center sm:opacity-100 xl:opacity-0 xl:cursor-none"
              onClick={() => setShow(true)}
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
              <div className="flex flex-col w-full">
                {isLogin ? (
                  <div className="flex w-full justify-between">
                    <ul className="flex flex-col gap-1">
                      <li className="hover:bg-brand-black hover:text-brand-whiteLight w-fit py-1 px-4 rounded-md">
                        Home
                      </li>
                      <li className="hover:bg-brand-black hover:text-brand-whiteLight w-fit py-1 px-4 rounded-md">
                        About Us
                      </li>
                      <li
                        className="hover:bg-brand-black hover:text-brand-whiteLight w-fit py-1 px-4 rounded-md cursor-pointer"
                        onClick={() => navigate("review")}
                      >
                        Review
                      </li>
                    </ul>
                    <button
                      className="flex h-full visible opacity-100"
                      onClick={() => setShow(false)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <div className="flex w-full justify-between">
                    <ul className="flex flex-col gap-1">
                      <li className="hover:bg-brand-black hover:text-brand-whiteLight w-fit py-1 px-4 rounded-md">
                        Home
                      </li>
                      <li className="hover:bg-brand-black hover:text-brand-whiteLight w-fit py-1 px-4 rounded-md">
                        About Us
                      </li>
                      <li
                        className="hover:bg-brand-black hover:text-brand-whiteLight w-fit py-1 px-4 rounded-md cursor-pointer"
                        onClick={() => navigate("review")}
                      >
                        Review
                      </li>
                    </ul>
                    <button
                      className="flex h-full visible opacity-100"
                      onClick={() => setShow(false)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
