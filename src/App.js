import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Pages/Homepage";
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
  );
}

export default App;
