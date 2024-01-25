import React , { useState } from 'react'
import Form from './components/Form';
import DataTable from './components/DataTable';
import EditModal from './components/EditModal';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
`;

const App = () => {
  const [formData, setFormData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = (data) => {
    if (editData !== null) {
      // Update existing row
      const updatedData = formData.map((item, index) =>
        index === editData ? data : item
      );
      setFormData(updatedData);
      setEditData(null);
    } else {
      // Add new row
      setFormData([...formData, data]);
    }
    setShowTable(true);
    // Close the modal
    setModalOpen(false);
  };

  const handleEdit = (index) => {
    // Set data for editing
    setEditData(index);
    // Open the modal
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    // Delete row
    const updatedData = formData.filter((item, i) => i !== index);
    setFormData(updatedData);
    setEditData(null);

    // If there are no rows left, hide the table
    setShowTable(updatedData.length > 0);
  };

  const handleCloseModal = () => {
    // Close the modal without saving changes
    setModalOpen(false);
    // Check if modal was closed after a submission
    if (!isModalOpen) {
      setEditData(null);
    }
  };

  const handleUpdateModal = (data) => {
    // Update the row data and close the modal
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[editData] = data;
      return newData;
    });
    setModalOpen(false);
    setEditData(null);
  };

  return (
    <Container>
      {!showTable ? (
        <Form onSubmit={handleFormSubmit} editData={formData[editData]} />
      ) : null}
      {showTable && formData.length > 0 && (
        <DataTable data={formData} onEdit={handleEdit} onDelete={handleDelete} />
      )}
      <EditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleUpdateModal}
        initialValues={formData[editData]}
      />
    </Container>
  );
};

export default App;