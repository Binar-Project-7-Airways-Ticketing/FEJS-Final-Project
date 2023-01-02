import "./App.css";
import Homepage from "./Components/Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Pages/Login";
import { Register } from "./Components/Pages/Register";
import Bookingpage from "./Components/Pages/Bookingpage";
import Profile from "./Components/Pages/Profile";
import Transaction from "./Components/Transaction";
import FlightStatusPage from "./Components/Pages/FlightStatusPage";
import Review from "./Components/Pages/Review";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/booking/:trip/:cityFrom/:cityTo"
          element={<Bookingpage />}
        />
        <Route path="/flight status" element={<FlightStatusPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/review" element={<Review />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// :from/:to/:trip/:codefrom/:codeto"
