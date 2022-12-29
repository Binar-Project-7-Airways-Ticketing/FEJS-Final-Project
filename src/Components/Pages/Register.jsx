import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  CalendarOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRegister } from "../Feature/Models/AuthRegister";
import { unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/zh-cn";
import { createNotif } from "../Feature/Models/Notification";

dayjs.extend(customParseFormat);
const dateFormatList = ["MM/DD/YYYY", "MM/DD/YY"];

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{authRegister} = useSelector((state)=>state.authRegister)
  // console.log(authRegister.data.id);
  // const [id, setId] = useState({data:{
  //   id:""
  // }})
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrors, setIsPasswordErrors] = useState([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [registerDisplayName, setRegisterDisplayName] = useState(undefined);
  const [registerFirstName, setRegisterFirstName] = useState(undefined);
  const [registerLastname, setRegisterLastName] = useState(undefined);
  const [registerEmail, setRegisterEmail] = useState(undefined);
  const [registerPassword, setRegisterPassword] = useState(undefined);
  const [registerBirth, setRegisterBirth] = useState(undefined);
  const [registerGender, setRegisterGender] = useState(undefined);

  function validatePassword() {
    const errors = [];
    const p = registerPassword;

    if (p) {
      if (p.length === 0) {
        return true;
      }
      if (p.length < 8) {
        errors.push("Password Harus 8 Karakter");
      }
      if (p.search(/[A-Z]/) < 0) {
        errors.push("Password Harus Ada Huruf kapital");
      }
      if (p.search(/[a-z]/) < 0) {
        errors.push("Password Harus Ada Huruf");
      }
      if (p.search(/[0-9]/) < 0) {
        errors.push("Password Harus Memuat Angka");
      }
      if (errors.length > 0) {
        setIsPasswordErrors(errors);
        return false;
      }

      setIsPasswordErrors([]);

      return true;
    }
    return true;
  }

  useEffect(() => {
    const emailRegexp =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (registerEmail) {
      setIsEmailValid(emailRegexp.test(registerEmail));
    }
  }, [registerEmail]);

  useEffect(() => {
    const validate = validatePassword();
    setIsPasswordValid(validate);
  }, [registerPassword]);

  const registerHandler = async () => {
    if (!registerFirstName) {
      alert("Harus ada first name");
      return;
    }
    if (!registerLastname) {
      alert("Harus ada last name");
      return;
    }
    if (!isEmailValid || !registerEmail) {
      alert("Email Tidak Valid");
      return;
    }
    if (!isPasswordValid || !registerPassword) {
      alert("Password Tidak Valid");
      return;
    }
    if (!registerBirth) {
      alert("Harus ada tanggal lahir");
      return;
    }
    if (!registerGender) {
      alert("Harus ada gender");
      return;
    }

    const resultsActions = await dispatch(
      getRegister({
        displayName: registerDisplayName,
        email: registerEmail,
        password: registerPassword,
        firstname: registerFirstName,
        lastname: registerLastname,
        birthday: registerBirth,
        gender: registerGender,
      })
  
    );

    const results = unwrapResult(resultsActions);
    console.log(results);
    alert("REGISTER BERHASIL");
    let createNotifs = {
      user:results.id,
      title:"LOGIN",
      message: "Login Berhasil, silahkan pesan penerbangan yang sesuai dengan keinginan anda",
      category:"PRIA"
    }
    if (results && results.id) {
      let notif = {
        user: results.id,
        title: "LOGIN",
        message:
          "Login Berhasil, silahkan pesan penerbangan yang sesuai dengan keinginan anda",
        category: "",
      };
      dispatch(createNotif(notif));
      alert("REGISTER BERHASIL");
    }
  };

  // const coba=()=>{
  //   let createNotifs = {
  //     user:results.id,
  //     title:"LOGIN",
  //     message: "Login Berhasil, silahkan pesan penerbangan yang sesuai dengan keinginan anda",
  //     category:"PRIA"
  //   }
  // }

  // ketika user login tidak bisa ke halaman login lagi
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate, dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <main className="register-page">
        <section className="register-container">
          <div className="register-container-left">
            <div className="register-form">
              <div className="register-form-tittle">
                <h1>Sign Up</h1>
              </div>
              <div className="block w-full">
                <div className="textbox ">
                  <input
                    onChange={(event) => {
                      setRegisterDisplayName(event.target.value);
                    }}
                    type="text"
                    placeholder="DisplayName"
                  />
                  <span className="material-symbols-outlined">
                    <UserOutlined style={{ color: "#F2EFEA" }} />
                  </span>
                </div>
                <div className="textbox ">
                  <input
                    onChange={(event) => {
                      setRegisterFirstName(event.target.value);
                    }}
                    type="text"
                    placeholder="FirstName"
                  />
                  <span className="material-symbols-outlined">
                    <UserOutlined style={{ color: "#F2EFEA" }} />
                  </span>
                </div>
                <div className="textbox ">
                  <input
                    onChange={(event) => {
                      setRegisterLastName(event.target.value);
                    }}
                    type="text"
                    placeholder="LastName"
                  />
                  <span className="material-symbols-outlined">
                    <UserOutlined style={{ color: "#F2EFEA" }} />
                  </span>
                </div>
                <div className="textbox ">
                  <input
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                  />
                  <span className="material-symbols-outlined">
                    <MailOutlined style={{ color: "#F2EFEA" }} />
                  </span>
                </div>
                {!isEmailValid ? (
                  <span className="text-red-500">email tidak valid</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="block w-full">
                {/* <div className="textbox">
                                    <input onChange={(event) => { setRegisterPassword(event.target.value) }} type="password" placeholder="Password" />
                                    <span className="material-symbols-outlined">
                                        <LockOutlined style={{ color: '#F2EFEA' }} />
                                    </span>
                                </div> */}
                <div className="textbox">
                  <span className="material-symbols-outlined">
                    <LockOutlined style={{ color: "#F2EFEA" }} />
                  </span>
                  <input
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                  />
                  <div
                    onClick={() => {
                      setIsPasswordVisible(!isPasswordVisible);
                    }}
                    className="material-symbols-outlined cursor-pointer absolute top-[50%] right-[82px] translate-x-0 translate-y-[-50%]"
                  >
                    {isPasswordVisible ? (
                      <>
                        <EyeInvisibleOutlined style={{ color: "#F2EFEA" }} />
                      </>
                    ) : (
                      <>
                        <EyeOutlined style={{ color: "#F2EFEA" }} />
                      </>
                    )}
                  </div>
                </div>
                {!isPasswordValid ? (
                  passwordErrors.map((value, index) => (
                    <div key={`errors_${index}`}>
                      <span className="text-red-500">{value}</span>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="textbox">
                <input
                  onChange={(event) => {
                    setRegisterBirth(event.target.value);
                  }}
                  type="text"
                  placeholder="MM/DD/YY"
                />
                {/* <Space direction="vertical" size={20}>
                                    <DatePicker
                                        format={dateFormatList}
                                    />
                                </Space> */}
                {/* </input> */}
                <span className="material-symbols-outlined">
                  <CalendarOutlined style={{ color: "#F2EFEA" }} />
                </span>
                {/* <input > */}
                {/* <input onChange={(event) => { setRegisterBirth(event.target.value) }}> */}
                {/* <Space onChange={(event) => { setRegisterBirth(event.target.value) }} direction="vertical" size={20}>
                                    <DatePicker
                                        format={dateFormatList}
                                    />
                                </Space> */}
                {/* </input> */}
              </div>
              <div className="textbox-select">
                <select
                  onChange={(event) => setRegisterGender(event.target.value)}
                  type="text"
                >
                  {/* <option selected className="text-black">
                    Gender
                  </option> */}
                  <option selected className="text-black" value="PEREMPUAN">
                    PEREMPUAN
                  </option>
                  <option selected className="text-black" value="PRIA">
                    PRIA
                  </option>
                </select>
                <span className="material-symbols-outlined">
                  <UserOutlined style={{ color: "#F2EFEA" }} />
                </span>
              </div>
              <button
                onClick={() => {
                  registerHandler();
                }}
                type="submit"
              >
                SIGN UP
              </button>
            </div>
          </div>
          <div className="register-container-right">
            <div className="block w-full">
              <div className="register-account">
                <div className="register-account-tittle">
                  <h1>Have account</h1>
                </div>
                <div className="register-account-desc">
                  <p>
                    Manage your bookings and receive our latest news and offers
                    just for you
                  </p>
                </div>
                <a href="/login" type="button">
                  Login
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};