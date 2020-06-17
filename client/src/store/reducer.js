import {RESTART_INSTRUCTIONS} from './actions'; 

const initialState = { tokenId: null, startTime: null, restartedInstructions: false };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOKEN_ID':
            return {
                ...state,
                tokenId: action.tokenId
            };
        case 'START_TIME':
            return {
                ...state,
                startTime: action.startTime
            };
        
        case RESTART_INSTRUCTIONS:
            return {
                ...state,
                restartedInstructions: true
            };
        default:
            return state;
    }
}

export default reducer;