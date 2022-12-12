import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Pages/Login";
import { Register } from "./Components/Pages/Register";
import Bookingpage from "./Components/Pages/Bookingpage";
import Profile from "./Components/Pages/Profile";
import Transaction from "./Components/Transaction";
import FlightStatusPage from "./Components/Pages/FlightStatusPage";
import axios from "axios";
import Review from "./Components/Pages/Review";
import BookinngPending from "./Components/BookingPending";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Bookingpage />} />
        <Route path="/flight status" element={<FlightStatusPage/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/review" element={<Review/>} />
        <Route path="/bookingpending" element={<BookinngPending/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;