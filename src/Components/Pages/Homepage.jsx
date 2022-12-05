import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MainHome from "../Main/MainHome";
import Navbar from "../Navbar";
import "./Pages.css";
export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <MainHome/>
      <Footer />
    </div>
  );
}
