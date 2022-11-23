import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

function Update() {
  return (
    <div>
      <div className="card my-2" style={{ borderRadius: "20px", border: "0px", padding: "20px" }}>
        <div className="card-body">
          <h4 className="">Edit Profile</h4>
          <p className="">Change your profile right here</p>
          <div className="mb-3">
            <h6 className="">First Name</h6>
            <input className="form-control" id="exampleFormControlInput1" placeholder="Change First Name" />
            <h6 className="">Last Name</h6>
            <input className="form-control" id="exampleFormControlInput1" placeholder="Change Last Name" />
            <h6 className="">Date Of Brith</h6>
            <input className="form-control" id="exampleFormControlInput1" placeholder="Change Date of birth" />
            <h6 className="">Gender</h6>
            <input className="form-control" id="exampleFormControlInput1" placeholder="Change Gender" />
            <h6 className="">Password</h6>
            <input className="form-control" id="exampleFormControlInput1" placeholder="Change Password" />
          </div>
          <div className="d-grid">
            <button className="col-md-4 btn btn-primary">Save</button>
          </div>
          <button className="btn btn-outline-danger d-flex ms-auto mt-3 ">Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Update;
