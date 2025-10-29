import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setWeather(null);

    const apiKey = "138932976e50013f4e073bb649b90f25"; // replace with your real key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="title">
  <img src="https://cdn-icons-png.flaticon.com/128/3767/3767039.png" alt="weather-logo" className="cloud-icon"/>Weather App</h1>

      <SearchBar onSearch={fetchWeather} />
      {loading && <Loader />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
