import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App Dashboard">
      <Navbar />
      <Dashboard/>
    </div>
  );
}

export default App;
