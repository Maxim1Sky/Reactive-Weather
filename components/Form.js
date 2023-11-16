import React from "react";
import Locaion from "./Location";
import { useState } from "react";

function Form({ location, setLocation }) {
  const [typedLocation, setTypedLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(typedLocation);
    setTypedLocation("");
  }

  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          // value={location}
          // onChange={(e) => setLocation(e.target.value)}
          placeholder="your location..."
        />
        <button type="submit">Submit</button>
      </form> */}

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label className="city">
            City:
            <input
              onChange={(e) => setTypedLocation(e.target.value)}
              value={typedLocation}
              type="text"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

module.exports = Form;
