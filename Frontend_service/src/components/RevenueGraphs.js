import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchIssues, fetchComponents } from '../services/api';

const RevenueGraphs = () => {
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

  const calculateRevenue = (period) => {

    const revenueData = [];
    for (let i = 1; i <= 12; i++) {
      const revenue = issues.reduce((acc, issue) => {
        const component = components.find((c) => c.id === issue.component);
        if (component) {
          return acc + parseFloat(component.price);
        }
        return acc;
      }, 0);
      revenueData.push({ month: `Month ${i}`, revenue });
    }
    return revenueData;
  };

  const data = calculateRevenue('monthly');

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#8884d8" />
    </BarChart>
  );
};

export default RevenueGraphs;
