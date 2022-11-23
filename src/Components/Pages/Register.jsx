import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons';
import Navbar from "../Navbar";
import Footer from "../Footer";

export const Register = () => {

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

    function registerHandler() {
        if (!isEmailValid || !registerEmail) {
            alert("Email Tidak Valid")
            return;
        }
        if (!isPasswordValid || !registerPassword) {
            alert("Password Tidak Valid")
            return;
        }
    }

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
                                    <input type="text" placeholder="FirstName" />
                                    <span className="material-symbols-outlined">
                                        <UserOutlined />
                                    </span>
                                </div>
                                <div className="textbox ">
                                    <input type="text" placeholder="LastName" />
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
                                <input type="date" placeholder="Date of Birth" />
                                <span className="material-symbols-outlined">
                                    <CalendarOutlined />
                                </span>
                            </div>
                            <div className="textbox ">
                                <input type="text" placeholder="Gender" />
                                <span className="material-symbols-outlined">
                                    <UserOutlined />
                                </span>
                            </div>
                            <button onClick={() => { registerHandler() }} type="submit">SIGN UP</button>
                        </div>
                    </div>
                    <div className="register-container-right">

                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}