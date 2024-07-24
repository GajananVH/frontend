import React from 'react';
import RegisterComponent from './components/RegisterComponent';
import AddVehicle from './components/AddVehicle';
import AddIssue from './components/AddIssue';
import PriceCalculation from './components/PriceCalculation';
import RevenueGraphs from './components/RevenueGraphs';

function App() {
  return (
    <div className="App">
      <h1>Vehicle Service System</h1>
      <RegisterComponent />
      <AddVehicle />
      <AddIssue />
      <PriceCalculation />
      <RevenueGraphs />
    </div>
  );
}

export default App;
