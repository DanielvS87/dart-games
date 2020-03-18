import React, { createContext, useReducer } from 'react';
import { scoreReducer } from '../reducers/scoreReducer'

export const ScoreContext = createContext();

const ScoreContextProvider = props => {
    const [ score, dispatch ] = useReducer(scoreReducer,{
        dartOne: 0,
        dartTwo: 0,
        dartThree: 0,
        totalValue: 0
    })
    return(
        <ScoreContext.Provider value={{ score, dispatch }}>
            {props.children}
        </ScoreContext.Provider>
    )
}

export default ScoreContextProvider;