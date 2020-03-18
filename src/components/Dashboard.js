import React, { useContext, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import ScoreForm from './ScoreForm';
import {PlayersContext} from '../contexts/playerContext';
import ScoreContextProvider from '../contexts/scoreContext';


const Dashboard = props => {

    const { players, activePlayerIndex, setActivePlayerIndex } = useContext(PlayersContext);
    let playerList = players.map( player => {
        return <PlayerCard className="PlayerCard" key={player.id} player={player} />  
    })        

    return (
        <div className="PlayerCard-container">
                <ScoreContextProvider>
                 <ScoreForm />
                </ScoreContextProvider>
            {playerList}
        </div>
    )
}

export default Dashboard;
