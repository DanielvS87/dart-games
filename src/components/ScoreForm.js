import React, { useEffect, useContext } from 'react'
import { PlayersContext } from '../contexts/playerContext'
import { ScoreContext } from '../contexts/scoreContext'

const ScoreForm = (props) => {
     const {players} = useContext(PlayersContext)
     const {scoreArr, setScoreArr, totalScore, setTotalScore} = useContext(ScoreContext)


    const alterScore = e => {
        const inputValue = e.target.value
        let index = e.target.id
        index = index === "dartOne" ? 0 : index==="dartTwo" ? 1 : 2;
        setScoreArr( prev => {
            prev[index] = parseFloat(inputValue)
            console.log(prev);
            return prev
        })
    }

    useEffect(()=>{
        console.log("hello")
    },[scoreArr])

    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <h3>Score Round</h3>
                <div className="form-section">
                    <label htmlFor="score1">Dart One: </label>
                    <br/>
                    <input 
                        id="dartOne" 
                        name="score1" 
                        placeholder="Enter Score Dart One" 
                        type="number"
                        onChange={alterScore}
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="score2">Dart Two: </label><br/>
                    <input 
                        id="dartTwo"
                        name="score2" 
                        placeholder="Enter Score Dart Two" 
                        type="number"
                        onChange={alterScore}
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="score3">Dart Three: </label><br/>
                    <input 
                        id="dartThree" 
                        name="score3" 
                        placeholder="Enter Score Dart Three" 
                        type="number" 
                        onChange={alterScore}
                    />
                </div>
                <div>
                    <input type="submit" value="Enter Score"/>
                </div>
            </form>
            {scoreArr}
        </div>
    )
}

export default ScoreForm
