import React from "react";

export default function CardResultBooking() {
  return (
    <section className="main-result-booking">
      <div className="container">
        <div className="wrap-result-booking">
          <div className="title-result-booking">
            <h1>Select your departure flight from ..... to ....</h1>
          </div>
          <div className="card-result-booking">
            <div className="wrap-card-result-booking">
              <div className="result-booking">
                <div className="card-class">Economy</div>
                <div className="card-class">Business</div>
              </div>
              <div className="card-detail">
                <button className="btn-detail-flight">Flight Detail</button>
              </div>
            </div>
            <div className="wrap-card-result-booking">
              <div className="result-booking">
                <div className="card-class">Economy</div>
                <div className="card-class">Business</div>
              </div>
              <div className="card-detail">
                <button className="btn-detail-flight">Flight Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
