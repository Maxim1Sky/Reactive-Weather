import React from "react";
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("Los Angeles");
  function stateSetter(loc) {
    setLocation(loc);
  }

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {cities.map((city, index) => (
          <>
            <WeatherCard key={index} city={city} />
            <Location
              data={cities}
              location={location}
              stateSetter={stateSetter}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
