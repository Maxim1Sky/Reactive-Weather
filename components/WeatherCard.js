import React from "react";
import sunny from "../assets/Sunny.svg";
import findIcon from "./helper";

function WeatherCard({ city: { city, temperature, forecast } }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={findIcon(forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{city}</h3>
        <h5 className="card-text">{temperature}</h5>
        <h5 className="card-text">{forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
module.exports = WeatherCard;
