import React from "react";
import findIcon from "./helper";

function Location({ data, location, stateSetter }) {
  const theCity = data.find((city) => city.city === location);

  return (
    <div className="card">
      <h2>Your Location: </h2>
      <div className="img-container">
        <img
          className="card-img-top"
          src={findIcon(theCity.forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{theCity.city}</h3>
        <h5 className="card-text">{theCity.temperature}</h5>
        <h5 className="card-text">{theCity.forecast}</h5>
      </div>
    </div>
  );
}

module.exports = Location;
