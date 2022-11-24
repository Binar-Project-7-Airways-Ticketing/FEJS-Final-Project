import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Pages/Login";
import { Register } from "./Components/Pages/Register";
import Bookingpage from "./Components/Pages/Bookingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Bookingpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
