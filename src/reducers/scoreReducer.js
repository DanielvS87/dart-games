
export const scoreReducer = ( state, action ) => {
    console.log(action)
    switch(action.type){
        case 'UPDATE_DART':
            const { dartNumber, value } = action.payload
            const { dartOne, dartTwo, dartThree } = state
            return {
                ...state,
                [`${dartNumber}`]: value,
                totalValue: dartNumber === "dartOne" ? dartTwo + dartThree + value 
                                : dartNumber === "dartTwo" ? dartOne + dartThree + value :
                                dartOne + dartTwo + value
            };
        default: return state
    }
}