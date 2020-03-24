import React from 'react'

const PlayerCard = (props) => {
    const {name, startingScore, scoreArr, amountLeftArr} = props.player;

    return (
        <div className="col s2 Card">
            <h2>{name}</h2>
            <h3>{startingScore}</h3>
            <div>
                <ul id="score-left">
                    {amountLeftArr.length > 0 ? amountLeftArr.map( score => <li>{score}</li>) : null}
                </ul>
            </div>
            <div>
                <ul id="score-turn">
                    { scoreArr.length > 0 ? scoreArr.map( score => <li>{score}</li>) : null }
                </ul>
            </div>
        </div>
    )
}

export default PlayerCard
