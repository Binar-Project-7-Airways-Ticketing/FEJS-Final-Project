import React, { useState, useEffect} from "react";
import TransactionBusiness from "./TransactionBusiness";
import TransactionEconomy from "./TransactionEconomy";
import TransactionReturn from "./TransactionReturn";

export default function Transaction() {

  const [depart, setClassDepart] = useState(false);
  const [returnn, setClassReturn] = useState(false);

  useEffect(() => {
    setClassDepart(JSON.parse(localStorage.getItem("classDepart")));
    setClassReturn(JSON.parse(localStorage.getItem("classReturn")));
  }, []);

  return (
    <React.Fragment>
      {depart && returnn ? (
        <>
         <TransactionReturn/>
        </>
      ) : (
        <>
          {depart.class === "BUSINESS" ? <TransactionBusiness /> : null}
          {depart.class === "ECONOMY" ? <TransactionEconomy /> : null}
        </>
      )}
    </React.Fragment>
  );
}
