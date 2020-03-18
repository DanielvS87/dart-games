
export const playerReducer = (state, action) => {
    switch(action.type){
        case "ADD_PLAYER":
            return [
                ...state,
            ]
        default: return state;
    }
}