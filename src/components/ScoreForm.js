import React, { useContext } from 'react'
import { ScoreContext } from '../contexts/scoreContext'

const ScoreForm = () => {
    const { score, dispatch } = useContext(ScoreContext)
    const { totalValue } = score;

    const alterScore = e => {
        const a = e.target.value
        const value = ( a === "" || a === NaN ) ? 0 : parseFloat(a);
        const dartNumber = e.target.id;
        console.log(dartNumber, value);
        dispatch({
            type: 'UPDATE_DART',
            payload: {
                value, 
                dartNumber 
            }
        })
    }

    return (
        <div className="ScoreForm col s6 offset-6">
            <form id="add-score" className="score-form-container col s8 offset-s2" onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <h2>Enter Score</h2>
                <div className="row cont">
                    <div className="col s8 offset-s2 input-field">
                        <label htmlFor="dartOne">Dart One :</label>
                        <input id="dartOne" type="number" onChange={alterScore}/>
                    </div>
                </div>
                <div className="row cont">
                    <div className="col s8 offset-s2 input-field">
                        <label htmlFor="dartTwo">Dart Two :</label>
                        <input id="dartTwo" type="number" onChange={alterScore}/>
                    </div>
                </div>
                <div className="row cont">
                    <div className="col s8 offset-s2 input-field">
                        <label htmlFor="dartThree">Dart Three :</label>
                        <input id="dartThree" type="number" onChange={alterScore}/>
                    </div>
                </div>
                <div>
                    <input className="btn" type="submit" value="Enter Score"/>
                </div>
                <br />
                <p>
                    Total Score : {totalValue}
                </p>
            </form>
        </div>
    )
}

export default ScoreForm
