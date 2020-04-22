import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleLineChart from './Components/SimpleLineChart/SimpleLineChart';
import TwoLevelPieChart from './Components/TwoLevelPieChart/TwoLevelPieChart';

function App() {
  return (
    <div className="App">
      <h2>React Chart</h2>
      <SimpleLineChart></SimpleLineChart>
      <TwoLevelPieChart></TwoLevelPieChart>
    </div>
  );
}

export default App;
