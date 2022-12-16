import React from "react";

export default function ButtonFindFlight(props) {
  return (
    <div className="find">
      <button onClick={props.handle} className="btn-flight">
        <h6 >{props.value}</h6>
      </button>
    </div>
  );
}
