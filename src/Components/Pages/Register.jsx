import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRegister } from "../Feature/Models/AuthRegister";
import { unwrapResult } from "@reduxjs/toolkit";

export const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordErrors, setIsPasswordErrors] = useState([]);

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
            email: registerEmail,
            password: registerPassword,
            firstname: registerFirstName,
            lastname: registerLastname,
            birth: registerBirth,
            gender: registerGender,
            role: "buyer",
        }))

        const results = unwrapResult(resultsActions);

        if (results && results.accessToken) {
            navigate("/")
        }
    }

    // ketika user login tidak bisa ke halaman login lagi
    useEffect(() => {
        if (localStorage.getItem("auth")) {
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
                                    <input onChange={(event) => { setRegisterFirstName(event.target.value) }} type="text" placeholder="FirstName" />
                                    <span className="material-symbols-outlined">
                                        <UserOutlined />
                                    </span>
                                </div>
                                <div className="textbox ">
                                    <input onChange={(event) => { setRegisterLastName(event.target.value) }} type="text" placeholder="LastName" />
                                    <span className="material-symbols-outlined">
                                        <UserOutlined />
                                    </span>
                                </div>
                                <div className="textbox ">
                                    <input onChange={(event) => { setRegisterEmail(event.target.value) }} type="email" placeholder="Email" />
                                    <span className="material-symbols-outlined">
                                        <MailOutlined />
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
                                        <LockOutlined />
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
                                    <CalendarOutlined />
                                </span>
                            </div>
                            <div className="textbox ">
                                <input onChange={(event) => (setRegisterGender(event.target.value))} type="text" placeholder="Gender" />
                                <span className="material-symbols-outlined">
                                    <UserOutlined />
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