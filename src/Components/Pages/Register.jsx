import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRegister } from "../Feature/Models/AuthRegister";
import { unwrapResult } from "@reduxjs/toolkit";
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/zh-cn';
import axios from "axios";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const dateFormatList = ['DD/MM/YYYY'];
const customFormat: DatePickerProps['format'] = (value) =>
  `custom format: ${value.format(dateFormat)}`;

export const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordErrors, setIsPasswordErrors] = useState([]);

    const [registerDisplayName, setRegisterDisplayName] = useState(undefined);
    const [registerFirstName, setRegisterFirstName] = useState(undefined);
    const [registerLastname, setRegisterLastName] = useState(undefined);
    const [registerEmail, setRegisterEmail] = useState(undefined);
    const [registerPassword, setRegisterPassword] = useState(undefined);
    const [registerBirth, setRegisterBirth] = useState(undefined);
    const [registerGender, setRegisterGender] = useState(undefined);
    const [registerRole, setRegisterRole] = useState(undefined);

    const [postNotif, setPostNotif] = useState([])

   
 
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
                setIsPasswordErrors(errors)
                return false;
            }

            setIsPasswordErrors([])

            return true;
        }
        return true;
    }

    useEffect(() => {
        const emailRegexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (registerEmail) {
            setIsEmailValid(emailRegexp.test(registerEmail))
        }
    }, [registerEmail])

    useEffect(() => {
        const validate = validatePassword();
        setIsPasswordValid(validate);
    }, [registerPassword])

    const registerHandler = async () => {
        if (!registerFirstName) {
            alert("Harus ada first name")
            return;
        }
        if (!registerLastname) {
            alert("Harus ada last name")
            return;
        }
        if (!isEmailValid || !registerEmail) {
            alert("Email Tidak Valid")
            return;
        }
        if (!isPasswordValid || !registerPassword) {
            alert("Password Tidak Valid")
            return;
        }
        if (!registerBirth) {
            alert("Harus ada tanggal lahir")
            return;
        }
        if (!registerGender) {
            alert("Harus ada gender")
            return;
        }

        const resultsActions = await dispatch(getRegister({
            displayName: registerDisplayName,
            email: registerEmail,
            password: registerPassword,
            firstname: registerFirstName,
            lastname: registerLastname,
            birthday: registerBirth,
            gender: registerGender,
            role: registerRole,
        }))

        const results = unwrapResult(resultsActions);

        if (results && results.token) {
            const handlePostNotif = async (e) => {
                try {
                  const res = await axios.post(
                    `https://bej-ticketing-production.up.railway.app/api/notification/create`,{
                        user:localStorage.getItem("idUser"),
                        title:"Login",
                        message:"Selamat anda telah menjadi anggota kami, silahkan pesan penerbangan dengan harga terbaik",
                        category:"PRIA"
                    }
                  );
                  setPostNotif(res.data);
                } catch (error) {
                  console.error(error);
                }
              };
            //   useEffect(()=>{
            //     handlePostNotif()
            //   },[])
            navigate("/")
        }
        
    }

    // ketika user login tidak bisa ke halaman login lagi
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/")
        }
    }, [navigate])

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
                                    <input onChange={(event) => { setRegisterDisplayName(event.target.value) }} type="text" placeholder="DisplayName" />
                                    <span className="material-symbols-outlined">
                                        <UserOutlined style={{ color: '#F2EFEA' }} />
                                    </span>
                                </div>
                                <div className="textbox ">
                                    <input onChange={(event) => { setRegisterFirstName(event.target.value) }} type="text" placeholder="FirstName" />
                                    <span className="material-symbols-outlined">
                                        <UserOutlined style={{ color: '#F2EFEA' }} />
                                    </span>
                                </div>
                                <div className="textbox ">
                                    <input onChange={(event) => { setRegisterLastName(event.target.value) }} type="text" placeholder="LastName" />
                                    <span className="material-symbols-outlined">
                                        <UserOutlined style={{ color: '#F2EFEA' }} />
                                    </span>
                                </div>
                                <div className="textbox ">
                                    <input onChange={(event) => { setRegisterEmail(event.target.value) }} type="email" placeholder="Email" />
                                    <span className="material-symbols-outlined">
                                        <MailOutlined style={{ color: '#F2EFEA' }} />
                                    </span>
                                </div>
                                {
                                    !isEmailValid ? (
                                        <span className="text-red-500">
                                            email tidak valid
                                        </span>
                                    ) : <></>
                                }
                            </div>
                            <div className="block w-full">
                                <div className="textbox">
                                    <input onChange={(event) => { setRegisterPassword(event.target.value) }} type="password" placeholder="Password" />
                                    <span className="material-symbols-outlined">
                                        <LockOutlined style={{ color: '#F2EFEA' }} />
                                    </span>
                                </div>
                                {
                                    !isPasswordValid ?
                                        passwordErrors.map((value, index) => (
                                            <div key={`errors_${index}`}>
                                                <span className="text-red-500">
                                                    {value}
                                                </span>
                                            </div>
                                        ))
                                        : <></>
                                }
                            </div>
                            <div className="textbox ">
                                <input onChange={(event) => { setRegisterBirth(event.target.value) }} type="date" placeholder="Date of Birth" />
                                <span className="material-symbols-outlined">
                                    <CalendarOutlined style={{ color: '#F2EFEA' }} />
                                </span>
                            </div>
                            <div className="textbox ">
                                <input onChange={(event) => { setRegisterRole(event.target.value) }} type="text" placeholder="Role" />
                                <span className="material-symbols-outlined">
                                    <CalendarOutlined style={{ color: '#F2EFEA' }} />
                                </span>
                            </div>
                            <div className="textbox-select">
                                <select onChange={(event) => (setRegisterGender(event.target.value))} type="text">
                                    <option selected>Gender</option>
                                    <option value="PEREMPUAN">PEREMPUAN</option>
                                    <option value="PRIA">PRIA</option>
                                </select>
                                <span className="material-symbols-outlined">
                                    <UserOutlined style={{ color: '#F2EFEA' }} />
                                </span>
                            </div>
                            <button onClick={() => { registerHandler() }} type="submit">SIGN UP</button>
                        </div>
                    </div>
                    <div className="register-container-right">
                        <div className="block w-full">
                            <div className="register-account">
                                <div className="register-account-tittle">
                                    <h1>Have account</h1>
                                </div>
                                <div className="register-account-desc">
                                    <p>Manage your bookings and receive our latest news and offers just for you</p>
                                </div>
                                <a href="/login" type="button">Login</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}