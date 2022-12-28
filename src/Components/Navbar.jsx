import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Space, Input, Modal } from "antd";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../image/logo5.png";
import Prf from "./Reusable/Prf";
import "./All.css";
import { useDispatch, useSelector } from "react-redux";
import ModalNotif from "./ModalNotif";

export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const [show, setShow] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idNotif, setIdNotif] = useState({});
  const showModal = (e) => {
    setIdNotif(e);
    setIsModalOpen(true);
    console.log(e);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notif } = useSelector((state) => state.notif);
  // console.log(notif);
  const srch = () => {
    setSearch(true);
  };
  const srchClose = () => {
    setSearch(false);
  };

  const items = notif.map((item) => ({
    key: item.idNotification,
    label: (
      <div onClick={() => showModal(item.idNotification)}>{item.title}</div>
    ),
  }));

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [setIsLogin, dispatch]);

  return (
    <nav>
      <div className="container">
        <div className="flex items-center justify-between h-fit w-full transition gap-1 py-2 text-brand-whiteLight relative">
          <div className="flex lg:w-48 sm:w-60 justify-start h-16 ">
            <img
              onClick={() => navigate("/")}
              className="flex cursor-pointer "
              src={logo}
            ></img>
          </div>
          {showMobile ? (
            <div className="flex w-full justify-end items-center gap-4 text-brand-whiteLight">
              {search ? (
                <Input
                  className="md:w-full sm:w-full"
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
                  size={20}
                  className="flex w-fit items-center"
                  onClick={srchClose}
                />
              ) : (
                <BsSearch
                  size={20}
                  className="flex w-fit h-full items-center"
                  onClick={srch}
                />
              )}

              {isLogin ? (
                <>
                  <div className="flex justify-center pt-1 relative w-fit cursor-pointer items-center">
                    <Dropdown
                      onMouseEnter={() => setOpenNotif(true)}
                      placement="bottomLeft"
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
                </>
              ) : null}
            </div>
          ) : null}
          {show ? (
            <div className="flex w-full justify-end items-center gap-2 text-brand-whiteLight">
              {search ? (
                <Input
                  className="lg:w-1/2 md:w-3/4"
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
                  size={20}
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
                  <div className="flex justify-center pt-1 relative w-fit cursor-pointer items-center">
                    <Dropdown
                      onMouseEnter={() => setOpenNotif(true)}
                      placement="bottomLeft"
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

                  <Prf place={"bottomRight"} />
                </>
              ) : (
                <div className="flex w-fit h-14 items-center text-brand-whiteLight relative">
                  <div className="border-solid border-2 bg-brand-black text-brand-whiteLight border-brand-whiteLight w-12 h-12 rounded-full flex items-center absolute justify-center ">
                    <AiOutlineUser size={25} />
                  </div>
                  <div className="flex gap-1 h-7 bg-brand-whiteLight text-brand-black items-center px-3 rounded-md w-40 justify-end ml-2">
                    <Link>
                      <a className="text-sm" to={"/login"}>
                        Login
                      </a>
                    </Link>

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
              className="nav-respon lg:flex w-full items-center justify-center md:hidden sm:hidden"
            >
              <ul className="flex w-1/2 justify-start text-brand-whiteLight">
                <li
                  onClick={() => navigate("/")}
                  className="hover:bg-brand-whiteLight hover:text-brand-black w-fit py-1 px-4 rounded-md cursor-pointer"
                >
                  Home
                </li>
                <li className="hover:bg-brand-whiteLight hover:text-brand-black w-fit py-1 px-4 rounded-md">
                  About Us
                </li>
                {/* <li
                  className="hover:bg-brand-whiteLight hover:text-brand-black w-fit py-1 px-4 rounded-md cursor-pointer"
                  onClick={() => navigate("review")}
                >
                  Review
                </li> */}
              </ul>

              <div className="flex items-center justify-end w-full gap-3.5">
                {search ? (
                  <Input
                    className="lg:w-4/5 "
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
                    className="flex items-center cursor-pointer"
                    onClick={srchClose}
                  />
                ) : (
                  <BsSearch
                    size={20}
                    className="flex items-center cursor-pointer"
                    onClick={srch}
                  />
                )}

                <div className="flex items-center cursor-pointer w-fit">
                  {isLogin ? (
                    <Dropdown
                      onMouseEnter={() => setOpenNotif(true)}
                      placement="bottomRight"
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
                    <Prf place="bottom" />
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
            <>
              <button
                className="xl:hidden lg:hidden xl:opacity-0 xl:cursor-none sm:hidden md:flex md:w-full md:h-full md:justify-end items-center "
                onClick={() => setShow(true)}
              >
                <FaBars size={25} />
              </button>
              {showMobile ? null : (
                <button
                  className="xl:hidden lg:hidden md:hidden sm:flex sm:h-full sm:w-full sm:justify-end items-center sm:visible sm:items-center sm:opacity-100 xl:opacity-0 xl:cursor-none"
                  onClick={() => setShowMobile(true)}
                >
                  <FaBars size={25} />
                </button>
              )}
            </>
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
        {showMobile ? (
          <div className="container">
            <div className="flex flex-col w-full h-fit py-5">
              <div className="flex flex-col w-full">
                {isLogin ? (
                  <div className="flex w-full justify-between">
                    <ul className="flex flex-col gap-1">
                      <div className="px-4">
                        <Prf place="bottomRight" />
                      </div>
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
                      onClick={() => setShowMobile(false)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <div className="flex w-full justify-between">
                    <ul className="flex flex-col gap-1">
                      <div className="flex w-fit h-14 items-center text-brand-whiteLight relative">
                        <div className="border-solid border-2 bg-brand-whiteLight text-brand-black border-brand-black w-12 h-12 rounded-full flex items-center absolute justify-center ">
                          <AiOutlineUser size={25} />
                        </div>
                        <div className="flex gap-1 h-7 bg-brand-black text-brand-whiteLight items-center px-3 rounded-md w-40 justify-end ml-2">
                          <a className="text-sm" href="/login">
                            Login
                          </a>
                          <p>|</p>
                          <a className="text-sm" href="/register">
                            Sign up
                          </a>
                        </div>
                      </div>
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
                      onClick={() => setShowMobile(false)}
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

      {notif
        .filter((item) => item.idNotification === idNotif)
        .map((item) => (
          <ModalNotif
            title={item.title}
            message={item.message}
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
          />
        ))}
    </nav>
  );
}
