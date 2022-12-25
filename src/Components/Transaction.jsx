import React, { useState,useEffect, useMemo } from "react";
import TransactionBusiness from "./TransactionBusiness";
import TransactionEconomy from "./TransactionEconomy";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {hours}
        </span>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {minutes}
        </span>
        <span className="flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow">
          {seconds}
        </span>
      </>
    );
  }
};

export default function Transaction() {
  const [classFlight, setClassFlight] = useState("");

  useEffect(() => {
    const Class = JSON.parse(localStorage.getItem("class"));

    setClassFlight(Class);
  }, []);

  return (
    <React.Fragment>
      {/* <TransactionBusiness/> */}
      {classFlight.class === "BUSINESS" ? <TransactionBusiness /> : null}
      {classFlight.class === "ECONOMY" ? <TransactionEconomy /> : null}
    </React.Fragment>
  );
}
