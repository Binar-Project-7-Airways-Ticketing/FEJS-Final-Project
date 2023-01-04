import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, MailOutlined, CalendarOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import axios from "axios";
import { authConfig } from "../Feature/Config";
import moment from "moment";
import Histories from "../Histories";

export const Profile = (setIsLogin) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrors, setIsPasswordErrors] = useState([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [histories, setHistories] = useState([]);
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastname, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerBirth, setRegisterBirth] = useState("");
  const [registerGender, setRegisterGender] = useState("");
  const [registerProfilePhoto, setRegisterProfilePhoto] = useState("");
  const navigate = useNavigate();
  const [changePass, setChangePass] = useState(false);

  const token = localStorage.getItem("token");

  const changePassword = () => {
    setChangePass(true);
  };

  const changeData = () => {
    setChangePass(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  let userId = localStorage.getItem("id");
  // userId = userId ? JSON.parse(userId).id : 1;

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

 

  // Update user profile
  const handleUpdateProfile = () => {
    const data = {
      firstName: registerFirstName,
      lastName: registerLastname,
      displayName: registerFirstName,
      gender: registerGender,
      birthday: moment(registerBirth).format("MM/DD/YYYY"),
      email: registerEmail,
    };

    axios
      .put(authConfig.baseUrl + "/api/user/update/" + userId, data)
      .then((response) => {
        alert("BERHASIL UPDATE");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePassword = () => {
    const password = {
      pass: registerPassword,
    };
    if (!registerPassword) {
      alert("Password Tidak Boleh Kosong");
    } else {
      axios
        .put(authConfig.baseUrl + "/api/user/update/password/" + userId, password)
        .then((response) => {
          alert("BERHASIL UPDATE");
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
    axios
      .get(authConfig.baseUrl + "/api/history/user/" + userId, {
        // userid atas diganti 40
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((response) => {
        setHistories([response.data.payload]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // upload image
  const uploadImage = (e) => {
    let data = new FormData();
    const file = e.target.files[0];

    setRegisterProfilePhoto(URL.createObjectURL(file));

    data.append("image", file);
    axios.post(authConfig.baseUrl + "/api/user/upload/" + userId, data).then((response) => {});
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
              {!changePass && (
                <>
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
                        <UserOutlined style={{ color: '#F2EFEA' }} />
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
                        <UserOutlined style={{ color: '#F2EFEA' }} />
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
                        <MailOutlined style={{ color: '#F2EFEA' }} />
                      </span>
                    </div>
                    {!isEmailValid ? <span className="text-red-500">email tidak valid</span> : <></>}
                  </div>

                  <div className="textbox ">
                    <input type="date" onChange={(event) => setRegisterBirth(event.target.value)} placeholder="Date of Birth" value={registerBirth} />
                    <span className="material-symbols-outlined">
                      <CalendarOutlined style={{ color: '#F2EFEA' }} />
                    </span>
                  </div>

                  <div className="textbox-select ">
                    <select onChange={(event) => setRegisterGender(event.target.value)} type="text">
                      {/* <option selected className="text-black">
                    Gender
                  </option> */}

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
                      <UserOutlined style={{ color: '#F2EFEA' }} />
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleUpdateProfile();
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      changePassword();
                    }}
                  >
                    Change Password
                  </button>
                </>
              )}

              {changePass && (
                <>
                  <div className="block w-full">
                    <div className="textbox">
                      <span className="material-symbols-outlined">
                        <LockOutlined style={{ color: "#000000" }} />
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
                  <button
                    onClick={() => {
                      handlePassword();
                    }}
                  >
                    Update Password
                  </button>
                  <button
                    onClick={() => {
                      changeData();
                    }}
                  >
                    Back
                  </button>
                </>
              )}
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
                      <img class="h-16 w-16 object-cover rounded-full" src={registerProfilePhoto} alt="Current profile photo" />
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
        <Histories histories={histories} />
      </Card>
      <Footer />
    </React.Fragment>
  );
};
export default Profile;
