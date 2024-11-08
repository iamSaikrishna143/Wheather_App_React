// FavoritesTable.js
import React from "react";
import styled from "styled-components";

const Table = styled.table`
  margin-top: 2rem;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #4a90e2;
  color: white;
  padding: 0.75rem;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #ddd;
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #c0392b;
  }
`;

const FavoritesTable = ({ favorites, removeFavorite }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>City</TableHeader>
          <TableHeader>Temperature (°C)</TableHeader>
          <TableHeader>Condition</TableHeader>
          <TableHeader>Actions</TableHeader>
        </tr>
      </thead>
      <tbody>
        {favorites.map((fav) => (
          <TableRow key={fav.id}>
            <TableData>{fav.city}</TableData>
            <TableData>{fav.temp}</TableData>
            <TableData>{fav.description}</TableData>
            <TableData>
              <RemoveButton onClick={() => removeFavorite(fav.id)}>
                Remove
              </RemoveButton>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default FavoritesTable;
