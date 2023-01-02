import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Components/All.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import axios from "axios";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from "./Components/Feature/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
   
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
