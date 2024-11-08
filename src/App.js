import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import FavoritesTable from "./components/FavoritesTable"; 
import SearchContainer from "./components/SearchCity"; 
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";


const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 2rem;
  background: #f4f4f9;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;


const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [forecastData, setForecastData] = useState([]);


  // Fetch weather data based on the city
  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=650dfe7e04d3822865c5edada3c7d00d`
      );
      const { lon, lat } = response.data.coord;
      setWeatherData(response.data);

      // Fetch 5-day forecast data
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=650dfe7e04d3822865c5edada3c7d00d`
      );
      
      const dailyForecasts = forecastResponse.data.list.filter((_, index) => index % 8 === 0);
      setForecastData(dailyForecasts);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  // Add current weather data to favorites on JSON Server
  const addFavorite = async () => {
    if (!weatherData) return;

    const favorite = {
      city: weatherData.name,
      temp: (weatherData.main.temp - 273.15).toFixed(2), // Convert from Kelvin to Celsius
      description: weatherData.weather[0].description,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/favorites",
        favorite
      );
      setFavorites([...favorites, response.data]);
    } catch (error) {
      console.error("Error adding favorite", error);
    }
  };

  // Remove city from favorites on JSON Server
  const removeFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/favorites/${id}`);
      setFavorites(favorites.filter((fav) => fav.id !== id));
    } catch (error) {
      console.error("Error removing favorite", error);
    }
  };

  // Load favorites on mount
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:3001/favorites");
        setFavorites(response.data);
      } catch (error) {
        console.error("Error loading favorites", error);
      }
    };

    loadFavorites();
  }, []);

  return (
    <AppContainer>
      <Title>Weather App</Title>

      {/* Search for city weather */}
      <SearchContainer
        city={city}
        setCity={setCity}
        fetchWeatherData={fetchWeatherData}
      />

      {/* Display current weather data */}
      {weatherData && (
        <WeatherDisplay weatherData={weatherData} addFavorite={addFavorite} />
      )}
      {/* Display 5-day forecast data */}
      {forecastData.length > 0 && <ForecastDisplay forecastData={forecastData} />}

      {/* Display favorites in a table */}
      <FavoritesTable favorites={favorites} removeFavorite={removeFavorite} />

    </AppContainer>
  );
};

export default App;
