import React from "react";
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import Location from "./components/Location";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("Los Angeles");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} />
      <div className="app">
        <Location location={location} />
        {cities.map((city, index) => (
          <>
            <WeatherCard key={index} city={city} />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
