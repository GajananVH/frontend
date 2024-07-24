import React, { useState } from 'react';
import { createVehicle } from '../services/api';

const AddVehicle = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createVehicle({ make, model, year });
    setMake('');
    setModel('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default AddVehicle;
