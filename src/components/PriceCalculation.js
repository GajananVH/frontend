import React, { useState, useEffect } from 'react';
import { fetchIssues, fetchComponents } from '../services/api';

const PriceCalculation = () => {
  const [issues, setIssues] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const issuesData = await fetchIssues();
      const componentsData = await fetchComponents();
      setIssues(issuesData.data);
      setComponents(componentsData.data);
    };
    fetchData();
  }, []);

  const calculateTotalPrice = () => {
    return issues.reduce((acc, issue) => {
      const component = components.find((c) => c.id === issue.component);
      return acc + (component ? parseFloat(component.price) : 0);
    }, 0);
  };

  return (
    <div>
      <h2>Total Price: {calculateTotalPrice().toFixed(2)}</h2>
    </div>
  );
};

export default PriceCalculation;
