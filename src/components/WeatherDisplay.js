// src/components/WeatherDisplay.js

import React from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #357abd;
  }
`;

const WeatherDisplay = ({ weatherData, addFavorite }) => {
  return (
    <WeatherContainer>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <Button onClick={addFavorite}>Add to Favorites</Button>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
