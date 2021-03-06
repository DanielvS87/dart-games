import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PlayersContextProvider from './contexts/playerContext';
import { LayoutContext } from './contexts/layoutContext';
import AddPlayerForm from './components/AddPlayerForm';

function App() {
  const {addPlayer} = useContext(LayoutContext)
  return (
    <div className="App Dashboard row">

        <Navbar />
        <PlayersContextProvider>
          {addPlayer ? <AddPlayerForm/> : <Dashboard/>}
        </PlayersContextProvider>  
    </div>
  );
}

export default App;
