
export const layoutReducer = ( state, action ) => {
    switch(action.type){
        case 'TOGGLE_ADD_PLAYER_FORM':
            return !action.addPlayer;
        default: return state
    }
}