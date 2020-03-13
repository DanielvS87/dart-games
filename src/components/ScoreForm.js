import React, { useState, useEffect } from 'react'

const ScoreForm = (props) => {
    const [players, setPlayers] = useState(props.players)
    const [scoreArr, setScoreArr] = useState([0,0,0]);
    const [totalScore, setTotalScore] = useState(0);
    const [activePlayer, setActivePlayer] = useState('');
    
    const alterScore = e => {
        const placeHolder = e.target.placeholder
        const score = parseFloat(e.target.value);
        const id = e.target.id;
        const index = id === "dartOne" ? 0 : id === "dartTwo" ? 1 : 2
        setScoreArr(prev=>{
            let newArr = prev;
            newArr[index] = score >= 0 ? score : 0;
            return [...newArr];
        })
        e.target.value = score >= 0 ? score : placeHolder; 
        // console.log(scoreArr);
    }

    useEffect(()=>{
        setTotalScore(scoreArr.reduce((acc, num)=> parseFloat(acc) + parseFloat(num)));
    },[scoreArr])

    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <h3>Score Round</h3>
                <div>
                    <label htmlFor="score1"></label>
                    <input 
                        id="dartOne" 
                        name="score1" 
                        placeholder="Enter Score Dart One" 
                        type="number" 
                        onChange={alterScore}
                    />
                </div>
                <div>
                    <label htmlFor="score2"></label>
                    <input 
                        id="dartTwo"
                        name="score2" 
                        placeholder="Enter Score Dart Two" 
                        type="number" 
                        onChange={alterScore} />
                </div>
                <div>
                    <label htmlFor="score3"></label>
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
                <p>{totalScore} :     {scoreArr[0]} , {scoreArr[1]} , {scoreArr[2]}</p>
            </form>
        </div>
    )
}

export default ScoreForm
