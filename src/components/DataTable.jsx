import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #4caf50;
    color: white;
  }

  tr {
    background-color: #f5f5f5;
    color: #080808;
  }

  button {
    padding: 5px 10px;
    font-size: 14px;
    margin-right: 5px;
    cursor: pointer;
    border: none;
    background-color: #DC7633;
  }
`;

const DataTable = ({ data, onEdit, onDelete }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Weekday</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
            <td>{item.weekday}</td>
            <td>{item.dob}</td>
            <td>{item.gender}</td>
            <td>
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default DataTable;