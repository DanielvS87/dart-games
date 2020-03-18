import React, { useContext } from 'react'
import { ScoreContext } from '../contexts/scoreContext'

const ScoreForm = () => {
    const { score, dispatch } = useContext(ScoreContext)
    const { dartOne, dartTwo, dartThree, totalValue } = score;

    const alterScore = e => {
        const a = e.target.value
        const value = ( a === "" || a === NaN ) ? 0 : parseFloat(a);
        const dartNumber = e.target.id;
        dispatch({
            type: 'UPDATE_DART',
            payload: {
                value, 
                dartNumber 
            }
        })
    }

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
                        min="0" max="60"
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
                        min="0" max="60"
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
                        min="0" max="60"
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
            {dartOne} {dartTwo} {dartThree}<br/>
            {totalValue}
        </div>
    )
}

export default ScoreForm
