import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Update from "../Update";
import "../../App.css";

function Profile() {
  return (
    <div className="profile">
      <div className="container my-2 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <Update />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
