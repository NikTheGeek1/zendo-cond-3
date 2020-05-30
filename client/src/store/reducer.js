const initialState = { tokenId: null, startTime: null };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOKEN_ID':
            return {
                ...state,
                tokenId: action.tokenId
            }
        case 'START_TIME':
            return {
                ...state,
                startTime: action.startTime
            }
        default:
            return state;
    }
}

export default reducer;