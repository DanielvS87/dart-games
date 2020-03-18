import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PlayersContextProvider from './contexts/playerContext';

function App() {
  return (
    <div className="App Dashboard">
      <Navbar />
        <PlayersContextProvider>
          <Dashboard/>
        </PlayersContextProvider>      
    </div>
  );
}

export default App;
