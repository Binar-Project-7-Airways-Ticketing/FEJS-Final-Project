import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Navbar from "../Navbar";
import Footer from "../Footer";

export const Login = () => {

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordErrors, setIsPasswordErrors] = useState([]);
    const [loginEmail, setLoginEmail] = useState(undefined);
    const [loginPassword, setLoginPassword] = useState(undefined);

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
        if (loginEmail) {
            setIsEmailValid(emailRegexp.test(loginEmail))
        }
    }, [loginEmail])

    useEffect(() => {
        const validate = validatePassword();
        setIsPasswordValid(validate);
    }, [loginPassword])

    function loginHandler() {
        if (!isEmailValid || !loginEmail) {
            alert("Email Tidak Valid")
            return ;
        }
        if (!isPasswordValid || !loginPassword) {
            alert("Password Tidak Valid")
            return ;
        }
    }

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
                                        <UserOutlined />
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
                                    <input onChange={(event) => { setLoginPassword(event.target.value) }} type="password" placeholder="Password" />
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
                            <button onClick={() => {loginHandler()}} type="submit">LOGIN</button>
                            <a href="#">
                                Forgot your credentials?
                            </a>
                            <button type="submit">LOGIN With GOOGLE</button>
                        </div>
                    </div>
                    <div className="login-container-right"></div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}