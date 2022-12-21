import React, { useState, useMemo } from "react";
import {
  ContactsOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
  ArrowRightOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Button, Empty, Modal } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Countdown from "react-countdown";
import Select from "react-select";
import countryList from "react-select-country-list";
import logo from "../logo.png";
import bri from "../image/bri.jpg";
import bca from "../image/bca.jpg";
import mandiri from "../image/mandiri.jpg";
import bni from "../image/bni.jpg";
import ovo from "../image/ovo.jpg";
import danaa from "../image/dana.jpg";
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ModalSeat from "./Bookking/ModalSeat";
import { loadLuggages } from "./Feature/Models/LuggageSlice";
import { } from "./Feature/Models/PaymentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ButtonFindFlight from "./Reusable/ButtonFindFlight";
import { loadUser } from "./Feature/Models/GetUser";

import { unwrapResult } from "@reduxjs/toolkit";
import { createPassenger } from "./Feature/Models/CreatePassenger";
import ComponentFormTransaction from "./ComponentFormTransaction";
import { createCategories } from "./Feature/Models/CreateCategory";
import { loadPrice } from "./Feature/Models/GetPrice";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {hours}
        </span>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {minutes}
        </span>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {seconds}
        </span>
      </>
    );
  }
};

export default function TransactionEconomy() {
  const { luggages } = useSelector((state) => state.luggage);
  const { payment } = useSelector((state) => state.payment);
  const { user } = useSelector((state) => state.getUser);
  const {Price} = useSelector((state)=> state.getPrice )

  const navigate = useNavigate();

  const [bagasi, setBagasi] = useState("");

  const [passenger, setPassenger] = useState("");
  const [countPassenger, setCountPassenger] = useState("");
  const [classFlight, setClassFlight]= useState("")
  const [departFl, setDepart] = useState([]);
  const [token, setToken] = useState(false);
  const [returnFl, setReturn] = useState([]);

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [createTitle, setCreateTitle] = useState(undefined);
  const [createGender, setCreateGender] = useState(undefined);
  const [createCategory, setCreateCategory] = useState(undefined);
  const [createFirstName, setCreateFirstName] = useState(undefined);
  const [createLastname, setCreateLastName] = useState(undefined);
  const [createBirth, setCreateBirth] = useState(undefined);
  const [createContactNumber, setCreateContactNumber] = useState(undefined);
  const [createNationality, setCreateNationality] = useState(undefined);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");

  const options1 = useMemo(() => countryList().getData(), []);
  const options2 = useMemo(() => countryList().getData(), []);
  const options3 = useMemo(() => countryList().getData(), []);
  const options4 = useMemo(() => countryList().getData(), []);
  const options5 = useMemo(() => countryList().getData(), []);
  const options6 = useMemo(() => countryList().getData(), []);
  const options7 = useMemo(() => countryList().getData(), []);

  const [createTitle1, setCreateTitle1] = useState(undefined);
  const [createTitle2, setCreateTitle2] = useState(undefined);
  const [createTitle3, setCreateTitle3] = useState(undefined);
  const [createTitle4, setCreateTitle4] = useState(undefined);
  const [createTitle5, setCreateTitle5] = useState(undefined);
  const [createTitle6, setCreateTitle6] = useState(undefined);
  const [createTitle7, setCreateTitle7] = useState(undefined);

  const [createGender1, setCreateGender1] = useState(undefined);
  const [createGender2, setCreateGender2] = useState(undefined);
  const [createGender3, setCreateGender3] = useState(undefined);
  const [createGender4, setCreateGender4] = useState(undefined);
  const [createGender5, setCreateGender5] = useState(undefined);
  const [createGender6, setCreateGender6] = useState(undefined);
  const [createGender7, setCreateGender7] = useState(undefined);

  const [createCategory1, setCreateCategory1] = useState(undefined);
  const [createCategory2, setCreateCategory2] = useState(undefined);
  const [createCategory3, setCreateCategory3] = useState(undefined);
  const [createCategory4, setCreateCategory4] = useState(undefined);
  const [createCategory5, setCreateCategory5] = useState(undefined);
  const [createCategory6, setCreateCategory6] = useState(undefined);
  const [createCategory7, setCreateCategory7] = useState(undefined);

  const [createFirstName1, setCreateFirstName1] = useState(undefined);
  const [createFirstName2, setCreateFirstName2] = useState(undefined);
  const [createFirstName3, setCreateFirstName3] = useState(undefined);
  const [createFirstName4, setCreateFirstName4] = useState(undefined);
  const [createFirstName5, setCreateFirstName5] = useState(undefined);
  const [createFirstName6, setCreateFirstName6] = useState(undefined);
  const [createFirstName7, setCreateFirstName7] = useState(undefined);

  const [createLastname1, setCreateLastName1] = useState(undefined);
  const [createLastname2, setCreateLastName2] = useState(undefined);
  const [createLastname3, setCreateLastName3] = useState(undefined);
  const [createLastname4, setCreateLastName4] = useState(undefined);
  const [createLastname5, setCreateLastName5] = useState(undefined);
  const [createLastname6, setCreateLastName6] = useState(undefined);
  const [createLastname7, setCreateLastName7] = useState(undefined);

  const [createBirth1, setCreateBirth1] = useState(undefined);
  const [createBirth2, setCreateBirth2] = useState(undefined);
  const [createBirth3, setCreateBirth3] = useState(undefined);
  const [createBirth4, setCreateBirth4] = useState(undefined);
  const [createBirth5, setCreateBirth5] = useState(undefined);
  const [createBirth6, setCreateBirth6] = useState(undefined);
  const [createBirth7, setCreateBirth7] = useState(undefined);

  const [createContactNumber1, setCreateContactNumber1] = useState(undefined);
  const [createContactNumber2, setCreateContactNumber2] = useState(undefined);
  const [createContactNumber3, setCreateContactNumber3] = useState(undefined);
  const [createContactNumber4, setCreateContactNumber4] = useState(undefined);
  const [createContactNumber5, setCreateContactNumber5] = useState(undefined);
  const [createContactNumber6, setCreateContactNumber6] = useState(undefined);
  const [createContactNumber7, setCreateContactNumber7] = useState(undefined);

  const [createNationality1, setCreateNationality1] = useState(undefined);
  const [createNationality2, setCreateNationality2] = useState(undefined);
  const [createNationality3, setCreateNationality3] = useState(undefined);
  const [createNationality4, setCreateNationality4] = useState(undefined);
  const [createNationality5, setCreateNationality5] = useState(undefined);
  const [createNationality6, setCreateNationality6] = useState(undefined);
  const [createNationality7, setCreateNationality7] = useState(undefined);

  const [prices, setPrices] = useState([]);
  const [price, setPrice] = useState([]);

  const changeHandler = (value) => {
    setValue(value);
  };
  const changeHandler1 = (value1, e) => {
    setCreateNationality1(value1.value);
  };
  const changeHandler2 = (value1, e) => {
    setCreateNationality2(value1.value);
  };
  const changeHandler3 = (value1, e) => {
    setCreateNationality3(value1.value);
  };
  const changeHandler4 = (value1, e) => {
    setCreateNationality4(value1.value);
  };
  const changeHandler5 = (value1, e) => {
    setCreateNationality5(value1.value);
  };
  const changeHandler6 = (value1, e) => {
    setCreateNationality6(value1.value);
  };
  const changeHandler7 = (value1, e) => {
    setCreateNationality7(value1.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSeatOpen, setIsModalSeatOpen] = useState(false);

  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalSeat = () => {
    setIsModalSeatOpen(true);
  };
  const handleCancelSeat = () => {
    setIsModalSeatOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalBayarOpen, setIsModalBayarOpen] = useState(false);

  const showModalBayar = () => {
    setIsModalBayarOpen(true);
  };

  const handleBayarOk = () => {
    setIsModalBayarOpen(false);
  };

  const handleBayarCancel = () => {
    setIsModalBayarOpen(false);
  };

  // method payment
  const dana = () => {
    // navigate('/payment')
    alert("Apakah Metode Pembayaran Sudah Sesuai ?");
    setIsModalBayarOpen(false);
    navigate("/bookingPending");
  };

  const coba=()=>{

  }
  const create = () => {
    alert("Silahkan lanjut pengisian");
    const passanger = {
      titleUser: createTitle,
      firstName: createFirstName,
      lastName: createLastname,
      contactNumber: createContactNumber,
      birthday: createBirth,
      gender: createGender,
      nationality: createNationality,
      specialRequest: "NONE",
    };

    const category = {
      nameCategory: createCategory,
      price: price,
    };

    dispatch(createCategories(category));
    dispatch(createPassenger(passanger));
  };
  const create1 = () => {
    if (!createTitle1) {
      alert("Harus ada title user");
        return;
    }
    if (!createCategory1) {
      alert("Harus ada category");
        return;
    }
    if (!createGender1) {
      alert("Harus ada gender");
        return;
    }
    if (!createFirstName1) {
      alert("Harus ada firstName");
        return;
    }
    if (!createLastname1) {
      alert("Harus ada lastName");
        return;
    }
    if (!createContactNumber1) {
      alert("Harus ada contactNumber");
        return;
    }
    if (!createBirth1) {
      alert("Harus ada birthday");
        return;
    }
    if (!createNationality1) {
      alert("Harus ada nationality");
        return;
    }
    alert("Silahkan lanjut pengisian");
    const passanger1 = {
      titleUser: createTitle1,
      firstName: createFirstName1,
      lastName: createLastname1,
      contactNumber: createContactNumber1,
      birthday: createBirth1,
      gender: createGender1,
      nationality: createNationality1,
      specialRequest: "NONE",
    };
   
    const category1 = {
      nameCategory: createCategory1,
      price: price,
    };
    

    dispatch(createCategories(category1));
    dispatch(createPassenger(passanger1));
  };
  const create2 = () => {
    if (!createTitle2) {
      alert("Harus ada title user");
        return;
    }
    if (!createCategory2) {
      alert("Harus ada category");
        return;
    }
    if (!createGender2) {
      alert("Harus ada gender");
        return;
    }
    if (!createFirstName2) {
      alert("Harus ada firstName");
        return;
    }
    if (!createLastname2) {
      alert("Harus ada lastName");
        return;
    }
    if (!createContactNumber2) {
      alert("Harus ada contactNumber");
        return;
    }
    if (!createBirth2) {
      alert("Harus ada birthday");
        return;
    }
    if (!createNationality2) {
      alert("Harus ada nationality");
        return;
    }
    alert("Silahkan lanjut pengisian");
    const passanger2 = {
      titleUser: createTitle2,
      firstName: createFirstName2,
      lastName: createLastname2,
      contactNumber: createContactNumber2,
      birthday: createBirth2,
      gender: createGender2,
      nationality: createNationality2,
      specialRequest: "NONE",
    };
    const category2 = {
      nameCategory: createCategory2,
      price: price,
    };

    dispatch(createCategories(category2));
    dispatch(createPassenger(passanger2));
  };
  const create3 = () => {
    if (!createTitle3) {
      alert("Harus ada title user");
        return;
    }
    if (!createCategory3) {
      alert("Harus ada category");
        return;
    }
    if (!createGender3) {
      alert("Harus ada gender");
        return;
    }
    if (!createFirstName3) {
      alert("Harus ada firstName");
        return;
    }
    if (!createLastname3) {
      alert("Harus ada lastName");
        return;
    }
    if (!createContactNumber3) {
      alert("Harus ada contactNumber");
        return;
    }
    if (!createBirth3) {
      alert("Harus ada birthday");
        return;
    }
    if (!createNationality3) {
      alert("Harus ada nationality");
        return;
    }
    alert("Silahkan lanjut pengisian");
    const passanger3 = {
      titleUser: createTitle3,
      firstName: createFirstName3,
      lastName: createLastname3,
      contactNumber: createContactNumber3,
      birthday: createBirth3,
      gender: createGender3,
      nationality: createNationality3,
      specialRequest: "NONE",
    };
    const category3 = {
      nameCategory: createCategory3,
      price: price,
    };

    dispatch(createCategories(category3));
    dispatch(createPassenger(passanger3));
  };
  const create4 = () => {
    if (!createTitle4) {
      alert("Harus ada title user");
        return;
    }
    if (!createCategory4) {
      alert("Harus ada category");
        return;
    }
    if (!createGender4) {
      alert("Harus ada gender");
        return;
    }
    if (!createFirstName4) {
      alert("Harus ada firstName");
        return;
    }
    if (!createLastname4) {
      alert("Harus ada lastName");
        return;
    }
    if (!createContactNumber4) {
      alert("Harus ada contactNumber");
        return;
    }
    if (!createBirth4) {
      alert("Harus ada birthday");
        return;
    }
    if (!createNationality4) {
      alert("Harus ada nationality");
        return;
    }
    alert("Silahkan lanjut pengisian");
    const passanger4 = {
      titleUser: createTitle4,
      firstName: createFirstName4,
      lastName: createLastname4,
      contactNumber: createContactNumber4,
      birthday: createBirth4,
      gender: createGender4,
      nationality: createNationality4,
      specialRequest: "NONE",
    };
    const category4 = {
      nameCategory: createCategory4,
      price: price,
    };

    dispatch(createCategories(category4));
    dispatch(createPassenger(passanger4));
  };
  const create5 = () => {
    if (!createTitle5) {
      alert("Harus ada title user");
        return;
    }
    if (!createCategory5) {
      alert("Harus ada category");
        return;
    }
    if (!createGender5) {
      alert("Harus ada gender");
        return;
    }
    if (!createFirstName5) {
      alert("Harus ada firstName");
        return;
    }
    if (!createLastname5) {
      alert("Harus ada lastName");
        return;
    }
    if (!createContactNumber5) {
      alert("Harus ada contactNumber");
        return;
    }
    if (!createBirth5) {
      alert("Harus ada birthday");
        return;
    }
    if (!createNationality5) {
      alert("Harus ada nationality");
        return;
    }
    alert("Silahkan lanjut pengisian");
    const passanger5 = {
      titleUser: createTitle5,
      firstName: createFirstName5,
      lastName: createLastname5,
      contactNumber: createContactNumber5,
      birthday: createBirth5,
      gender: createGender5,
      nationality: createNationality5,
      specialRequest: "NONE",
    };
    const category5 = {
      nameCategory: createCategory5,
      price: price,
    };

    dispatch(createCategories(category5));
    dispatch(createPassenger(passanger5));
  };
  const create6 = () => {
    if (!createTitle6) {
      alert("Harus ada title user");
        return;
    }
    if (!createCategory6) {
      alert("Harus ada category");
        return;
    }
    if (!createGender6) {
      alert("Harus ada gender");
        return;
    }
    if (!createFirstName6) {
      alert("Harus ada firstName");
        return;
    }
    if (!createLastname6) {
      alert("Harus ada lastName");
        return;
    }
    if (!createContactNumber6) {
      alert("Harus ada contactNumber");
        return;
    }
    if (!createBirth6) {
      alert("Harus ada birthday");
        return;
    }
    if (!createNationality6) {
      alert("Harus ada nationality");
        return;
    }
    alert("Silahkan lanjut pengisian");
    const passanger6 = {
      titleUser: createTitle6,
      firstName: createFirstName6,
      lastName: createLastname6,
      contactNumber: createContactNumber6,
      birthday: createBirth6,
      gender: createGender6,
      nationality: createNationality6,
      specialRequest: "NONE",
    };
    const category6 = {
      nameCategory: createCategory6,
      price: price,
    };

    dispatch(createCategories(category6));
    dispatch(createPassenger(passanger6));
  };
  const create7 = () => {
    if (!createTitle7) {
      alert("Harus ada title user");
        return;
    }
    if (!createCategory7) {
      alert("Harus ada category");
        return;
    }
    if (!createGender7) {
      alert("Harus ada gender");
        return;
    }
    if (!createFirstName7) {
      alert("Harus ada firstName");
        return;
    }
    if (!createLastname7) {
      alert("Harus ada lastName");
        return;
    }
    if (!createContactNumber7) {
      alert("Harus ada contactNumber");
        return;
    }
    if (!createBirth7) {
      alert("Harus ada birthday");
        return;
    }
    if (!createNationality7) {
      alert("Harus ada nationality");
        return;
    }
    alert("Silahkan lanjut pengisian");
    const passanger7 = {
      titleUser: createTitle7,
      firstName: createFirstName7,
      lastName: createLastname7,
      contactNumber: createContactNumber7,
      birthday: createBirth7,
      gender: createGender7,
      nationality: createNationality7,
      specialRequest: "NONE",
    };
    const category7 = {
      nameCategory: createCategory7,
      price: price,
    };

    dispatch(createCategories(category7));
    dispatch(createPassenger(passanger7));
  };

  const handle = (e) => {
    console.log(e);
  };
  useEffect(() => {
    const countPassenger = JSON.parse(localStorage.getItem("passanger"));
    setPassenger(
      countPassenger.adults + countPassenger.child + countPassenger.infant
    );
    const token = JSON.parse(localStorage.getItem("token"));
    const departFl = JSON.parse(localStorage.getItem("depart"));
    const Class = JSON.parse(localStorage.getItem("class"))
    const returnFl = JSON.parse(localStorage.getItem("return"));
    const user = localStorage.getItem("idUser");
    setClassFlight(Class)
    setToken(token);
    setDepart(departFl);
    setReturn(returnFl);

    if (user) {
      dispatch(loadUser(user));
    } else {
    }
    if (classFlight.class==="Business"){
      setPrice(Price.business)
    }else if(classFlight.class==="Economy"){
      setPrice(Price.economy)
    }
    dispatch(loadLuggages());
    dispatch(loadPrice(departFl.idFlight))
    // dispatch(loadPayment());
  }, [luggages,payment]);



  return (
    <React.Fragment>
      {departFl ? (
        <>
          <div className="bg-brand-yellow">
            <Navbar />
            <div className="block md:flex sm:text-sm justify-center items-center pt-[80px] bg-brand-nude">
              <div className="flex gap-2 items-center p-2">
                <h3 className="text-brand-black">
                  Mohon selesaikan pesanan anda dalam{" "}
                </h3>
                <Countdown date={Date.now() + 900000} renderer={renderer} />
              </div>
            </div>
          </div>
          <div className="container bg-brand-yellow">
            <div className="booking-container">
              <div className="booking-left">
                {token ? (
                  <>
                    {passenger === 1 ? (
                      <ComponentFormTransaction
                        pass={"Pemesan"}
                        title={(e) => setCreateTitle1(e.target.value)}
                        category={(e) => setCreateCategory1(e.target.value)}
                        gender={(e) => setCreateGender1(e.target.value)}
                        firstName={(e) => setCreateFirstName1(e.target.value)}
                        lastName={(e) => setCreateLastName1(e.target.value)}
                        birthDay={(e) => setCreateBirth1(e.target.value)}
                        contact={(e) => setCreateContactNumber1(e.target.value)}
                        options={options1}
                        value={value1}
                        country={changeHandler1}
                        confirm={create1}
                        userFirstName={user.firstName}
                        userLastName={user.lastName}
                        userBirthDay={user.birthday}
                        userGender={user.gender}
                      />
                    ) : null}
                    {passenger === 2 ? (
                      <>
                        <ComponentFormTransaction
                          pass={"Pemesan"}
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                          userFirstName={user.firstName}
                          userLastName={user.lastName}
                          userBirthDay={user.birthday}
                          userGender={user.gender}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                      </>
                    ) : null}
                    {passenger === 3 ? (
                      <>
                        <ComponentFormTransaction
                          pass={"Pemesan"}
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                          userFirstName={user.firstName}
                          userLastName={user.lastName}
                          userBirthDay={user.birthday}
                          userGender={user.gender}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                      </>
                    ) : null}
                    {passenger === 4 ? (
                      <>
                        <ComponentFormTransaction
                          pass={"Pemesan"}
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                          userFirstName={user.firstName}
                          userLastName={user.lastName}
                          userBirthDay={user.birthday}
                          userGender={user.gender}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle4(e.target.value)}
                          category={(e) => setCreateCategory4(e.target.value)}
                          gender={(e) => setCreateGender4(e.target.value)}
                          firstName={(e) => setCreateFirstName4(e.target.value)}
                          lastName={(e) => setCreateLastName4(e.target.value)}
                          birthDay={(e) => setCreateBirth4(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber4(e.target.value)
                          }
                          options={options4}
                          value={value4}
                          country={changeHandler4}
                          confirm={create4}
                        />
                      </>
                    ) : null}
                    {passenger === 5 && token === null ? (
                      <>
                        <ComponentFormTransaction
                          pass={"Pemesan"}
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                          userFirstName={user.firstName}
                          userLastName={user.lastName}
                          userBirthDay={user.birthday}
                          userGender={user.gender}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle4(e.target.value)}
                          category={(e) => setCreateCategory4(e.target.value)}
                          gender={(e) => setCreateGender4(e.target.value)}
                          firstName={(e) => setCreateFirstName4(e.target.value)}
                          lastName={(e) => setCreateLastName4(e.target.value)}
                          birthDay={(e) => setCreateBirth4(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber4(e.target.value)
                          }
                          options={options4}
                          value={value4}
                          country={changeHandler4}
                          confirm={create4}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle5(e.target.value)}
                          category={(e) => setCreateCategory5(e.target.value)}
                          gender={(e) => setCreateGender5(e.target.value)}
                          firstName={(e) => setCreateFirstName5(e.target.value)}
                          lastName={(e) => setCreateLastName5(e.target.value)}
                          birthDay={(e) => setCreateBirth5(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber5(e.target.value)
                          }
                          options={options5}
                          value={value5}
                          country={changeHandler5}
                          confirm={create5}
                        />
                      </>
                    ) : null}
                    {passenger === 6 ? (
                      <>
                        <ComponentFormTransaction
                          pass={"Pemesan"}
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                          userFirstName={user.firstName}
                          userLastName={user.lastName}
                          userBirthDay={user.birthday}
                          userGender={user.gender}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle4(e.target.value)}
                          category={(e) => setCreateCategory4(e.target.value)}
                          gender={(e) => setCreateGender4(e.target.value)}
                          firstName={(e) => setCreateFirstName4(e.target.value)}
                          lastName={(e) => setCreateLastName4(e.target.value)}
                          birthDay={(e) => setCreateBirth4(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber4(e.target.value)
                          }
                          options={options4}
                          value={value4}
                          country={changeHandler4}
                          confirm={create4}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle5(e.target.value)}
                          category={(e) => setCreateCategory5(e.target.value)}
                          gender={(e) => setCreateGender5(e.target.value)}
                          firstName={(e) => setCreateFirstName5(e.target.value)}
                          lastName={(e) => setCreateLastName5(e.target.value)}
                          birthDay={(e) => setCreateBirth5(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber5(e.target.value)
                          }
                          options={options5}
                          value={value5}
                          country={changeHandler5}
                          confirm={create5}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle6(e.target.value)}
                          category={(e) => setCreateCategory6(e.target.value)}
                          gender={(e) => setCreateGender6(e.target.value)}
                          firstName={(e) => setCreateFirstName6(e.target.value)}
                          lastName={(e) => setCreateLastName6(e.target.value)}
                          birthDay={(e) => setCreateBirth6(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber6(e.target.value)
                          }
                          options={options6}
                          value={value6}
                          country={changeHandler6}
                          confirm={create6}
                        />
                      </>
                    ) : null}
                    {passenger === 7 ? (
                      <>
                        <ComponentFormTransaction
                          pass={"Pemesan"}
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                          userFirstName={user.firstName}
                          userLastName={user.lastName}
                          userBirthDay={user.birthday}
                          userGender={user.gender}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle4(e.target.value)}
                          category={(e) => setCreateCategory4(e.target.value)}
                          gender={(e) => setCreateGender4(e.target.value)}
                          firstName={(e) => setCreateFirstName4(e.target.value)}
                          lastName={(e) => setCreateLastName4(e.target.value)}
                          birthDay={(e) => setCreateBirth4(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber4(e.target.value)
                          }
                          options={options4}
                          value={value4}
                          country={changeHandler4}
                          confirm={create4}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle5(e.target.value)}
                          category={(e) => setCreateCategory5(e.target.value)}
                          gender={(e) => setCreateGender5(e.target.value)}
                          firstName={(e) => setCreateFirstName5(e.target.value)}
                          lastName={(e) => setCreateLastName5(e.target.value)}
                          birthDay={(e) => setCreateBirth5(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber5(e.target.value)
                          }
                          options={options5}
                          value={value5}
                          country={changeHandler5}
                          confirm={create5}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle6(e.target.value)}
                          category={(e) => setCreateCategory6(e.target.value)}
                          gender={(e) => setCreateGender6(e.target.value)}
                          firstName={(e) => setCreateFirstName6(e.target.value)}
                          lastName={(e) => setCreateLastName6(e.target.value)}
                          birthDay={(e) => setCreateBirth6(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber6(e.target.value)
                          }
                          options={options6}
                          value={value6}
                          country={changeHandler6}
                          confirm={create6}
                        />
                        <ComponentFormTransaction
                          pass={"Penumpang"}
                          title={(e) => setCreateTitle7(e.target.value)}
                          category={(e) => setCreateCategory7(e.target.value)}
                          gender={(e) => setCreateGender7(e.target.value)}
                          firstName={(e) => setCreateFirstName7(e.target.value)}
                          lastName={(e) => setCreateLastName7(e.target.value)}
                          birthDay={(e) => setCreateBirth7(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber7(e.target.value)
                          }
                          options={options7}
                          value={value7}
                          country={changeHandler7}
                          confirm={create7}
                        />
                      </>
                    ) : null}
                  </>
                ) : (
                  <>
                    {passenger === 1 ? (
                      <ComponentFormTransaction
                        title={(e) => setCreateTitle1(e.target.value)}
                        category={(e) => setCreateCategory1(e.target.value)}
                        gender={(e) => setCreateGender1(e.target.value)}
                        firstName={(e) => setCreateFirstName1(e.target.value)}
                        lastName={(e) => setCreateLastName1(e.target.value)}
                        birthDay={(e) => setCreateBirth1(e.target.value)}
                        contact={(e) => setCreateContactNumber1(e.target.value)}
                        options={options1}
                        value={value1}
                        country={changeHandler1}
                        confirm={create1}
                      />
                    ) : null}
                    {passenger === 2 ? (
                      <>
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                      </>
                    ) : null}
                    {passenger === 3 ? (
                      <>
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                      </>
                    ) : null}
                    {passenger === 4 ? (
                      <>
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle4(e.target.value)}
                          category={(e) => setCreateCategory4(e.target.value)}
                          gender={(e) => setCreateGender4(e.target.value)}
                          firstName={(e) => setCreateFirstName4(e.target.value)}
                          lastName={(e) => setCreateLastName4(e.target.value)}
                          birthDay={(e) => setCreateBirth4(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber4(e.target.value)
                          }
                          options={options4}
                          value={value4}
                          country={changeHandler4}
                          confirm={create4}
                        />
                      </>
                    ) : null}
                    {passenger === 5 && token === null ? (
                      <>
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle4(e.target.value)}
                          category={(e) => setCreateCategory4(e.target.value)}
                          gender={(e) => setCreateGender4(e.target.value)}
                          firstName={(e) => setCreateFirstName4(e.target.value)}
                          lastName={(e) => setCreateLastName4(e.target.value)}
                          birthDay={(e) => setCreateBirth4(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber4(e.target.value)
                          }
                          options={options4}
                          value={value4}
                          country={changeHandler4}
                          confirm={create4}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle5(e.target.value)}
                          category={(e) => setCreateCategory5(e.target.value)}
                          gender={(e) => setCreateGender5(e.target.value)}
                          firstName={(e) => setCreateFirstName5(e.target.value)}
                          lastName={(e) => setCreateLastName5(e.target.value)}
                          birthDay={(e) => setCreateBirth5(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber5(e.target.value)
                          }
                          options={options5}
                          value={value5}
                          country={changeHandler5}
                          confirm={create5}
                        />
                      </>
                    ) : null}
                    {passenger === 6 ? (
                      <>
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle4(e.target.value)}
                          category={(e) => setCreateCategory4(e.target.value)}
                          gender={(e) => setCreateGender4(e.target.value)}
                          firstName={(e) => setCreateFirstName4(e.target.value)}
                          lastName={(e) => setCreateLastName4(e.target.value)}
                          birthDay={(e) => setCreateBirth4(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber4(e.target.value)
                          }
                          options={options4}
                          value={value4}
                          country={changeHandler4}
                          confirm={create4}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle5(e.target.value)}
                          category={(e) => setCreateCategory5(e.target.value)}
                          gender={(e) => setCreateGender5(e.target.value)}
                          firstName={(e) => setCreateFirstName5(e.target.value)}
                          lastName={(e) => setCreateLastName5(e.target.value)}
                          birthDay={(e) => setCreateBirth5(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber5(e.target.value)
                          }
                          options={options5}
                          value={value5}
                          country={changeHandler5}
                          confirm={create5}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle6(e.target.value)}
                          category={(e) => setCreateCategory6(e.target.value)}
                          gender={(e) => setCreateGender6(e.target.value)}
                          firstName={(e) => setCreateFirstName6(e.target.value)}
                          lastName={(e) => setCreateLastName6(e.target.value)}
                          birthDay={(e) => setCreateBirth6(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber6(e.target.value)
                          }
                          options={options6}
                          value={value6}
                          country={changeHandler6}
                          confirm={create6}
                        />
                      </>
                    ) : null}
                    {passenger === 7 ? (
                      <>
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle1(e.target.value)}
                          category={(e) => setCreateCategory1(e.target.value)}
                          gender={(e) => setCreateGender1(e.target.value)}
                          firstName={(e) => setCreateFirstName1(e.target.value)}
                          lastName={(e) => setCreateLastName1(e.target.value)}
                          birthDay={(e) => setCreateBirth1(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber1(e.target.value)
                          }
                          options={options1}
                          value={value1}
                          country={changeHandler1}
                          confirm={create1}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle2(e.target.value)}
                          category={(e) => setCreateCategory2(e.target.value)}
                          gender={(e) => setCreateGender2(e.target.value)}
                          firstName={(e) => setCreateFirstName2(e.target.value)}
                          lastName={(e) => setCreateLastName2(e.target.value)}
                          birthDay={(e) => setCreateBirth2(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber2(e.target.value)
                          }
                          options={options2}
                          value={value2}
                          country={changeHandler2}
                          confirm={create2}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle3(e.target.value)}
                          category={(e) => setCreateCategory3(e.target.value)}
                          gender={(e) => setCreateGender3(e.target.value)}
                          firstName={(e) => setCreateFirstName3(e.target.value)}
                          lastName={(e) => setCreateLastName3(e.target.value)}
                          birthDay={(e) => setCreateBirth3(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber3(e.target.value)
                          }
                          options={options3}
                          value={value3}
                          country={changeHandler3}
                          confirm={create3}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle4(e.target.value)}
                          category={(e) => setCreateCategory4(e.target.value)}
                          gender={(e) => setCreateGender4(e.target.value)}
                          firstName={(e) => setCreateFirstName4(e.target.value)}
                          lastName={(e) => setCreateLastName4(e.target.value)}
                          birthDay={(e) => setCreateBirth4(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber4(e.target.value)
                          }
                          options={options4}
                          value={value4}
                          country={changeHandler4}
                          confirm={create4}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle5(e.target.value)}
                          category={(e) => setCreateCategory5(e.target.value)}
                          gender={(e) => setCreateGender5(e.target.value)}
                          firstName={(e) => setCreateFirstName5(e.target.value)}
                          lastName={(e) => setCreateLastName5(e.target.value)}
                          birthDay={(e) => setCreateBirth5(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber5(e.target.value)
                          }
                          options={options5}
                          value={value5}
                          country={changeHandler5}
                          confirm={create5}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle6(e.target.value)}
                          category={(e) => setCreateCategory6(e.target.value)}
                          gender={(e) => setCreateGender6(e.target.value)}
                          firstName={(e) => setCreateFirstName6(e.target.value)}
                          lastName={(e) => setCreateLastName6(e.target.value)}
                          birthDay={(e) => setCreateBirth6(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber6(e.target.value)
                          }
                          options={options6}
                          value={value6}
                          country={changeHandler6}
                          confirm={create6}
                        />
                        <ComponentFormTransaction
                          title={(e) => setCreateTitle7(e.target.value)}
                          category={(e) => setCreateCategory7(e.target.value)}
                          gender={(e) => setCreateGender7(e.target.value)}
                          firstName={(e) => setCreateFirstName7(e.target.value)}
                          lastName={(e) => setCreateLastName7(e.target.value)}
                          birthDay={(e) => setCreateBirth7(e.target.value)}
                          contact={(e) =>
                            setCreateContactNumber7(e.target.value)
                          }
                          options={options7}
                          value={value7}
                          country={changeHandler7}
                          confirm={create7}
                        />
                      </>
                    ) : null}
                  </>
                )}

                <div className="parent-c w-full bg-brand-nude p-6 mt-6 rounded-md border-2 border-brand-black">
                  <div className="left-header">
                    <span>
                      <UnorderedListOutlined />
                    </span>
                    <h3>Extra Fasilitas</h3>
                  </div>
                  <div className="flex justify-between items-center mb-4 gap-4">
                    <div className="flex justify-start items-center mb-4 gap-4">
                      <span>
                        <ShoppingOutlined />
                      </span>
                      <h3 className="text-[20px] mt-2">Bagasi</h3>
                    </div>
                    <div className="flex justify-start items-center gap-4 bg-brand-nude rounded-sm border-2 border-brand-gray p-2">
                      <select
                        className="bg-brand-nude"
                        onClick={(e) => setBagasi(e.target.value)}
                      >
                        <option>Select Extra Baggage</option>
                        {luggages.map((item) => (
                          <option>
                            +{item.capacity}kg ({item.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-start items-center mb-4 gap-4">
                    <span>
                      <ShoppingOutlined />
                    </span>
                    <h3
                      onClick={showModalSeat}
                      className="text-[20px] mt-2 cursor-pointer"
                    >
                      Seats
                    </h3>
                    <ModalSeat
                      isModalOpen={isModalSeatOpen}
                      handleCancel={handleCancelSeat}
                    />
                  </div>
                  <button onClick={coba}>klik</button>
                </div>
                <div className="parent-d w-full mt-6 flex sm:justify-center md:justify-start lg:justify-end p-4 mb-4">
                  <button
                    className="block rounded-lg cursor-pointer justify-center h-[60px] w-[50%] bg-brand-green text-[#f9f9f9] border-0 font-[600] tracking-[2px]"
                    type="submit"
                    // onClick={handlerBookingPending}
                    onClick={showModalBayar}
                  >
                    LANJUT PEMBAYARAN
                  </button>
                  <Modal
                    title="Select Payment Method"
                    open={isModalBayarOpen}
                    onOk={handleBayarOk}
                    onCancel={handleBayarCancel}
                    footer={[null]}
                  >
                    <div className="p-2 mt-4">
                      <div
                        onClick={dana}
                        className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                      >
                        <img
                          src={bri}
                          style={{
                            width: "70px",
                            height: "70px",
                          }}
                        ></img>
                        <h3 className="p-6 text-black text-bold">BRI</h3>
                      </div>
                      <div
                        onClick={dana}
                        className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                      >
                        <img
                          src={bca}
                          style={{
                            width: "70px",
                            height: "70px",
                          }}
                        ></img>
                        <h3 className="p-6 text-black text-bold">BCA</h3>
                      </div>
                      <div
                        onClick={dana}
                        className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                      >
                        <img
                          src={mandiri}
                          style={{
                            width: "70px",
                            height: "70px",
                          }}
                        ></img>
                        <h3 className="p-6 text-black text-bold">Mandiri</h3>
                      </div>
                      <div
                        onClick={dana}
                        className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                      >
                        <img
                          src={bni}
                          style={{
                            width: "70px",
                            height: "70px",
                          }}
                        ></img>
                        <h3 className="p-6 text-black text-bold">BNI</h3>
                      </div>
                      <div
                        onClick={dana}
                        className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                      >
                        <img
                          src={ovo}
                          style={{
                            width: "70px",
                            height: "70px",
                          }}
                        ></img>
                        <h3 className="p-6 text-black text-bold">OVO</h3>
                      </div>
                      <div
                        onClick={dana}
                        className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
                      >
                        <img
                          src={danaa}
                          style={{
                            width: "70px",
                            height: "70px",
                          }}
                        ></img>
                        <h3 className="p-6 text-black text-bold">Dana</h3>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
              <div className="booking-right">
                <div className="w-full">
                  <div className="parent-a w-full bg-brand-whiteLight p-6 rounded-md border-2 border-brand-black">
                    <div className="w-full bg-brand-black text-white p-2 mb-4 gap-4 rounded-md">
                      <h3 className="text-[20px] font-semibold mb-2">
                        Penerbangan
                      </h3>
                    </div>
                    <div className="py-2">
                      <div className="flex w-full gap-8 mb-2 p-2 ">
                        <div className="flex w-full gap-4">
                          <h3>Jakarta</h3>
                          <span>
                            <ArrowRightOutlined />
                          </span>
                          <h3>Singapore</h3>
                        </div>
                        <div>
                          <button className="text-blue-600" onClick={showModal}>
                            Detail
                          </button>
                        </div>
                        <Modal
                          title="Flight Detail"
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={[null]}
                        >
                          <div className="wrap-modal-detail-flight">
                            <div className="title-detail-flight">
                              <p>Jakarta to Singapore</p>
                              <p>Saturday, Nov 26</p>
                            </div>
                            <div className="modal-detail-flight">
                              <div className="airports">
                                <div>
                                  <p>Jakarta</p>
                                  <p>Soekarno-Hatta International Airports</p>
                                </div>
                                <div>
                                  <p>NO PESAWAT</p>
                                  <p>Flight by 7-Airways</p>
                                </div>
                                <div>
                                  <p>Singapore</p>
                                  <p>Changi International Airports</p>
                                </div>
                              </div>

                              <div className="modal-logo">
                                <div className="circle">
                                  <BsCircle />
                                </div>
                                <div className="wrap-logo">
                                  <img
                                    src={logo}
                                    style={{
                                      width: "90px",
                                      height: "90px",
                                      borderRadius: "100%",
                                      border: "1px solid black",
                                    }}
                                  ></img>
                                </div>
                                <div className="circle">
                                  <BsCircle />
                                </div>
                              </div>
                              <div className="modal-time">
                                <p>10:30</p>
                                <p>2h 10m</p>
                                <p>14:40</p>
                              </div>
                            </div>
                            <div>
                              <h6>Passenger</h6>
                              <p>Adults, Childs, Infant</p>
                            </div>
                            <div>
                              <h6>Luggage</h6>
                              <p>{bagasi}</p>
                            </div>
                            <div>
                              <h6>Number Seats</h6>
                              <p></p>
                            </div>
                          </div>
                        </Modal>
                      </div>
                      <div className="w-full my-[2rem] border-2 border-brand-gray p-2">
                        <h3 className="text-[20px] text-black mb-4">
                          Kebijakan Tiket
                        </h3>
                        <div className="flex justify-start items-center mb-4 gap-4">
                          <span>
                            <DollarCircleOutlined />
                          </span>
                          <p className="mt-2">Bisa Refund</p>
                        </div>
                        <div className="flex justify-start items-center mb-4 gap-4">
                          <span>
                            <ScheduleOutlined />
                          </span>
                          <p className="mt-2">Bisa Rescedhule</p>
                        </div>
                      </div>
                      <div className="flex justify-end w-full my-[2rem]">
                        <div>
                          <h3 className="text-[16px] text-black mb-4 font-semibold">
                            Total Pembayaran
                          </h3>
                          <span className="w-full">Rp. 0,-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div className="container">
          <div className="flex h-screen items-center justify-center">
            <div className="flex items-center bg-brand-whiteLight h-fit rounded-2xl p-5">
              <div className="flex w-full flex-col">
                <h4>Halaman Tidak Ditemukan</h4>
                <Empty />
                <div className="flex w-full justify-center ">
                  <ButtonFindFlight handle={() => navigate("/")} value="Back" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
