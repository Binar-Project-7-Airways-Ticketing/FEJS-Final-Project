import React from "react";
import logo from "../image/logo3.png";
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="lg:flex gap-x-16 gap-y-8 w-full h-full text-brand-whiteLight sm:grid grid grid-cols-2 py-10 ">
          <div style={{ width: "100%" }}>
            <img style={{ width: "300px" }} src={logo}></img>
            <p>The general airline Aviation Operator and Services Provider. Delivering World-Class Services in Aircraft sales, completiones, management, flight support, charter and FBO-Indonesia.</p>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <h5>ADDRESS</h5>
            <p>Jl. Asia Afrika No.19, RT.1/RW.3, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270</p>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h5>FOLLOW US</h5>
            <svg width="0" height="0">
              <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#FFDC80" offset="0%" />
                <stop stopColor="#FCAF45" offset="16%" />
                <stop stopColor="#F77737" offset="26%" />
                <stop stopColor="#F56040" offset="36%" />
                <stop stopColor="#FD1D1D" offset="46%" />
                <stop stopColor="#E1306C" offset="56%" />
                <stop stopColor="#C13584" offset="66%" />
                <stop stopColor="#833AB4" offset="76%" />
                <stop stopColor="#5B51D8" offset="86%" />
                <stop stopColor="#405DE6" offset="100%" />
              </linearGradient>
            </svg>
            <svg width="0" height="0">
              <linearGradient id="twitter-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#F5F8FA" offset="20%" />
                <stop stopColor="#1DA1F2" offset="70%" />
              </linearGradient>
            </svg>
            <div className="flex items-center justify-start gap-5 ">
              <BsInstagram size={25} style={{ fill: "url(#instagram-gradient)"}} />
              <BsTwitter size={25} style={{ fill: "url(#twitter-gradient)"}} />
              <BsFacebook className="facebook" />
              <BsYoutube className="youtube" />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h5>PHONES</h5>
            <p>+62 87778580841</p>
            <p>+62 87778580841</p>
            <p>+62 87778580841</p>
            <p>+62 87778580841</p>
            <p>+62 87778580841</p>
            <p>+62 87778580841</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
