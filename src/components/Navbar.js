import React, { useContext } from 'react'
import { LayoutContext } from '../contexts/layoutContext';


const Navbar = () => {
    
    const { addPlayer, dispatch } = useContext(LayoutContext);

    return (
        <div className="Navbar">
            <p onClick ={()=> {
                dispatch({
                type: 'PLAYER_FORM_TRUE',
                addPlayer
                })}} 
            >Add Player</p>
            <p onClick ={()=> {
                dispatch({
                type: 'PLAYER_FORM_FALSE',
                addPlayer
                })}} 
            >HOME</p>
        </div>
    )
}

export default Navbar
