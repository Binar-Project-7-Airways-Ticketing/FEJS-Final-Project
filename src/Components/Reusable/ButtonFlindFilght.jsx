import React from "react";

export default function ButtonFlindFilght(props) {
  return (
    <div className="find">
      <button onClick={props.handle} className="btn-flight">
        <h5 >{props.value}</h5>
      </button>
    </div>
  );
}
