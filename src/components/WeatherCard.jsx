import React from "react";
import "./WeatherCard.css";

function WeatherCard({ data }) {
  const { name, main, weather } = data;
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather[0].main}</p>
      <h3>{Math.round(main.temp)}°C</h3>
      <p>Humidity: {main.humidity}%</p>
      <p>Feels like: {Math.round(main.feels_like)}°C</p>
    </div>
  );
}

export default WeatherCard;
