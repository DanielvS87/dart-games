import React, { createContext, useState } from 'react';
import { v1 } from 'uuid';

export const PlayersContext = createContext();

const PlayersContextProvider = props => {
    const [ players, setPlayers ] = useState([
        {
            id: v1(),
            name: "Daniel",
            startingScore: 501,
            doubleOut: true,
            scoreArr: [],
            amountLeftArr: []
        },
        {
            id: v1(),
            name: "Daniel2",
            startingScore: 501,
            doubleOut: true,
            scoreArr: [],
            amountLeftArr: []    
        },
        {
            id: v1(),
            name: "Daniel2",
            startingScore: 501,
            doubleOut: true,
            scoreArr: [],
            amountLeftArr: []    
        },
        {
            id: v1(),
            name: "Daniel2",
            startingScore: 501,
            doubleOut: true,
            scoreArr: [],
            amountLeftArr: []    
        }
    ]);
    const [activePlayerIndex, setActivePlayerIndex] = useState(0)

    return(
        <PlayersContext.Provider value={{players, setPlayers, activePlayerIndex, setActivePlayerIndex}}>
            {props.children}
        </PlayersContext.Provider>
    )
}

export default PlayersContextProvider;