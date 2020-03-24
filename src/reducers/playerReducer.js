import { v1 } from 'uuid'

export const playerReducer = (state, action) => {
    switch(action.type){
        case "ADD_PLAYER":
            const {name, startingScore, doubleOut, password} = action.payload
            return [
                ...state, {
                    id: v1(),
                    name, startingScore, doubleOut, password,
                    amountLeftArr:[],
                    scoreArr:[]
                }
            ]
        default: return state;
    }
}