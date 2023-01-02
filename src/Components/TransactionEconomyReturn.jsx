import React, { useState, useMemo } from "react";
import { ShoppingOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Empty, Radio } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Countdown from "react-countdown";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import { loadLuggagesIdPlane } from "./Feature/Models/LuggageSliceIdPlane";
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
import { updateSeats } from "./Feature/Models/Seat";
import { FaTrashAlt } from "react-icons/fa";
import { createBookingReturn } from "./Feature/Models/CreateBooking";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
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

export default function TransactionEconomyReturn() {
  const { luggagesPlane } = useSelector((state) => state.luggagePlane);
  const { SeatsPlaneCount } = useSelector((state) => state.seatsPlaneCount);
  const { category } = useSelector((state) => state.category);
  const { users } = useSelector((state) => state.getUser);
  const { Price } = useSelector((state) => state.getPrice);

  const navigate = useNavigate();

  const [showReturnn, setShowReturn] = useState(false);
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
      let seat1 = seatNumber1.stateSeat;

      if (seat1 === "BOOKED") {
        seat1 = "NOT_AVAILABLE";
      }

      let updateSeat1 = {
        id: seatNumber1.idSeat,
        state: seat1,
      };

      dispatch(updateSeats(updateSeat1));
      let booking = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: returnFlight,
          },
        ],
        price:
          Price.economy * passenger +
          (passenger1.ageCategory.price + bagasi1.price),
        payment: {
          paymentMethod: "BRI",
        },
        user: token ? users : null,
      };

      dispatch(createBookingReturn(booking));
    }
    if (passenger === 2) {
      let seat1 = seatNumber1.stateSeat;

      if (seat1 === "BOOKED") {
        seat1 = "NOT_AVAILABLE";
      }

      let updateSeat1 = {
        id: seatNumber1.idSeat,
        state: seat1,
      };
      let seat2 = seatNumber2.stateSeat;

      if (seat2 === "BOOKED") {
        seat2 = "NOT_AVAILABLE";
      }

      let updateSeat2 = {
        id: seatNumber2.idSeat,
        state: seat2,
      };
      dispatch(updateSeats(updateSeat1));
      dispatch(updateSeats(updateSeat2));

      let booking = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: returnFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: returnFlight,
          },
        ],
        price:
          Price.economy * passenger +
          (passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            bagasi1.price +
            bagasi2.price),
        payment: {
          paymentMethod: "BRI",
        },
        user: token ? users : null,
      };
      dispatch(createBookingReturn(booking));
    }
    if (passenger === 3) {
      let seat1 = seatNumber1.stateSeat;

      if (seat1 === "BOOKED") {
        seat1 = "NOT_AVAILABLE";
      }

      let updateSeat1 = {
        id: seatNumber1.idSeat,
        state: seat1,
      };
      let seat2 = seatNumber2.stateSeat;

      if (seat2 === "BOOKED") {
        seat2 = "NOT_AVAILABLE";
      }

      let updateSeat2 = {
        id: seatNumber2.idSeat,
        state: seat2,
      };
      let seat3 = seatNumber3.stateSeat;

      if (seat3 === "BOOKED") {
        seat3 = "NOT_AVAILABLE";
      }

      let updateSeat3 = {
        id: seatNumber3.idSeat,
        state: seat3,
      };
      dispatch(updateSeats(updateSeat1));
      dispatch(updateSeats(updateSeat2));
      dispatch(updateSeats(updateSeat3));
      let booking = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: returnFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: returnFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: returnFlight,
          },
        ],
        price:
          Price.economy * passenger +
          (passenger1.ageCategory.price +
            passenger2.ageCategory.price +
            bagasi1.price +
            bagasi2.price +
            passenger3.ageCategory.price +
            bagasi3.price),
        payment: {
          paymentMethod: "BRI",
        },
        user: token ? users : null,
      };
      dispatch(createBookingReturn(booking));
    }
    if (passenger === 4) {
      let seat1 = seatNumber1.stateSeat;

      if (seat1 === "BOOKED") {
        seat1 = "NOT_AVAILABLE";
      }

      let updateSeat1 = {
        id: seatNumber1.idSeat,
        state: seat1,
      };
      let seat2 = seatNumber2.stateSeat;

      if (seat2 === "BOOKED") {
        seat2 = "NOT_AVAILABLE";
      }

      let updateSeat2 = {
        id: seatNumber2.idSeat,
        state: seat2,
      };
      let seat3 = seatNumber3.stateSeat;

      if (seat3 === "BOOKED") {
        seat3 = "NOT_AVAILABLE";
      }

      let updateSeat3 = {
        id: seatNumber3.idSeat,
        state: seat3,
      };
      let seat4 = seatNumber4.stateSeat;

      if (seat4 === "BOOKED") {
        seat4 = "NOT_AVAILABLE";
      }

      let updateSeat4 = {
        id: seatNumber4.idSeat,
        state: seat4,
      };
      dispatch(updateSeats(updateSeat1));
      dispatch(updateSeats(updateSeat2));
      dispatch(updateSeats(updateSeat3));
      dispatch(updateSeats(updateSeat4));
      let booking = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: returnFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: returnFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: returnFlight,
          },
          {
            luggage: bagasi4,
            passenger: passenger4,
            seat: seatNumber4,
            flight: returnFlight,
          },
        ],
        price:
          Price.economy * passenger +
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
        user: token ? users : null,
      };
      dispatch(createBookingReturn(booking));
    }
    if (passenger === 5) {
      let seat1 = seatNumber1.stateSeat;

      if (seat1 === "BOOKED") {
        seat1 = "NOT_AVAILABLE";
      }

      let updateSeat1 = {
        id: seatNumber1.idSeat,
        state: seat1,
      };
      let seat2 = seatNumber2.stateSeat;

      if (seat2 === "BOOKED") {
        seat2 = "NOT_AVAILABLE";
      }

      let updateSeat2 = {
        id: seatNumber2.idSeat,
        state: seat2,
      };
      let seat3 = seatNumber3.stateSeat;

      if (seat3 === "BOOKED") {
        seat3 = "NOT_AVAILABLE";
      }

      let updateSeat3 = {
        id: seatNumber3.idSeat,
        state: seat3,
      };
      let seat4 = seatNumber4.stateSeat;

      if (seat4 === "BOOKED") {
        seat4 = "NOT_AVAILABLE";
      }

      let updateSeat4 = {
        id: seatNumber4.idSeat,
        state: seat4,
      };
      let seat5 = seatNumber5.stateSeat;

      if (seat5 === "BOOKED") {
        seat5 = "NOT_AVAILABLE";
      }

      let updateSeat5 = {
        id: seatNumber5.idSeat,
        state: seat5,
      };
      dispatch(updateSeats(updateSeat1));
      dispatch(updateSeats(updateSeat2));
      dispatch(updateSeats(updateSeat3));
      dispatch(updateSeats(updateSeat4));
      dispatch(updateSeats(updateSeat5));
      let booking = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: returnFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: returnFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: returnFlight,
          },
          {
            luggage: bagasi4,
            passenger: passenger4,
            seat: seatNumber4,
            flight: returnFlight,
          },
          {
            luggage: bagasi5,
            passenger: passenger5,
            seat: seatNumber5,
            flight: returnFlight,
          },
        ],
        price:
          Price.economy * passenger +
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
        user: token ? users : null,
      };
      dispatch(createBookingReturn(booking));
    }
    if (passenger === 6) {
      let seat1 = seatNumber1.stateSeat;

      if (seat1 === "BOOKED") {
        seat1 = "NOT_AVAILABLE";
      }

      let updateSeat1 = {
        id: seatNumber1.idSeat,
        state: seat1,
      };
      let seat2 = seatNumber2.stateSeat;

      if (seat2 === "BOOKED") {
        seat2 = "NOT_AVAILABLE";
      }

      let updateSeat2 = {
        id: seatNumber2.idSeat,
        state: seat2,
      };
      let seat3 = seatNumber3.stateSeat;

      if (seat3 === "BOOKED") {
        seat3 = "NOT_AVAILABLE";
      }

      let updateSeat3 = {
        id: seatNumber3.idSeat,
        state: seat3,
      };
      let seat4 = seatNumber4.stateSeat;

      if (seat4 === "BOOKED") {
        seat4 = "NOT_AVAILABLE";
      }

      let updateSeat4 = {
        id: seatNumber4.idSeat,
        state: seat4,
      };
      let seat5 = seatNumber5.stateSeat;

      if (seat5 === "BOOKED") {
        seat5 = "NOT_AVAILABLE";
      }

      let updateSeat5 = {
        id: seatNumber5.idSeat,
        state: seat5,
      };
      let seat6 = seatNumber6.stateSeat;

      if (seat6 === "BOOKED") {
        seat6 = "NOT_AVAILABLE";
      }

      let updateSeat6 = {
        id: seatNumber6.idSeat,
        state: seat6,
      };
      dispatch(updateSeats(updateSeat1));
      dispatch(updateSeats(updateSeat2));
      dispatch(updateSeats(updateSeat3));
      dispatch(updateSeats(updateSeat4));
      dispatch(updateSeats(updateSeat5));
      dispatch(updateSeats(updateSeat6));
      let booking = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: returnFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: returnFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: returnFlight,
          },
          {
            luggage: bagasi4,
            passenger: passenger4,
            seat: seatNumber4,
            flight: returnFlight,
          },
          {
            luggage: bagasi5,
            passenger: passenger5,
            seat: seatNumber5,
            flight: returnFlight,
          },
          {
            luggage: bagasi6,
            passenger: passenger6,
            seat: seatNumber6,
            flight: returnFlight,
          },
        ],
        price:
          Price.economy * passenger +
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
        user: token ? users : null,
      };
      dispatch(createBookingReturn(booking));
    }
    if (passenger === 7) {
      let seat1 = seatNumber1.stateSeat;

      if (seat1 === "BOOKED") {
        seat1 = "NOT_AVAILABLE";
      }

      let updateSeat1 = {
        id: seatNumber1.idSeat,
        state: seat1,
      };
      let seat2 = seatNumber2.stateSeat;

      if (seat2 === "BOOKED") {
        seat2 = "NOT_AVAILABLE";
      }

      let updateSeat2 = {
        id: seatNumber2.idSeat,
        state: seat2,
      };
      let seat3 = seatNumber3.stateSeat;

      if (seat3 === "BOOKED") {
        seat3 = "NOT_AVAILABLE";
      }

      let updateSeat3 = {
        id: seatNumber3.idSeat,
        state: seat3,
      };
      let seat4 = seatNumber4.stateSeat;

      if (seat4 === "BOOKED") {
        seat4 = "NOT_AVAILABLE";
      }

      let updateSeat4 = {
        id: seatNumber4.idSeat,
        state: seat4,
      };
      let seat5 = seatNumber5.stateSeat;

      if (seat5 === "BOOKED") {
        seat5 = "NOT_AVAILABLE";
      }

      let updateSeat5 = {
        id: seatNumber5.idSeat,
        state: seat5,
      };
      let seat6 = seatNumber6.stateSeat;

      if (seat6 === "BOOKED") {
        seat6 = "NOT_AVAILABLE";
      }

      let updateSeat6 = {
        id: seatNumber6.idSeat,
        state: seat6,
      };
      let seat7 = seatNumber7.stateSeat;

      if (seat7 === "BOOKED") {
        seat7 = "NOT_AVAILABLE";
      }

      let updateSeat7 = {
        id: seatNumber7.idSeat,
        state: seat7,
      };
      dispatch(updateSeats(updateSeat1));
      dispatch(updateSeats(updateSeat2));
      dispatch(updateSeats(updateSeat3));
      dispatch(updateSeats(updateSeat4));
      dispatch(updateSeats(updateSeat5));
      dispatch(updateSeats(updateSeat6));
      dispatch(updateSeats(updateSeat7));
      let booking = {
        bookingDetails: [
          {
            luggage: bagasi1,
            passenger: passenger1,
            seat: seatNumber1,
            flight: returnFlight,
          },
          {
            luggage: bagasi2,
            passenger: passenger2,
            seat: seatNumber2,
            flight: returnFlight,
          },
          {
            luggage: bagasi3,
            passenger: passenger3,
            seat: seatNumber3,
            flight: returnFlight,
          },
          {
            luggage: bagasi4,
            passenger: passenger4,
            seat: seatNumber4,
            flight: returnFlight,
          },
          {
            luggage: bagasi5,
            passenger: passenger5,
            seat: seatNumber5,
            flight: returnFlight,
          },
          {
            luggage: bagasi6,
            passenger: passenger6,
            seat: seatNumber6,
            flight: returnFlight,
          },
          {
            luggage: bagasi7,
            passenger: passenger7,
            seat: seatNumber7,
            flight: returnFlight,
          },
        ],
        price:
          Price.economy * passenger +
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
        user: token ? users : null,
      };
      dispatch(createBookingReturn(booking));
    }

    navigate("/ticket");
    localStorage.removeItem("page");
    localStorage.removeItem("number");
    localStorage.removeItem("page1");
    localStorage.removeItem("number1");
    localStorage.removeItem("cityTo");
    localStorage.removeItem("cityFrom");
    localStorage.removeItem("passanger");
    localStorage.removeItem("depart");
    localStorage.removeItem("return");
    localStorage.removeItem("classDepart");
    localStorage.removeItem("classReturn");
    localStorage.removeItem("flightDepart");
    localStorage.removeItem("flightReturn");
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
          Price.economy * passenger +
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
          {(Price.economy * passenger)
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
    const departFl = JSON.parse(localStorage.getItem("depart"));
    const returnFl = JSON.parse(localStorage.getItem("return"));
    const tokenn = localStorage.getItem("token");
    setPassenger(countPass.adults + countPass.child + countPass.infant);
    setClassFlight(JSON.parse(localStorage.getItem("class")));
    setToken(localStorage.getItem("token"))
    setDepart(departFl);
    setReturn(returnFl);
    
    setToken(tokenn)

    dispatch(loadCategory());
    dispatch(loadLuggagesIdPlane(departFl.plane.idPlane));
    dispatch(loadPrice(departFl.idFlight));
    if (tokenn) {
      dispatch(loadUser(localStorage.getItem("id")));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      {returnFlight ? (
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
          <div className="container">
            <div className="text-brand-whiteLight pt-5 pl-3">
              <h4>KePulangan</h4>
            </div>
            <div className="booking-container">
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
                    <ModalSeatEconomy
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
