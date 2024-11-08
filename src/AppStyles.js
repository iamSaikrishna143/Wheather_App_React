// AppStyles.js
import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 2rem;
  background: #f4f4f9;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const SearchContainer = styled.div`
  margin: 2rem 0;
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

