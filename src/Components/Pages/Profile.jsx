import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import CardHistory from "../CardHistory";
import axios from "axios";
import { authConfig } from "../Feature/Config";
import moment from "moment";

export const Profile = (setIsLogin) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrors, setIsPasswordErrors] = useState([]);

  const [histories, setHistories] = useState([]);
  const [user, setUser] = useState(Object);
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastname, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerBirth, setRegisterBirth] = useState("");
  const [registerGender, setRegisterGender] = useState("");
  const [registerProfilePhoto, setRegisterProfilePhoto] = useState("");
  const [update, setupdate] = useState(true);
  const navigate = useNavigate();

  let userId = localStorage.getItem("auth");
  userId = userId ? JSON.parse(userId).id : 1;

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

  // Update user profile
  const handleUpdateProfile = () => {
    axios
      .put(authConfig.baseUrl + "/api/user/update/" + userId, {
        firstName: registerFirstName,
        lastName: registerLastname,
        gender: registerGender,
        birthday: moment(registerBirth).format("DD-MM-YYYY"),
        email: registerEmail,
        password: registerPassword,
      })
      .then((response) => {
        window.location.reload();
      });
  };

  // Get data user
  const getUserIdentity = () => {
    axios.get(authConfig.baseUrl + "/api/user/" + userId).then((response) => {
      setRegisterFirstName(response.data.firstName);
      setRegisterEmail(response.data.email);
      setRegisterLastName(response.data.lastName);
      setRegisterGender(response.data.gender);
      setRegisterBirth(moment(response.data.birthday).format("YYYY-MM-DD"));
      setRegisterProfilePhoto(response.data.pictureUrl);
    });
  };

  // Get data history travel
  const getHistoryTravel = () => {
    axios.get(authConfig.baseUrl + "/api/history").then((response) => {
      setHistories(response.data.payload);
      console.log(response.data);
    });
  };

  // upload image
  const uploadImage = (e) => {
    let data = new FormData();
    const file = e.target.files[0];

    setRegisterProfilePhoto(URL.createObjectURL(file));

    data.append("image", file);
    axios
      .post(authConfig.baseUrl + "/api/user/upload/" + userId, data)
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getHistoryTravel();
    getUserIdentity();
  }, []);

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
                  <input
                    type="text"
                    onChange={(event) => {
                      setRegisterFirstName(event.target.value);
                    }}
                    placeholder="FirstName"
                    value={registerFirstName}
                  />
                  <span className="material-symbols-outlined">
                    <UserOutlined />
                  </span>
                </div>
                <div className="textbox ">
                  <input
                    type="text"
                    onChange={(event) => {
                      setRegisterLastName(event.target.value);
                    }}
                    placeholder="LastName"
                    value={registerLastname}
                  />
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
                    value={registerEmail}
                  />
                  <span className="material-symbols-outlined">
                    <MailOutlined />
                  </span>
                </div>
                {!isEmailValid ? (
                  <span className="text-red-500">email tidak valid</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="block w-full">
                <div className="textbox">
                  <input
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                    value={registerPassword}
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
                <input
                  type="date"
                  onChange={(event) => setRegisterBirth(event.target.value)}
                  placeholder="Date of Birth"
                  value={registerBirth}
                />
                <span className="material-symbols-outlined">
                  <CalendarOutlined />
                </span>
              </div>

              <div className="textbox-select ">
                <select
                  onChange={(event) => setRegisterGender(event.target.value)}
                  type="text"
                >
                  <option selected>Gender</option>
                  {registerGender === "WANITA" ? (
                    <option selected className="text-black" value="Wanita">
                      Wanita
                    </option>
                  ) : (
                    <option className="text-black" value="Pria">
                      Wanita
                    </option>
                  )}
                  {registerGender === "PRIA" ? (
                    <option selected className="text-black" value="Wanita">
                      Pria
                    </option>
                  ) : (
                    <option className="text-black" value="Pria">
                      Pria
                    </option>
                  )}
                </select>
                <span className="material-symbols-outlined">
                  <UserOutlined />
                </span>
              </div>
              <button
                onClick={() => {
                  handleUpdateProfile();
                }}
              >
                Update
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
                        src={registerProfilePhoto}
                        alt="Current profile photo"
                      />
                    </div>
                    <label class="block">
                      <span class="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        onChange={(e) => {
                          uploadImage(e);
                        }}
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

      <Card style={{ backgroundColor: "#3f4444", width: "100%" }}>
        <CardHistory />
      </Card>
      <Footer />
    </React.Fragment>
  );
};
export default Profile;
