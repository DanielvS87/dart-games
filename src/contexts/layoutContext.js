import React, { createContext, useReducer } from 'react';
import { layoutReducer } from '../reducers/layoutReducer';

export const LayoutContext = createContext();

const LayoutContextProvider = props => {
    const [ addPlayer, dispatch ] = useReducer( layoutReducer, false )

    return(
        <LayoutContext.Provider value={{ addPlayer, dispatch }}>
            {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutContextProvider;