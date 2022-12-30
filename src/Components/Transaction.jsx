import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import TransactionBusiness from "./TransactionBusiness";
import TransactionEconomy from "./TransactionEconomy";
import TransactionReturn from "./TransactionReturn";

export default function Transaction() {
  const [classFlight, setClassFlight] = useState("");
  const [depart, setClassDepart] = useState(false);
  const [returnn, setClassReturn] = useState(false);

  useEffect(() => {
    setClassDepart(JSON.parse(localStorage.getItem("classDepart")));
    setClassReturn(JSON.parse(localStorage.getItem("classReturn")));
    setClassFlight(JSON.parse(localStorage.getItem("class")));
  }, []);

  return (
    <React.Fragment>
      {depart && returnn ? (
        <>
         <TransactionReturn/>
        </>
      ) : (
        <>
          {classFlight.class === "BUSINESS" ? <TransactionBusiness /> : null}
          {classFlight.class === "ECONOMY" ? <TransactionEconomy /> : null}
        </>
      )}
    </React.Fragment>
  );
}
