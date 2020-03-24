import React, { createContext, useReducer } from 'react';
import { playerReducer } from '../reducers/playerReducer';

export const PlayersContext = createContext();

const PlayersContextProvider = props => {
    const [ players, dispatch ] = useReducer(playerReducer, []);

    return(
        <PlayersContext.Provider value={{players, dispatch }}>
            {props.children}
        </PlayersContext.Provider>
    )
}

export default PlayersContextProvider;