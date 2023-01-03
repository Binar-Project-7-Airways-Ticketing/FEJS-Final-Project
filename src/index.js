import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Components/All.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from "./Components/Feature/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
   
);

reportWebVitals();
