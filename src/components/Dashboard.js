import React, {useState} from 'react';
import PlayerCard from './PlayerCard';
import ScoreForm from './ScoreForm';

const Dashboard = () => {
    const [ players, setPlayers ] = useState([
        {   
            firstname: "Daniel", 
            lastname: "van Sleen", 
            id: 0, 
            startingScore: 501,
            currentScore: 501,
            scoreArray: []
        },
        {
            firstname: "Tim", 
            lastname: "Muller", 
            id: 1, 
            currentScore: 501,
            startingScore: 501,
            scoreArray: []
        },
        {
            firstname: "Brian", 
            lastname: "Tuohy", 
            id: 2, 
            startingScore: 501,
            currentScore: 501,
            scoreArray: []
        },
    ])

    let playerList = players.map( player => {
        return <PlayerCard className="PlayerCard" key={player.id} player={player} />  
    })

    return (
        <div className="PlayerCard-container">
            {playerList}
            <ScoreForm players={players}/>
        </div>
    )
}

export default Dashboard;
