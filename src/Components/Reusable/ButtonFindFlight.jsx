import React from "react";

export default function ButtonFindFlight(props) {
  return (
    <button onClick={props.handle} className="w-full bg-brand-yellow text-brand-whiteLight h-12 rounded-lg ">
      <h5 className="sm:text-lg sm:font-bold">{props.value}</h5>
    </button>
  );
}
