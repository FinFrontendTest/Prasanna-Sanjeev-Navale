import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 1000;

  label {
    margin-bottom: 5px;
    color: #000;
  }

  input {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
    background-color: #d1d1d1;
    border: none;
  }

  button {
    padding: 10px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    border: none;
  }
`;

const EditModal = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <StyledModalOverlay />
          <StyledModal>
            <h2>Edit Row</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label><br/>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
              /><br/>

              <label htmlFor="email">Email:</label><br/>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
              /><br/>

              <label htmlFor="contact">Contact:</label><br/>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact || ''}
                onChange={handleChange}
              /><br/>

              <label htmlFor="weekday">Weekday:</label><br/>
              <input
                type="text"
                id="weekday"
                name="weekday"
                value={formData.weekday || ''}
                onChange={handleChange}
              /><br/>

              <label htmlFor="dob">Date of Birth:</label><br/>
              <input
                type="text"
                id="dob"
                name="dob"
                value={formData.dob || ''}
                onChange={handleChange}
              /><br/>

              <label htmlFor="gender">Gender:</label><br/>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender || ''}
                onChange={handleChange}
              /><br/>
              <button type="submit">Update</button>
            </form>
          </StyledModal>
        </>
      )}
    </>
  );
};

export default EditModal;