import React, { useState, useReducer } from "react";
import "./styles.css";

const initialState = {
  arrival: "",
  departure: ""
};

let reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  };
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let { arrival, departure } = state;

  let stationSelect = [
    { name: "12th St. Oakland City Center", abbr: "12th" },
    { name: "Ashby (Berkeley)", abbr: "ASHB" },
    { name: "Berryesa", abbr: "BERY" },
    { name: "Castro Valley", abbr: "CAST" },
    { name: "Fremont", abbr: "FRMT" },
    { name: "Hayward", abbr: "HAYW" },
    { name: "Milpitas", abbr: "MLPT" },
    { name: "Orinda", abbr: "ORIN" },
    { name: "Richmond", abbr: "RICH" },
    { name: "Union City", abbr: "UCTY" }
  ];

  let handleSubmit = e => {
    e.preventDefault();

    let stationNames = stationSelect.map(station => station.name);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Departing"
          list="stations"
          value={departure}
          required
        />
        <datalist id="stations">
          {stationSelect.map(station => (
            <option key={station.abbr} value={station.name} />
          ))}
        </datalist>

        <input
          placeholder="Arriving"
          list="companies"
          value={arrival}
          required
        />
        <datalist id="station">
          {stationSelect.map(station => (
            <option key={station.abbr} value={station.name} />
          ))}
        </datalist>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}
