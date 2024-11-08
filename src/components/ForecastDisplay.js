// src/components/ForecastDisplay.js

import React from "react";
import styled from "styled-components";

const ForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const ForecastCard = styled.div`
  background: #e9e9ef;
  padding: 1rem;
  width: 150px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ForecastDate = styled.p`
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ForecastTemp = styled.p`
  font-size: 1.2rem;
  color: #4a90e2;
  margin-bottom: 0.5rem;
`;

const ForecastDisplay = ({ forecastData }) => {
  return (
    <ForecastContainer>
      {forecastData.map((day, index) => (
        <ForecastCard key={index}>
          <ForecastDate>
            {new Date(day.dt * 1000).toLocaleDateString()}
          </ForecastDate>
          <ForecastTemp>
            {(day.main.temp - 273.15).toFixed(2)}°C
          </ForecastTemp>
          <p>{day.weather[0].description}</p>
        </ForecastCard>
      ))}
    </ForecastContainer>
  );
};

export default ForecastDisplay;
