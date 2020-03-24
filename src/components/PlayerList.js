import React from 'react'
import ActivePlayer from './ActivePlayer'
import { OtherPlayers } from './OtherPlayers'

const PlayerList = () => {
    return (
        <div className="col s6 PlayerList">
            <ActivePlayer />
            <OtherPlayers />
        </div>
    )
}

export default PlayerList
