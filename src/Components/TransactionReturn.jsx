import React, { useEffect } from "react";
import { useState } from "react";
import TransactionBusiness from "./TransactionBusiness";
import TransactionEconomy from "./TransactionEconomy";

export default function TransactionReturn() {
  const [depart, setClassDepart] = useState(false);
  const [returnn, setClassReturn] = useState(false);
  const [showReturnn, setShowReturn] = useState(false);

  useEffect(() => {
    setClassDepart(JSON.parse(localStorage.getItem("classDepart")));
    setClassReturn(JSON.parse(localStorage.getItem("classReturn")));
  }, []);
  return (
    <>
      {showReturnn ? (
        <>
          {returnn.class === "ECONOMY" ? (
            <TransactionEconomy />
          ) : (
            <TransactionBusiness />
          )}
        </>
      ) : (
        <>
          {depart.class === "ECONOMY" ? (
            <TransactionEconomy />
          ) : (
            <TransactionBusiness />
          )}
        </>
      )}
    </>
  );
}
