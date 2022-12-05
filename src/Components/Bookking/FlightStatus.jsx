import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonFlindFilght from '../Reusable/ButtonFlindFilght'

export default function FlightStatus() {
  const navigate = useNavigate()
  const handleFindStatusFlight = () => {
    navigate("/flight status");
  };
  return (
    <div className="wrap-detail-booking">
      <ButtonFlindFilght handle={handleFindStatusFlight} value={"Find status flight"}/>
    </div>
  )
}
