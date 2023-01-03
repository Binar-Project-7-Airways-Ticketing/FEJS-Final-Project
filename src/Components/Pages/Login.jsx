import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../Feature/Models/AuthLogin";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { loadNotif } from "../Feature/Models/Notification";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordErrors, setIsPasswordErrors] = useState([]);
    const [loginEmail, setLoginEmail] = useState(undefined);
    const [loginPassword, setLoginPassword] = useState(undefined);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function validatePassword() {
        const errors = [];
        const p = loginPassword;

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

    const loginHandler = async () => {
        if (!isEmailValid || !loginEmail) {
            alert("Email Tidak Valid");
            return;
        }
        if (!isPasswordValid || !loginPassword) {
            alert("Password Tidak Valid");
            return;
        }

        const resultsActions = await dispatch(getLogin({
            email: loginEmail,
            password: loginPassword,
        }))


        const results = unwrapResult(resultsActions);

      dispatch(loadNotif(results.id));
        if (results && results.token) {
            if (results.token) {
                dispatch(loadNotif(localStorage.getItem("id")));
                navigate("/")
            }
        };
    };

    // ketika user login tidak bisa ke halaman login lagi
    useEffect(() => {
        const emailRegexp =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (loginEmail) {
            setIsEmailValid(emailRegexp.test(loginEmail));
        }

        const validate = validatePassword();
        setIsPasswordValid(validate);

        if (localStorage.getItem("auth")) {
            navigate("/")
        }
    }, [loginEmail, loginPassword, navigate]);

    return (
        <React.Fragment>
            <Navbar />
            <main className="login-page">
                <section className="login-container">
                    <div className="login-container-left">
                        <div className="login-form">
                            <div className="login-form-tittle">
                                <h1>Sign In</h1>
                            </div>
                            <div className="block w-full">
                                <div className="textbox ">
                                    <input onChange={(event) => { setLoginEmail(event.target.value) }} type="email" placeholder="Email" />
                                    <span className="material-symbols-outlined">
                                        <UserOutlined style={{ color: '#F2EFEA' }} />
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
                                    <span className="material-symbols-outlined">
                                        <LockOutlined style={{ color: '#F2EFEA' }} />
                                    </span>
                                    <input onChange={(event) => { setLoginPassword(event.target.value) }} type={isPasswordVisible ? "text" : "password"} placeholder="Password" />
                                    <div onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} className="material-symbols-outlined cursor-pointer absolute top-[50%] right-[64px] translate-x-0 translate-y-[-50%]">

                                        {
                                            isPasswordVisible ?
                                                <>
                                                    <EyeInvisibleOutlined style={{ color: '#F2EFEA' }} />
                                                </>
                                                :
                                                <>
                                                    <EyeOutlined style={{ color: '#F2EFEA' }} />
                                                </>
                                        }
                                    </div>
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
                            <button data-testId="test-button" onClick={() => { loginHandler() }} type="submit">LOGIN</button>
                            <a href="#">
                                Forgot your credentials?
                            </a>
                            
                        </div>
                    </div>
                    <div className="login-container-right">
                        <div className="login-account">
                            <div className="login-account-tittle">
                                <h1>Don't have an account yet ?</h1>
                            </div>
                            <div className="login-account-desc">
                                <p>Manage your bookings and receive our latest news and offers just for you</p>
                            </div>
                            <a href="/register" type="button">Create a new account</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    );
};
