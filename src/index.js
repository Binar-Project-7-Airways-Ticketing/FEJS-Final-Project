import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
=======
import "./Components/All.css";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/reset.css";
import App from "./App";
>>>>>>> fe8aa431d4717eb2f8fe5c3de795265d71fe69a9

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
