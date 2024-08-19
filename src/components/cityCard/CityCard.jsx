import React from "react";

const CityCard = ({ city }) => {
  if (!city) {
    return <div>Select a city to see its details.</div>;
  }

  return (
    <div
      className="city-card"
      style={{ backgroundColor: "green", color: "white" }}
    >
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={`${city.name}`} />
      <p>{city.description}</p>
      <h3>Interesting Facts:</h3>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
