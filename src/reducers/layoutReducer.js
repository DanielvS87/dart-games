
export const layoutReducer = ( state, action ) => {
    switch(action.type){
        case 'PLAYER_FORM_TRUE':
            return true;
        case 'PLAYER_FORM_FALSE':
            return false;
        default: return state
    }
}