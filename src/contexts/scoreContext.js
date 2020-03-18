import React, { createContext, useState } from 'react';

export const ScoreContext = createContext();

const ScoreContextProvider = props => {
    const [ scoreArr, setScoreArr] = useState([0,0,0])
    const [ totalScore, setTotalScore] = useState(0)

    return(
        <ScoreContext.Provider value={{
            scoreArr, setScoreArr,
            totalScore, setTotalScore
        }}>
            {props.children}
        </ScoreContext.Provider>
    )
}

export default ScoreContextProvider;