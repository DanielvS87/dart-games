import React, { useContext } from 'react'
import { LayoutContext } from '../contexts/layoutContext';


const Navbar = () => {
    
    const { addPlayer, dispatch } = useContext(LayoutContext);

    console.log( addPlayer);

    return (
        <div>
            <p onClick ={()=> {
                console.log(addPlayer);
                dispatch({
                    type: 'TOGGLE_ADD_PLAYER_FORM',
                    addPlayer
                })
            }} >Add Player</p>
        </div>
    )
}

export default Navbar
