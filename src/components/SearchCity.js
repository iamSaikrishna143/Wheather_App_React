// SearchContainer.js
import React from "react";
import styled from "styled-components";

const SearchContainerWrapper = styled.div`
  margin: 2rem 0;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 60%;
  font-size: 1rem;
  margin-right: 1rem;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
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

const SearchContainer = ({ city, setCity, fetchWeatherData }) => {
  return (
    <SearchContainerWrapper>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <Button onClick={() => fetchWeatherData(city)}>Get Weather</Button>
    </SearchContainerWrapper>
  );
};

export default SearchContainer;
