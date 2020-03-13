import React from 'react'

const PlayerCard = (props) => {
    const {firstname, lastname, currentScore} = props.player;
    return (
        <div className="Card">
            <h1>{firstname} {lastname}</h1>
            <div>
                <h1>{currentScore}</h1>
            </div>
        </div>
    )
}

export default PlayerCard
