import React, { useContext, } from 'react';
import PlayerCard from './PlayerCard';
import ScoreForm from './ScoreForm';
import {PlayersContext} from '../contexts/playerContext';
import ScoreContextProvider from '../contexts/scoreContext';
import PlayerList from './PlayerList';


const Dashboard = () => {

    // const { players } = useContext(PlayersContext);
    // let playerList = players.map( player => {
    //     return <PlayerCard className="PlayerCard" key={player.id} player={player} />  
    // })        

    return (
        <div className="Dashboard row">
            <PlayerList />
            <ScoreContextProvider>
             <ScoreForm />
            </ScoreContextProvider>
        </div>
    )
}

export default Dashboard;
