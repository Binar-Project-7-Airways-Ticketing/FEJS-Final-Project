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
axios.interceptors.request.use(function (config) {
  console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});