import React, { useState, useMemo } from "react";
import { ShoppingOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Empty, Radio } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Countdown from "react-countdown";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import { loadLuggagesIdPlane } from "./Feature/Models/LuggageSliceIdPlane";
import { createPayment } from "./Feature/Models/PaymentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ButtonFindFlight from "./Reusable/ButtonFindFlight";
import { loadUser } from "./Feature/Models/GetUser";
import ComponentFormTransaction from "./ComponentFormTransaction";
import { loadPrice } from "./Feature/Models/GetPrice";
import Luggages from "./Luggages";
import { loadCategory } from "./Feature/Models/GetCategory";
import ModalMethodPayment from "./ModalMethodPayment";
import DetailPayment from "./DetailPayment";
import ModalSeatEconomy from "./Bookking/ModalSeatEconomy";
import { updateSeats } from "./Feature/Models/SeatUpdate";
import { FaTrashAlt } from "react-icons/fa";
import { createBooking } from "./Feature/Models/CreateBooking";
import ModalSeatBussines from "./Bookking/ModalSeatBussines";

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

export default function TransactionBusiness() {
  const { luggagesPlane } = useSelector((state) => state.luggagePlane);
  const { SeatsPlaneCount } = useSelector((state) => state.seatsPlaneCount);
  const { payment } = useSelector((state) => state.payment);
  const { category } = useSelector((state) => state.category);
  const { user } = useSelector((state) => state.getUser);
  const { Price } = useSelector((state) => state.getPrice);

  const navigate = useNavigate();

  const [passenger, setPassenger] = useState("");
  const [classFlight, setClassFlight] = useState("");
  const [departFlight, setDepart] = useState([]);
  const [token, setToken] = useState(false);
  const [returnFlight, setReturn] = useState([]);

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const [bagasi, setBagasi] = useState("");
  const [bagasi1, setBagasi1] = useState({
    price: 0,
  });
  const [bagasi2, setBagasi2] = useState({
    price: 0,
  });
  const [bagasi3, setBagasi3] = useState({
    price: 0,
  });
  const [bagasi4, setBagasi4] = useState({
    price: 0,
  });
  const [bagasi5, setBagasi5] = useState({
    price: 0,
  });
  const [bagasi6, setBagasi6] = useState({
    price: 0,
  });
  const [bagasi7, setBagasi7] = useState({
    price: 0,
  });

  const [seatNumber1, setSeatNumber1] = useState("");
  const [seatNumber2, setSeatNumber2] = useState("");
  const [seatNumber3, setSeatNumber3] = useState("");
  const [seatNumber4, setSeatNumber4] = useState("");
  const [seatNumber5, setSeatNumber5] = useState("");
  const [seatNumber6, setSeatNumber6] = useState("");
  const [seatNumber7, setSeatNumber7] = useState("");

  const [passenger1, setPassenger1] = useState({
    passenger: {
      firstName: "",
    },
    ageCategory: {
      price: 0,
    },
  });
  const [passenger2, setPassenger2] = useState({
    passenger: {
      firstName: "",
    },
    ageCategory: {
      price: 0,
    },
  });
  const [passenger3, setPassenger3] = useState({
    passenger: {
      firstName: "",
    },
    ageCategory: {
      price: 0,
    },
  });
  const [passenger4, setPassenger4] = useState({
    passenger: {
      firstName: "",
    },
    ageCategory: {
      price: 0,
    },
  });
  const [passenger5, setPassenger5] = useState({
    passenger: {
      firstName: "",
    },
    ageCategory: {
      price: 0,
    },
  });
  const [passenger6, setPassenger6] = useState({
    passenger: {
      firstName: "",
    },
    ageCategory: {
      price: 0,
    },
  });
  const [passenger7, setPassenger7] = useState({
    passenger: {
      firstName: "",
    },
    ageCategory: {
      price: 0,
    },
  });

  const handleChangeBag1 = (values, i) => {
    let luggage = values.item;

    if (i === 0) {
      setBagasi1(luggage);
    }
    if (i === 1) {
      setBagasi2(luggage);
    }
    if (i === 2) {
      setBagasi3(luggage);
    }
    if (i === 3) {
      setBagasi4(luggage);
    }
    if (i === 4) {
      setBagasi5(luggage);
    }
    if (i === 5) {
      setBagasi6(luggage);
    }
    if (i === 6) {
      setBagasi7(luggage);
    }
    setBagasi(values.price);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSeatOpen, setIsModalSeatOpen] = useState(false);
  const [isModalBayarOpen, setIsModalBayarOpen] = useState(false);

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

  const handleBayarOk = () => {
    setIsModalBayarOpen(false);
  };

  const handleBayarCancel = () => {
    setIsModalBayarOpen(false);
  };

  // method payment

  const dana = () => {
    alert("Apakah Metode Pembayaran Sudah Sesuai ?");
    setIsModalBayarOpen(false);
    if (passenger === 1) {
      let x = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: departFlight,
          },
        ],
        price:
          Price.business * passenger +
          (passenger1.ageCategory.price + bagasi1.price),
        payment: {
          paymentMethod: "BRI",
        },
      };
      dispatch(createBooking(x));
    }
    if (passenger === 2) {
      let x = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: departFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: departFlight,
          },
        ],
        price:
          Price.business * passenger +
          (passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            bagasi1.price +
            bagasi2.price),
        payment: {
          paymentMethod: "BRI",
        },
      };
      dispatch(createBooking(x));
    }
    if (passenger === 3) {
      let x = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: departFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: departFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: departFlight,
          },
        ],
        price:
          Price.business * passenger +
          (passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            bagasi1.price +
            bagasi2.price +
            passenger3.ageCategory.price +
            bagasi3.price),
        payment: {
          paymentMethod: "BRI",
        },
      };
      dispatch(createBooking(x));
    }
    if (passenger === 4) {
      let x = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: departFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: departFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: departFlight,
          },
          {
            luggage: bagasi4,
            passenger: passenger4,
            seat: seatNumber4,
            flight: departFlight,
          },
        ],
        price:
          Price.business * passenger +
          (passenger4.ageCategory.price +
            bagasi4.price +
            passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            bagasi1.price +
            bagasi2.price +
            passenger3.ageCategory.price +
            bagasi3.price),
        payment: {
          paymentMethod: "BRI",
        },
      };
      dispatch(createBooking(x));
    }
    if (passenger === 5) {
      let x = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: departFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: departFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: departFlight,
          },
          {
            luggage: bagasi4,
            passenger: passenger4,
            seat: seatNumber4,
            flight: departFlight,
          },
          {
            luggage: bagasi5,
            passenger: passenger5,
            seat: seatNumber5,
            flight: departFlight,
          },
        ],
        price:
          Price.business * passenger +
          (passenger5.ageCategory.price +
            bagasi5.price +
            passenger4.ageCategory.price +
            bagasi4.price +
            passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            bagasi1.price +
            bagasi2.price +
            passenger3.ageCategory.price +
            bagasi3.price),
        payment: {
          paymentMethod: "BRI",
        },
      };
      dispatch(createBooking(x));
    }
    if (passenger === 6) {
      let x = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: departFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: departFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: departFlight,
          },
          {
            luggage: bagasi4,
            passenger: passenger4,
            seat: seatNumber4,
            flight: departFlight,
          },
          {
            luggage: bagasi5,
            passenger: passenger5,
            seat: seatNumber5,
            flight: departFlight,
          },
          {
            luggage: bagasi6,
            passenger: passenger6,
            seat: seatNumber6,
            flight: departFlight,
          },
        ],
        price:
          Price.business * passenger +
          (passenger6.ageCategory.price +
            bagasi6.price +
            passenger1.ageCategory.price +
            bagasi1.price +
            passenger4.ageCategory.price +
            bagasi4.price +
            passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            bagasi1.price +
            bagasi2.price +
            passenger3.ageCategory.price +
            bagasi3.price),
        payment: {
          paymentMethod: "BRI",
        },
      };
      dispatch(createBooking(x));
    }
    if (passenger === 7) {
      let x = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: departFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: departFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: departFlight,
          },
          {
            luggage: bagasi4,
            passenger: passenger4,
            seat: seatNumber4,
            flight: departFlight,
          },
          {
            luggage: bagasi5,
            passenger: passenger5,
            seat: seatNumber5,
            flight: departFlight,
          },
          {
            luggage: bagasi6,
            passenger: passenger6,
            seat: seatNumber6,
            flight: departFlight,
          },
          {
            luggage: bagasi7,
            passenger: passenger7,
            seat: seatNumber7,
            flight: departFlight,
          },
        ],
        price:
          Price.business * passenger +
          (passenger7.ageCategory.price +
            bagasi7.price +
            passenger6.ageCategory.price +
            bagasi6.price +
            passenger1.ageCategory.price +
            bagasi1.price +
            passenger4.ageCategory.price +
            bagasi4.price +
            passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            bagasi1.price +
            bagasi2.price +
            passenger3.ageCategory.price +
            bagasi3.price),
        payment: {
          paymentMethod: "BRI",
        },
      };
      dispatch(createBooking(x));
    }
    navigate("/bookingPending");
  };
  const dateFormat = "MM/DD/YYYY";

  const [titleUser, setTitle] = useState("");
  const [ageCategory, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirtDay] = useState("");
  const [nationality, setNationality] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [passport, setPasspoort] = useState("");
  const ssss = () => {
    console.log(passenger1.passenger.firstName);
  };
  const handleChangePassport = (e) => {
    setPasspoort(e.target.value);
  };
  const handleChangeSpecialRequest = (e) => {
    setSpecialRequest(e.label);
  };
  const handleChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  };
  const handleChangeNationality = (e) => {
    setNationality(e.label);
  };
  const handleChangeBirtday = (date, dateString) => {
    setBirtDay(dateString);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.value);
  };
  const handleChangeUserTitle = (e) => {
    setTitle(e.value);
  };
  const handleChangeCategory = (e) => {
    let ageCategory = {
      price: e.price,
      idCategory: e.value,
      nameCategory: e.label,
    };
    setCategory(ageCategory);
  };

  const pas = () => {
    let temp = [];
    for (let i = 0; i < passenger; i++) {
      temp.push({
        titleUser: "",
        firstName: "",
        lastName: "",
        contactNumber: "",
        birthday: "",
        gender: "",
        nationality: "",
        specialRequest: "",
      });
    }
    return temp;
  };
  const penumpang = pas();
  const passengerNum = () => {
    let temp = [];
    for (let i = 0; i < passenger; i++) {
      temp.push({
        number: [i + 1],
      });
    }
    return temp;
  };
  const passNum = passengerNum();

  const showModalBayar = () => {
    setIsModalBayarOpen(true);
  };
  const clik = (i) => {
    let passenger = {
      titleUser,
      ageCategory,
      gender,
      firstName,
      lastName,
      birthday,
      nationality,
      contactNumber,
      specialRequest,
      passport,
    };

    if (!titleUser){
      alert("harus ada title");
      return
    }

    if (!ageCategory){
      alert("harus ada age category");
      return
    }

    if (!gender){
      alert("harus ada gender");
      return
    }

    if (!firstName){
      alert("harus ada first name");
      return
    }

    if (!lastName){
      alert("harus ada lastname");
      return
    }

    if (!birthday){
      alert("harus ada birthday");
      return
    }

    if (!nationality){
      alert("harus ada nationality");
      return
    }

    if (!contactNumber){
      alert("harus ada contact number");
      return
    }

    if (!passport){
      alert("harus ada passport");
      return
    }

    if (i === 0) {
      setPassenger1(passenger);
    }
    if (i === 1) {
      setPassenger2(passenger);
    }
    if (i === 2) {
      setPassenger3(passenger);
    }
    if (i === 3) {
      setPassenger4(passenger);
    }
    if (i === 4) {
      setPassenger5(passenger);
    }
    if (i === 5) {
      setPassenger6(passenger);
    }
    if (i === 6) {
      setPassenger7(passenger);
    }
  };

  const handleChangeSeat = (e, i) => {
    if (i === 0) {
      setSeatNumber1(e);
    }
    if (i === 1) {
      setSeatNumber2(e);
    }
    if (i === 2) {
      setSeatNumber3(e);
    }
    if (i === 3) {
      setSeatNumber4(e);
    }
    if (i === 4) {
      setSeatNumber5(e);
    }
    if (i === 5) {
      setSeatNumber6(e);
    }
    if (i === 6) {
      setSeatNumber7(e);
    }
  };
  const seatDelete = (e) => {
    let seat = e.stateSeat;

    if (seat === "BOOKED") {
      seat = "AVAILABLE";
    }

    let updateSeat = {
      id: e.idSeat,
      state: seat,
    };

    dispatch(updateSeats(updateSeat));
  };
  const seatNumber = () => {
    return SeatsPlaneCount.filter((item) => item.stateSeat === "BOOKED")
      .slice(0, passenger)
      .map((item, i) => (
        <div className="flex items-center gap-2">
          <p>Number Seat</p>
          <Radio onClick={(e) => handleChangeSeat(item, i)}>
            {item.numberSeat}
          </Radio>

          <FaTrashAlt onClick={() => seatDelete(item)} color="red" />
        </div>
      ));
  };
  const harga = () => {
    return (
      <div>
        Rp.
        {(
          Price.business * passenger +
          bagasi1.price +
          bagasi2.price +
          bagasi3.price +
          bagasi4.price +
          bagasi5.price +
          bagasi6.price +
          bagasi7.price +
          passenger1.ageCategory.price +
          passenger2.ageCategory.price +
          passenger3.ageCategory.price +
          passenger4.ageCategory.price +
          passenger5.ageCategory.price +
          passenger6.ageCategory.price +
          passenger7.ageCategory.price
        )
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
        <p>
          Biaya Penerbangan Rp.
          {(Price.business * passenger)
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
        </p>
        <p>
          Biaya Bagasi Rp.
          {(
            bagasi1.price +
            bagasi2.price +
            bagasi3.price +
            bagasi4.price +
            bagasi5.price +
            bagasi6.price +
            bagasi7.price
          )
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
        </p>
        <p>
          Biaya kategori Rp.
          {(
            passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            passenger3.ageCategory.price +
            passenger4.ageCategory.price +
            passenger5.ageCategory.price +
            passenger6.ageCategory.price +
            passenger7.ageCategory.price
          )
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
        </p>
      </div>
    );
  };

  useEffect(() => {
    const countPass = JSON.parse(localStorage.getItem("passanger"));
    const tokenn = JSON.parse(localStorage.getItem("token"));
    const departFl = JSON.parse(localStorage.getItem("depart"));
    const Class = JSON.parse(localStorage.getItem("class"));
    const returnFl = JSON.parse(localStorage.getItem("return"));
    const users = localStorage.getItem("idUser");
    setPassenger(countPass.adults + countPass.child + countPass.infant);
    setClassFlight(Class);
    setToken(tokenn);
    setDepart(departFl);
    setReturn(returnFl);

    if (users) {
      dispatch(loadUser(users));
    } else {
    }
    dispatch(loadCategory());
    dispatch(loadLuggagesIdPlane(departFl.plane.idPlane));
    dispatch(loadPrice(departFl.idFlight));
    // dispatch(loadPayment());
  }, [category]);

  return (
    <React.Fragment>
      {departFlight ? (
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
          <div className="bg-brand-yellow">
            <div className="container booking-container">
              <div className="booking-left">
                {token ? (
                  <>
                    {penumpang.map((item, i) => (
                      <div key={i}>
                        <ComponentFormTransaction
                          handleChangeUserTitle={(e) =>
                            handleChangeUserTitle(e, i)
                          }
                          handleChangeCategory={(e) =>
                            handleChangeCategory(e, i)
                          }
                          handleChangeGender={(e) => handleChangeGender(e, i)}
                          handleChangeFirstName={(e) =>
                            handleChangeFirstName(e, i)
                          }
                          handleChangeLastName={(e) =>
                            handleChangeLastName(e, i)
                          }
                          handleChangeBirtday={handleChangeBirtday}
                          handleChangePassport={(e) =>
                            handleChangePassport(e, i)
                          }
                          handleChangeNationality={(e) =>
                            handleChangeNationality(e, i)
                          }
                          handleChangeRequest={(e) =>
                            handleChangeSpecialRequest(e, i)
                          }
                          handleChangeContactNumber={(e) =>
                            handleChangeContactNumber(e, i)
                          }
                          dateFormat={dateFormat}
                          options={options}
                          value={value}
                          pay={() => clik(i)}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {penumpang.map((item, i) => (
                      <div key={i}>
                        <ComponentFormTransaction
                          penumpang={`Penumpang ${i + 1}`}
                          handleChangeUserTitle={(e) =>
                            handleChangeUserTitle(e, i)
                          }
                          handleChangeCategory={(e) =>
                            handleChangeCategory(e, i)
                          }
                          handleChangeGender={(e) => handleChangeGender(e, i)}
                          handleChangeFirstName={(e) =>
                            handleChangeFirstName(e, i)
                          }
                          handleChangeLastName={(e) =>
                            handleChangeLastName(e, i)
                          }
                          handleChangeBirtday={handleChangeBirtday}
                          handleChangePassport={(e) =>
                            handleChangePassport(e, i)
                          }
                          handleChangeNationality={(e) =>
                            handleChangeNationality(e, i)
                          }
                          handleChangeSpecialRequest={(e) =>
                            handleChangeSpecialRequest(e, i)
                          }
                          handleChangeContactNumber={(e) =>
                            handleChangeContactNumber(e, i)
                          }
                          dateFormat={dateFormat}
                          options={options}
                          value={value}
                          pay={() => clik(i)}
                        />
                      </div>
                    ))}
                  </>
                )}

                <div className="parent-c w-full bg-brand-nude p-6 mt-6 rounded-md border-2 border-brand-black">
                  <div className="left-header">
                    <span>
                      <UnorderedListOutlined />
                    </span>
                    <h3>Extra Fasilitas</h3>
                  </div>
                  <div className="flex flex-col justify-between  mb-4 gap-1">
                    <div className="flex h-fit items-center mb-4 gap-4">
                      <span>
                        <ShoppingOutlined />
                      </span>
                      <h3 className="text-[20px] mt-2">Bagasi</h3>
                    </div>
                    <div className="flex w-full gap-2 flex-col">
                      {passNum.map((item, i) => (
                        <div className="flex flex-col gap-2">
                          <p>Penumpang {i + 1}</p>
                          <Luggages
                            handleChange={(e) => handleChangeBag1(e, i)}
                          />
                        </div>
                      ))}
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
                    <ModalSeatBussines
                      isModalOpen={isModalSeatOpen}
                      handleCancel={handleCancelSeat}
                      numberSeat={seatNumber()}
                    />
                  </div>
                </div>
                <ModalMethodPayment
                  showModalBayar={showModalBayar}
                  dana={dana}
                  isModalBayarOpen={isModalBayarOpen}
                  handleBayarOk={handleBayarOk}
                  handleBayarCancel={handleBayarCancel}
                />
              </div>
              <DetailPayment
                showModal={showModal}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
                harga={harga()}
              />
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
