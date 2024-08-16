import React from "react";

const CitySelector = ({ cities, onCityChange }) => {
  return (
    <div>
      <h2>Select a City:</h2>
      <select onChange={(e) => onCityChange(e.target.value)}>
        <option value="">--Choose a City--</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
