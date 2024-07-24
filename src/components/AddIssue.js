import React, { useState, useEffect } from 'react';
import { fetchVehicles, fetchComponents, createIssue } from '../services/api';

const AddIssue = () => {
  const [description, setDescription] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [component, setComponent] = useState('');
  const [isRepair, setIsRepair] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const vehiclesData = await fetchVehicles();
      const componentsData = await fetchComponents();
      setVehicles(vehiclesData.data);
      setComponents(componentsData.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createIssue({ description, vehicle, component, isRepair });
    setDescription('');
    setVehicle('');
    setComponent('');
    setIsRepair(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Issue Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
        <option value="">Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v.id} value={v.id}>{`${v.make} ${v.model} (${v.year})`}</option>
        ))}
      </select>
      <select value={component} onChange={(e) => setComponent(e.target.value)}>
        <option value="">Select Component</option>
        {components.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <label>
        <input
          type="checkbox"
          checked={isRepair}
          onChange={(e) => setIsRepair(e.target.checked)}
        />
        Repair
      </label>
      <button type="submit">Add Issue</button>
    </form>
  );
};

export default AddIssue;
