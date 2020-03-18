import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PlayersContextProvider from './contexts/playerContext';
import { LayoutContext } from './contexts/layoutContext';

function App() {
  const {addPlayer} = useContext(LayoutContext)
  return (
    <div className="App Dashboard">

        <Navbar />
        <PlayersContextProvider>
          {addPlayer ? "player form" : <Dashboard/>}
        </PlayersContextProvider>  
    </div>
  );
}

export default App;
