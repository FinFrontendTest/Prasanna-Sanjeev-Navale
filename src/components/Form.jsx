import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto;
  padding: 2rem;
  background-color: #fff;

  label {
    margin-bottom: 5px;
    color: #040404;
  }

  input {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
    border: none;
    background-color: #d1d1d1;
  }

  select {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
    border: none;
    background-color: #d1d1d1;
    color: #0f0f0f;
  }

  button {
    padding: 15px;
    font-size: 16px;
    background-color: #DC7633;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    margin-top: 10px;
  }
`;

const Form = ({ onSubmit, editData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekday: '',
    dob: '',
    gender: '',
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekday: '',
      dob: '',
      gender: '',
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="contact">Contact:</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />

      <label htmlFor="weekday">Weekday:</label>
      <select
        id="weekday"
        name="weekday"
        value={formData.weekday || ''}
        onChange={handleChange}
      >
        <option value="">Select a weekday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>

      <label htmlFor="dob">Date of Birth:</label>
      <DatePicker
        selected={formData.dob}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"  // You can customize the date format
      />

      <label htmlFor="gender">Gender:</label>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>

      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default Form;