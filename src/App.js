import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
