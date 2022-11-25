import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, MailOutlined, CalendarOutlined } from "@ant-design/icons";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export const Profile = (setIsLogin) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrors, setIsPasswordErrors] = useState([]);

  const [registerFirstName, setRegisterFirstName] = useState(undefined);
  const [registerLastname, setRegisterLastName] = useState(undefined);
  const [registerEmail, setRegisterEmail] = useState(undefined);
  const [registerPassword, setRegisterPassword] = useState(undefined);
  const [registerBirth, setRegisterBirth] = useState(undefined);
  const [registerGender, setRegisterGender] = useState(undefined);

  const navigate = useNavigate()

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
    const emailRegexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (registerEmail) {
      setIsEmailValid(emailRegexp.test(registerEmail));
    }
  }, [registerEmail]);

  useEffect(() => {
    const validate = validatePassword();
    setIsPasswordValid(validate);
  }, [registerPassword]);

  function registerHandler() {
    if (!isEmailValid || !registerEmail) {
      alert("Email Tidak Valid");
      return;
    }
    if (!isPasswordValid || !registerPassword) {
      alert("Password Tidak Valid");
      return;
    }
  }
  const logOutHandler = () => {
    localStorage.removeItem("auth");
    navigate('/')
    return setIsLogin(false);
  };
  return (
    <React.Fragment>
      <Navbar />
      <main className="register-page">
        <section className="register-container">
          <div className="register-container-left">
            <div className="register-form">
              <div className="register-form-tittle">
                <h1>Update Profile</h1>
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
                  <input
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                  />
                  <span className="material-symbols-outlined">
                    <MailOutlined />
                  </span>
                </div>
                {!isEmailValid ? <span className="text-red-500">email tidak valid</span> : <></>}
              </div>
              <div className="block w-full">
                <div className="textbox">
                  <input
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                    type="password"
                    placeholder="Password"
                  />
                  <span className="material-symbols-outlined">
                    <LockOutlined />
                  </span>
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
              <button
                onClick={() => {
                  registerHandler();
                }}
                type="submit"
              >
                Update
              </button>
              <button
                 onClick={() => {
                      logOutHandler();
                    }}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="register-container-right">
            <div className="block w-full">
              <div className="register-account">
                <div className="register-account-tittle">
                  <h1 class="mb-24">Profile Page</h1>
                </div>
                <div className="register-account-desc">
                  <form className="block " action="">
                    <div class="shrink-0 ml-24 mb-24">
                      <img
                        class="h-16 w-16 object-cover rounded-full"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                        alt="Current profile photo"
                      />
                    </div>
                    <label class="block">
                      <span class="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                      />
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};
export default Profile;
