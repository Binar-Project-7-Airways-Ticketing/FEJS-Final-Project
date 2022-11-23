import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Pages/Homepage";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Update from "./Components/Update";
import Profile from "./Components/Pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Homepage />} />
      <Route path="/update" element={<Profile />} />
    </Routes>
    // <Homepage/>
=======
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
>>>>>>> fe8aa431d4717eb2f8fe5c3de795265d71fe69a9
  );
}

export default App;
