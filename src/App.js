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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
