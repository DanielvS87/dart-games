import React, { useContext, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import ScoreForm from './ScoreForm';
import {PlayersContext} from '../contexts/playerContext';


const Dashboard = props => {

    console.log(useContext(PlayersContext));
    const { players, activePlayerIndex, setActivePlayerIndex } = useContext(PlayersContext);
    let playerList = players.map( player => {
        return <PlayerCard className="PlayerCard" key={player.id} player={player} />  
    })

        

    return (
        <div className="PlayerCard-container">
                            {/* <button 
                    onClick={()=>{
                        (players.length-1 === activePlayerIndex) ? setActivePlayerIndex(0) : setActivePlayerIndex(prev=>prev+1);
                                
                    }}
                    value="nextPlayer"
                /> */}
                {playerList}
                <ScoreForm />

        </div>
    )
}

export default Dashboard;
