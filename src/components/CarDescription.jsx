import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/CarDescription.css";

function CarDescription() {
  const state = useSelector((state) => state);

  console.log(state.selectedItem[0].carFuelType);
  return (
    <div>
      <div className="carDescription">
        <img src={state.selectedItem[0].carImage} />
        <p>{state.selectedItem[0].carEngineSize}</p>
        <p>{state.selectedItem[0].carFuelType}</p>
        <p>{state.selectedItem[0].carTransmission}</p>
      </div>
    </div>
  );
}

export default CarDescription;
